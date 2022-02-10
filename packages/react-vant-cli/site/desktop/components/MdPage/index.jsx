import React from 'react';
import clsx from 'clsx';
import MdPreviewer from '../MdPreviewer';
import SimulatorContext from '../../context';
import './index.less';

const SlugNav = ({ slugs }) => {
  const onClick = (slug) => {
    const element = document.querySelector(`#${slug.id}`);
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
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={key}
              onClick={() => onClick(slug)}
              className={clsx('vant-doc-md--slug', `vant-doc-md--slug-${slug.depth}`)}
            >
              {slug.text}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

const previewer = (props) => <MdPreviewer {...props} />;

const MdPageComponent = ({
  toggleSimulator,
  simulatorVisible,
  children,
  frontmatter = {},
  slugs = [],
  hideSimulator,
}) => {
  const { simulator = true, fluid, slugs: showSlugs = true } = frontmatter;
  const pageSimulator = simulator && !hideSimulator;

  React.useEffect(() => {
    if (simulator !== simulatorVisible) {
      toggleSimulator(simulator);
    }
  }, [simulator, simulatorVisible, toggleSimulator]);
  return (
    <div
      className={clsx('vant-doc-md-wrapper', {
        'vant-doc-md-wrapper--simulator': pageSimulator,
      })}
    >
      {!!slugs.length && showSlugs && !fluid && <SlugNav slugs={slugs} />}
      <section
        className={clsx('vant-doc-md-page', {
          'vant-doc-md-page--fluid': fluid,
        })}
      >
        {children({ previewer })}
      </section>
    </div>
  );
};

export default (props) => {
  return (
    <SimulatorContext.Consumer>
      {({ visible, toggleSimulator }) => (
        <MdPageComponent simulatorVisible={visible} toggleSimulator={toggleSimulator} {...props} />
      )}
    </SimulatorContext.Consumer>
  );
};
