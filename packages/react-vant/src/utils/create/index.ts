/* eslint-disable no-param-reassign */
import { BEM, createBEM } from './bem';

export type CreateNamespaceReturn = [BEM, string];

export function createNamespace(name: string, prefix?: string): CreateNamespaceReturn {
  name = `${prefix || 'rv'}-${name}`;
  return [createBEM(name), name];
}
