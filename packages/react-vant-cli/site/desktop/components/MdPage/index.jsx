import React from 'react';
import clsx from 'clsx';
import MdPreviewer from '../MdPreviewer';
import SimulatorContext from '../../context';
import './index.less';

const SlugNav = ({ slugs }) => {
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

  const hashPath = React.useMemo(() => window.location.hash.split('#').filter(Boolean)[0], []);

  const formatSlugs = React.useMemo(
    () => slugs.map((slug) => ({ ...slug, id: `${hashPath}#${slug.id}` })),
    [hashPath, slugs],
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
    replaceHeadingsId(hashPath, '.vant-doc-md-page h2');
    replaceHeadingsId(hashPath, '.vant-doc-md-page h3');
  }, [hashPath]);

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
      {!!slugs.length && showSlugs && !fluid && <SlugNav slugs={formatSlugs} />}
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

function replaceHeadingsId(hashPath, target) {
  const headings = [...document.querySelectorAll(target)].filter((el) => el.id);
  headings.forEach((el) => {
    el.id = el.id.replace(/(.*)/, `${hashPath}#$1`);
  });
}
