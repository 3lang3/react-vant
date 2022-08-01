const gulp = require('gulp')
const postcss = require('gulp-postcss')
const through = require('through2')

const pxMultiplePlugin = require('postcss-px-multiple')({ times: 2 })

function generateREADME() {
  return gulp
    .src('./README.md')
    .pipe(gulp.dest('./dist/'))
}

function copyBundleCssToLib() {
  return gulp
    .src('./dist/bundle/*.css')
    .pipe(gulp.dest('./dist/lib'))
}

function generatePackageJSON() {
  return gulp
    .src('./package.json')
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString()
        const parsed = JSON.parse(rawJSON)
        parsed.dependencies = Object.entries(parsed.dependencies).reduce((acc, [key, value]) => {
          if (value.startsWith('workspace:')) {
            acc[key] = 'latest'
          } else {
            acc[key] = value
          }
          return acc
        }, {})
        delete parsed.devDependencies
        delete parsed.files
        const stringified = JSON.stringify(parsed, null, 2)
        file.contents = Buffer.from(stringified)
        cb(null, file)
      })
    )
    .pipe(gulp.dest('./dist/'))
}


function create2xFolder() {
  return gulp
    .src('./dist/**', {
      base: './dist/',
      ignore: ['./dist/2x/demos/**/*'],
    })
    .pipe(gulp.dest('./dist/2x/'))
}

function build2xCSS() {
  return gulp
    .src('./dist/2x/**/*.css', {
      base: './dist/2x/',
    })
    .pipe(postcss([pxMultiplePlugin]))
    .pipe(
      gulp.dest('./dist/2x', {
        overwrite: true,
      })
    )
}

exports.default = gulp.series(
  generatePackageJSON,
  generateREADME,
  copyBundleCssToLib,
)
