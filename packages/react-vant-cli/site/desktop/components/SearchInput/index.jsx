import React, { useEffect } from 'react';

import './index.less';

const SearchInput = (props) => {
  const { searchConfig, lang } = props;
  let docsearchInstance = null;

  useEffect(() => {
    if (docsearchInstance) {
      docsearchInstance.algoliaOptions.facetFilters = [`lang:${lang}`];
    }
  }, [lang]);

  useEffect(() => {
    if (searchConfig) {
      docsearchInstance = window.docsearch({
        ...searchConfig,
        transformData: (hits) => {
          hits.forEach((hit) => {
            if (hit.anchor) {
              hit.url = hit.url + '#' + hit.anchor;
              hit.anchor = null;
            }
          });
          if (searchConfig.transformData) {
            searchConfig.transformData(hits);
          }
        },
        inputSelector: '.vant-doc-search',
        algoliaOptions: {
          facetFilters: [`lang:${lang}`],
        },
      });
    }
  }, []);

  const placeholder = searchConfig.placeholder || 'Search...';
  return <input className="vant-doc-search" placeholder={placeholder} />;
};

export default SearchInput;
