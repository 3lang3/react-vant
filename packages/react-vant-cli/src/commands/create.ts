import inquirer from 'inquirer';
import { existsSync, outputFileSync, readFileSync } from 'fs-extra';
import { kebabCase, getComponents, smartOutputFile } from '../common';
import { CONFIG_FILE_NAME, nav, ROOT, ZHPFE_CONFIG_FILE } from '../common/constant';
import { consola, ora } from '../common/logger';
import {
  DEMO_INDEX_CONTENT,
  DEMO_STYLE_CONTENT,
  DEMO_INDEX_PATH,
  DEMO_STYLE_PATH,
  README_PATH,
  README_CONTENT,
  PROPS_TYPE_CONTENT,
  PROPS_PATH,
  INDEX_CONTENT,
  INDEX_PATH,
  ComponentPrompt,
  REGISTER_SRC_PATH,
  REGISTER_SRC_CONTENT,
  configContent,
} from '../templates/component';
import { EXPORT_PATH, EXPORT_CONTENT } from '../templates/component/Export';
import {
  STYLE_INDEX_CONTENT,
  STYLE_INDEX_LESS_PATH,
  STYLE_VAR_CONTENT,
  STYLE_VAR_LESS_PATH,
} from '../templates/component/style';
// 中横线组件名,路径
let HLComponent = '';
// 组件驼峰命名
let ComponentName = '';
// 组件目录
let ComponentPath = '';

async function getComponentPrompt(): Promise<{
  componentName;
  aliasName;
  classification;
  introduction;
}> {
  return inquirer.prompt(ComponentPrompt);
}

// 生成demo
async function generateDemo() {
  smartOutputFile(DEMO_INDEX_PATH(HLComponent), DEMO_INDEX_CONTENT(ComponentName));
  smartOutputFile(DEMO_STYLE_PATH(HLComponent), DEMO_STYLE_CONTENT(HLComponent));
}

// 生成样式 style/index.less，style/var.less
async function generateStyle() {
  smartOutputFile(STYLE_INDEX_LESS_PATH(HLComponent), STYLE_INDEX_CONTENT(HLComponent));
  smartOutputFile(STYLE_VAR_LESS_PATH(HLComponent), STYLE_VAR_CONTENT());
}

// 生成PropsType.ts
async function generateProps() {
  // TODO 生成type导出
  smartOutputFile(PROPS_PATH(HLComponent), PROPS_TYPE_CONTENT(ComponentName));
}

// 生成文档 README.md
async function generateDoc(introduction: string, aliasName: string) {
  smartOutputFile(README_PATH(HLComponent), README_CONTENT(ComponentName, introduction, aliasName));
}

// 生成组件主体
async function generateComponent() {
  smartOutputFile(
    INDEX_PATH(HLComponent, ComponentName),
    INDEX_CONTENT(HLComponent, ComponentName),
  );
}

// 生成导出 index.ts
function generateExport() {
  smartOutputFile(EXPORT_PATH(HLComponent), EXPORT_CONTENT(ComponentName));
}

// 检查是否已存在同名组件
async function ComponentExists(name: string) {
  const exist = getComponents().includes(HLComponent);
  if (exist) {
    consola.error(`${name} already exists`);
    process.exit(1);
  }
}

// 生成代码
// TODO 根据选项生成不同的文件
async function generate(
  componentName: string,
  aliasName: string,
  classification: string,
  introduction: string,
) {
  await generateComponent(); // 组件主体
  await generateExport(); // 导出
  await generateProps(); // props
  await generateStyle(); // 组件样式
  await generateDemo(); // 组件demo，index.tsx style.less
  await generateDoc(introduction, aliasName); // 文档
}

// 注册组件
async function registerComponent(classification: string, aliasName: string) {
  // TODO 重复注册。排序
  // 注册导出
  if (existsSync(REGISTER_SRC_PATH)) {
    const previousContent = readFileSync(REGISTER_SRC_PATH, 'utf-8');
    const content = REGISTER_SRC_CONTENT(previousContent, ComponentName, HLComponent);
    if (previousContent === content) {
      return;
    }
    outputFileSync(REGISTER_SRC_PATH, content);
  }
  // 注册文档
  const config = require(ZHPFE_CONFIG_FILE);
  // 这段插入的代码好像可以优化一下
  const newConfig = nav.find((component) => component.title === classification);
  newConfig.items.push({
    path: HLComponent,
    title: `${ComponentName} ${aliasName}`,
  });
  nav.map((item) => {
    return [item, newConfig];
  });
  config.site.locales['zh-CN'].nav = nav;
  smartOutputFile(`${ROOT}/${CONFIG_FILE_NAME}`, configContent(config));
}

export async function create() {
  const { componentName, aliasName, classification, introduction } = await getComponentPrompt();
  console.log(componentName, aliasName, classification, introduction);
  ComponentName = componentName;
  HLComponent = kebabCase(ComponentName); // 获取中横线命名，目录相关
  ComponentPath = `${ROOT}/${HLComponent}`; // 获取组件的目录位置
  try {
    await ComponentExists(ComponentName); // 检查组件是否存在
    await generate(componentName, aliasName, classification, introduction); // 创建组件
    await registerComponent(classification, aliasName); // 注册组件
  } catch (err) {
    process.exit(err);
  }
  const spinner = ora(`${ComponentName} Component is being generated`).start();
  spinner.succeed(`The component ${ComponentName} is generated in src/${HLComponent}`);
}
