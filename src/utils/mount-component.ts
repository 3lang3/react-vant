/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createElement, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export function mountComponent(RootComponent, callback) {
  const root = document.createElement('div');

  const Root = () => {
    const ref = useRef(null);

    useEffect(() => {
      const { open, toggle, clear } = ref.current;
      callback({
        open,
        toggle,
        clear,
        unmount() {
          ReactDOM.unmountComponentAtNode(root);
          if (root.parentNode) {
            root.parentNode.removeChild(root);
          }
        },
      });
    }, [ref]);

    return createElement(RootComponent, { ref });
  };

  const app = createElement(Root);
  document.body.appendChild(root);

  ReactDOM.render(app, root);
}
