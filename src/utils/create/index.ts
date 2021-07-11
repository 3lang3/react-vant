/* eslint-disable no-param-reassign */
import { BEM, createBEM } from './bem';

type CreateNamespaceReturn = [BEM];

export function createNamespace(name: string): CreateNamespaceReturn {
  name = `rk-${name}`;
  return [createBEM(name)];
}
