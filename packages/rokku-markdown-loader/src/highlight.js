const prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

loadLanguages(['jsx']);

module.exports = function highlight(str, lang) {
  if (lang) {
    try {
      return prism.highlight(str, prism.languages[lang], lang);
    } catch (err) {
      console.log(err);
    }
  }

  return '';
};
