import { useState, useEffect } from 'react';
import type { MDocPreviewerProps } from '.';

const SB_API_ENDPOINT = 'https://stackblitz.com/run';

function getTextContent(raw: string) {
  const elm = document.createElement('span');

  elm.innerHTML = raw;
  const text = elm.textContent;
  elm.remove();

  return text;
}

/**
 * get serialized data that use to submit to codesandbox.io
 * @param opts  previewer props
 */
function getStackblitzData(opts: Omit<MDocPreviewerProps, 'children'>) {
  const isTSX = opts.lang === 'tsx';
  const ext = isTSX ? '.tsx' : '.jsx';
  const files: Record<string, { content: string }> = {};
  const dependencies: Record<string, string> = {};
  const CSSDeps = Object.values(opts.dependencies).filter((dep) => dep.css);
  const appFileName = `src/App${ext}`;
  const entryFileName = `src/index.js`;

  const title = opts.meta?.title;
  const description = getTextContent(opts.meta?.description || 'An auto-generated demo by mdoc');

  const devDependencies = isTSX ? { typescript: '^3' } : {};

  // generate dependencies
  Object.entries(opts.dependencies).forEach(([dep, { type, value }]) => {
    if (type === 'NPM') dependencies[dep] = value;
  });

  // add react-dom dependency
  if (!dependencies['react-dom']) {
    dependencies['react-dom'] = dependencies.react || 'latest';
  }

  // append index.html
  files['public/index.html'] = {
    content: `<!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <div style="margin: 16px;" id="root"></div>
    </body>
  </html>
  `.trim(),
  };

  // append entry file
  files[entryFileName] = {
    content: `/**
* This is an auto-generated demo by mdoc
* if you think it is not working as expected,
* please report the issue at
* https://github.com/3lang3/vite-plugin-react-mdoc/issues
**/

import React from 'react';
import ReactDOM from 'react-dom';
${CSSDeps.map(({ css }) => `import '${css}';`).join('\n')}
import App from './App';

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);`,
  };

  // append other imported local files
  Object.entries(opts.dependencies).forEach(([filename, { value, type }]) => {
    if (type !== 'FILE') return;
    // handle primary content
    files[filename.startsWith('index') ? appFileName : `src/${filename}`] = {
      content: value,
    };
  });

  return { title, description, dependencies, devDependencies, files };
}

function addHiddenInput(form, name, value) {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = value;
  form.appendChild(input);
}

/**
 * use CodeSandbox.io
 * @param opts  previewer opts
 * @note  return a open function for open demo on codesandbox.io
 */
export default (
  opts: Omit<MDocPreviewerProps, 'children'> | null,
  api: string = SB_API_ENDPOINT,
) => {
  const [handler, setHandler] = useState<(...args: any) => void | undefined>();

  useEffect(() => {
    if (opts && Object.keys(opts.dependencies || []).length) {
      const demoConfig = getStackblitzData(opts);
      const form = document.createElement('form');
      form.method = 'POST';
      form.target = '_blank';
      form.action = api;

      const title = opts.meta?.title;
      const description = getTextContent(
        opts.meta?.description || 'An auto-generated demo by mdoc',
      );
      addHiddenInput(form, 'project[template]', 'create-react-app');
      addHiddenInput(form, 'project[title]', title);
      addHiddenInput(form, 'project[description]', `# ${title}\n${description}`);
      addHiddenInput(form, 'project[dependencies]', JSON.stringify(demoConfig.dependencies));
      addHiddenInput(form, 'project[devDependencies]', JSON.stringify(demoConfig.devDependencies));
      Object.keys(demoConfig.files).forEach((key) => {
        const value = demoConfig.files[key].content;
        addHiddenInput(form, `project[files][${key}]`, value);
      });
      document.body.appendChild(form);
      setHandler(() => () => form.submit());

      return () => form.remove();
    }
    return () => null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(opts)]);

  return handler;
};
