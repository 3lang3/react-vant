/* eslint-disable no-console */
const fs = require('fs/promises');
const fse = require('fs-extra');
const path = require('path');
const shell = require('shelljs');

const svgDir = path.join(__dirname, '../src/svg');
const sketch = path.join(__dirname, '../src/assets/icons.sketch');
const SKETCH_TOOL_DIR = '/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool';

fse.removeSync(svgDir);

// extract svg from sketch
// should install sketchtool first
// install guide: https://developer.sketchapp.com/guides/sketchtool/
(async () => {
  await shell.exec(
    `${SKETCH_TOOL_DIR} export slices --formats=svg --overwriting=YES --save-for-web=YES --output=${svgDir} ${sketch}`,
  );
  replaceExtAttrs();
})();

async function replaceExtAttrs() {
  console.log('[export]: remove svg fill prop...');
  const files = await fs.readdir(svgDir, 'utf8');
  files.forEach(async (file) => {
    const filePath = path.join(svgDir, file);
    let content = await fs.readFile(filePath, 'utf8');
    content = content.replace(/fill="[#a-z0-9]*"/gi, '');
    await fs.writeFile(filePath, content, 'utf-8');
  });
  console.log('[export]: done');
}
