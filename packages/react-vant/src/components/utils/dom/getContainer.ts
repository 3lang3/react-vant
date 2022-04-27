export function resolveContainer(
  getContainer: HTMLElement | (() => HTMLElement) | undefined,
): HTMLElement {
  const container = typeof getContainer === 'function' ? getContainer() : getContainer;
  return container || document.body;
}
