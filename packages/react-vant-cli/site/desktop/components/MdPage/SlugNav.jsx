import React from 'react';
import clsx from 'clsx';
import './SlugNav.less';

export default ({ slugs }) => {
  const scrollWithOffset = (slug) => {
    const element = document.getElementById(slug.id);
    if (element) {
      const header = document.querySelector('.vant-doc-header');
      const elementPosition = element.getBoundingClientRect().top - header.clientHeight;
      window.scrollTo({ top: elementPosition + window.scrollY });
    }
  };

  return (
    <div className="vant-doc-md--slugs">
      <div className="vant-doc-md--slug-title">#目录</div>
      {slugs.map((slug, key) => {
        if (+slug.depth === 2 || +slug.depth === 3) {
          return (
            <a
              // eslint-disable-next-line react/no-array-index-key
              key={key}
              href={`#${slug.id}`}
              onClick={() => scrollWithOffset(slug)}
              className={clsx('vant-doc-md--slug', `vant-doc-md--slug-${slug.depth}`)}
            >
              {slug.text}
            </a>
          );
        }
        return null;
      })}
    </div>
  );
};
