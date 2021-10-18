#!/usr/bin/env node

import inquirer from 'inquirer';
import consola from 'consola';
import { ensureDir } from 'fs-extra';
import { ReactVanGenerator } from './generator';

const PROMPTS = [
  {
    type: 'input',
    name: 'name',
    message: 'Your package name',
  },
];

export default async function run() {
  // 设置命令行传入参数
  const { name } = await inquirer.prompt(PROMPTS);

  try {
    await ensureDir(name);

    const generator = new ReactVanGenerator(name);
    generator.run();
  } catch (e) {
    consola.error(e);
  }
}

run();
