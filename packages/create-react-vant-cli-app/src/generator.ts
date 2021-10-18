import glob from 'fast-glob';
import chalk from 'chalk';
import consola from 'consola';
import { join } from 'path';
import Yeoman from 'yeoman-environment';
import Generator from 'yeoman-generator';
import { CWD, GENERATOR_DIR, GENERATOR_DIR_DIR } from './constant';

const PROMPTS = [
  {
    name: 'preprocessor',
    message: 'Select css preprocessor',
    type: 'list',
    choices: ['Less', 'Sass'],
  },
];

export class ReactVanGenerator extends Generator {
  inputs = {
    name: '',
    cssLang: '',
    preprocessor: '',
  };

  constructor(name: string) {
    super([], {
      env: Yeoman.createEnv([], {
        cwd: join(CWD, name),
      }),
      resolved: GENERATOR_DIR,
    });

    this.inputs.name = name;
  }

  // async prompting() {
  //   return this.prompt<Record<string, string>>(PROMPTS).then((inputs) => {
  //     const preprocessor = inputs.preprocessor.toLowerCase();
  //     const cssLang = preprocessor === 'sass' ? 'scss' : preprocessor;
  //
  //     this.inputs.cssLang = cssLang;
  //     this.inputs.preprocessor = preprocessor;
  //   });
  // }

  writing() {
    consola.info(`Creating project in ${join(CWD, this.inputs.name)}\n`);
    /**
    @see {@link https://github.com/mrmlnc/fast-glob#how-to-write-patterns-on-windows}
    */
    const templatePath = join(GENERATOR_DIR_DIR).replace(/\\/g, '/');
    const templateFiles = glob.sync(join(templatePath, '**', '*').replace(/\\/g, '/'), {
      dot: true,
    });
    const destinationRoot = this.destinationRoot();

    templateFiles.forEach((filePath) => {
      const outputPath = filePath.replace('.tpl', '').replace(templatePath, destinationRoot);
      this.fs.copyTpl(filePath, outputPath, this.inputs);
    });
  }

  install() {
    console.log();
    consola.info('Install dependencies...\n');

    process.chdir(this.inputs.name);

    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true,
      skipMessage: true,
    });
  }

  end() {
    const { name } = this.inputs;

    console.log();
    consola.success(`Successfully created ${chalk.yellow(name)}.`);
    consola.success(`Run ${chalk.yellow(`cd ${name} && yarn start`)} to start development!`);
  }
}
