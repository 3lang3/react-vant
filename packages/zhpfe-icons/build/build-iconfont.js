/**
 * build iconfont from sketch
 */
const { src, dest, series } = require('gulp');
const fs = require('fs-extra');
const path = require('path');
const glob = require('fast-glob');
const md5File = require('md5-file');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const svgSymbols = require('gulp-svg-symbols');
const svgSymbols2js = require('gulp-svg-symbols2js');
const uglify = require('gulp-uglify');

const svgmin = require(`gulp-svgmin`);
const cheerio = require(`gulp-cheerio`);

const encode = require('./build-encode');
const config = require('../src/config');
const { deleteIconFile, uploadFile } = require('./upload-file');

const srcDir = path.join(__dirname, '../src');
const svgDir = path.join(__dirname, '../assets/svg');
const sketch = path.join(__dirname, '../assets/icons.sketch');
const template = path.join(__dirname, './template.tpl');
const formats = ['ttf', 'woff', 'woff2'];

// get md5 from sketch
const md5 = md5File.sync(sketch).slice(0, 6);
const fontName = `${config.name}-${md5}`;

// remove previous fonts
const prevFonts = glob.sync(formats.map((ext) => path.join(srcDir, `*.${ext}`)));
prevFonts.forEach((_font) => fs.removeSync(_font));

// generate font from svg && build index.less
function font() {
  return src([`${svgDir}/*.svg`])
    .pipe(
      iconfontCss({
        fontName: config.name,
        path: template,
        targetPath: '../src/index.less',
        normalize: true,
        // fixedCodepoints: codepoints,
        cssClass: fontName, // this is a trick to pass fontName to template
      }),
    )
    .pipe(
      iconfont({
        fontName,
        formats,
        normalize: true,
        fontHeight: 1000,
      }),
    )
    .pipe(dest(srcDir));
}

function upload(done) {
  // generate encode.less
  encode(fontName, srcDir);

  deleteIconFile().then(() => {
    // upload font to cdn
    formats.forEach((ext) => {
      uploadFile(`${fontName}.${ext}`, path.join(srcDir, `${fontName}.${ext}`));
    });
    done();
  });
}

function svg() {
  return (
    src([`${svgDir}/map-*.svg`])
      .pipe(
        svgmin((file) => {
          const { relative } = file;
          const prefix = path.basename(relative, path.extname(relative));
          return {
            js2svg: {
              pretty: true,
            },
            plugins: [
              {
                // this prevent duplicated IDs when bundled in the same file
                cleanupIDs: { prefix: `${prefix}-` },
              },
              {
                // some cleaning
                removeDoctype: true,
              },
              {
                removeXMLProcInst: true,
              },
              {
                removeTitle: true,
              },
              {
                removeDesc: { removeAny: true },
              },
              {
                convertTransform: {},
              },
            ],
          };
        }),
      )
      // We need to move <clipPath> and <Mask> to the defs…
      // …in order for Firefox to render the SVG correctly
      .pipe(
        cheerio({
          run: ($) => {
            const $clipPath = $(`clipPath`);
            const $mask = $(`mask`);
            let $defs = $(`defs`);
            const hasClipPath = $clipPath.length > 0;
            const hasMask = $mask.length > 0;
            const hasDefs = $defs.length > 0;
            if (!hasClipPath && !hasMask) return;
            if (!hasDefs) {
              $defs = $(`<defs></defs>`);
              $defs.prependTo(`svg`);
            }
            function copyToDefs(i, el) {
              const $el = $(el);
              const $clone = $el.clone();
              $clone.appendTo($defs);
              $el.remove();
            }
            if (hasClipPath) $clipPath.each(copyToDefs);
            if (hasMask) $mask.each(copyToDefs);
          },
          parserOptions: {
            xmlMode: true,
          },
        }),
      )
      .pipe(
        svgSymbols({
          warn: false,
          templates: ['default-svg'],
        }),
      )
      .pipe(svgSymbols2js())
      .pipe(uglify())
      .pipe(dest(srcDir))
  );
}

exports.default = series(svg, font, upload);
