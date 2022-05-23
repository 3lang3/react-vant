import { createPortal } from 'react-dom';
import { ReactElement } from 'react';
import { resolveContainer } from './getContainer';
import canUseDom from './canUseDom';

export type GetContainer = HTMLElement | (() => HTMLElement) | null;

export function renderToContainer(getContainer: GetContainer, node: ReactElement): ReactElement {
  if (canUseDom && getContainer) {
    const container = resolveContainer(getContainer);
    return createPortal(node, container);
  }
  return node;
}
