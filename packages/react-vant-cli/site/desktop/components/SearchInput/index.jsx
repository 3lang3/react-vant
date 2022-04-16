import React from 'react';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import './index.less';

const SearchInput = (props) => {
  return (
    <div className="vant-doc-search ">
      <DocSearch {...props} />
    </div>
  );
};

export default SearchInput;
