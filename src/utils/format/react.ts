import React from 'react';

export function parseChildList<T>(children: React.ReactNode): T[] {
  return React.Children.toArray(children)
    .map((node: React.ReactElement<T>) => {
      if (React.isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined;
        return {
          key,
          ...node.props,
          node,
        };
      }
      return null;
    })
    .filter((child) => child);
}
