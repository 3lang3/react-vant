import { createPortal } from 'react-dom';
import { ReactElement } from 'react';
import { resolveContainer } from './getContainer';

export type GetContainer = HTMLElement | (() => HTMLElement) | null;

export function renderToContainer(getContainer: GetContainer, node: ReactElement): ReactElement {
  if (getContainer) {
    const container = resolveContainer(getContainer);
    return createPortal(node, container);
  }
  return node;
}
