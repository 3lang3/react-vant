const MarkdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const { slugify } = require('transliteration');
const cardWrapper = require('./card-wrapper');
const highlight = require('./highlight');

function wrapper(content) {
  content = cardWrapper(content);
  content = escape(content);

  return `
  import React from 'react';

  const data = unescape(\`${content}\`);
  export default () => <section dangerouslySetInnerHTML={{ __html: data }}></section>
`;
}

const parser = new MarkdownIt({
  html: true,
  highlight,
}).use(markdownItAnchor, {
  level: 2,
  slugify,
});

module.exports = (source) => {
  return wrapper(parser.render(source));
};
