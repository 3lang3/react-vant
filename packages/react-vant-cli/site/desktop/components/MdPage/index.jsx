import React from 'react';
import clsx from 'clsx';
import MdPreviewer from '../MdPreviewer';
import SimulatorContext from '../../context';
import SlugNav from './SlugNav';
import './index.less';

const previewer = (props) => <MdPreviewer {...props} />;

const MdPageComponent = ({
  toggleSimulator,
  simulatorVisible,
  children,
  frontmatter = {},
  slugs = [],
  hideSimulator,
}) => {
  const { simulator = true, fluid, slugs: showSlugs = true, className } = frontmatter;
  const pageSimulator = simulator && !hideSimulator;

  const hashPath = React.useMemo(() => window.location.hash.split('#').filter(Boolean)[0], []);

  const formatSlugs = React.useMemo(
    () => (slugs ? slugs.map((slug) => ({ ...slug, id: `${hashPath}#${slug.id}` })) : []),
    [hashPath, slugs],
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
    // anchor format
    replaceHeadingsId(hashPath, '.vant-doc-md-page h2');
    replaceHeadingsId(hashPath, '.vant-doc-md-page h3');
  }, [hashPath]);

  React.useEffect(() => {
    // simulator 是否展示
    if (simulator !== simulatorVisible) {
      toggleSimulator(simulator);
    }
  }, [simulator, simulatorVisible, toggleSimulator]);

  const pageSlug = !!slugs.length && showSlugs && !fluid;
  return (
    <div
      className={clsx('vant-doc-md-wrapper', {
        'vant-doc-md-wrapper--simulator': pageSimulator,
      })}
    >
      {pageSlug && <SlugNav slugs={formatSlugs} />}
      <section
        className={clsx(
          'vant-doc-md-page',
          {
            'vant-doc-md-page--fluid': fluid,
            'vant-doc-md-page--slug': pageSlug,
          },
          className,
        )}
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
