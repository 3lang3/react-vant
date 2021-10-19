import { join } from 'path';

export const CWD = process.cwd();
export const GENERATOR_DIR = join(__dirname, '../generators');
export const GENERATOR_DIR_DIR = join(GENERATOR_DIR, '/react');
