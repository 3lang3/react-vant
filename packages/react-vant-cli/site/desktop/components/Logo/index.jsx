import React from 'react';
import clsx from 'clsx';
import { packageVersion } from 'site-desktop-shared';
import './index.less';

const VersionToggle = ({ versions }) => {
  const versionRef = React.useRef(null);
  const [showVersionPop, setShowVersionPop] = React.useState(false);

  const checkHideVersionPop = (event) => {
    if (!versionRef.current.contains(event.target)) {
      setShowVersionPop(false);
    }
  };

  const toggleVersionPop = () => {
    // eslint-disable-next-line react/no-this-in-sfc
    const val = !showVersionPop;
    const action = val ? 'add' : 'remove';
    document.body[`${action}EventListener`]('click', checkHideVersionPop);
    setShowVersionPop(val);
  };

  const onSwitchVersion = (version) => {
    if (version.link) {
      window.location.href = version.link;
    }
  };

  return (
    <div ref={versionRef} style={{ width: 130 }} className="vant-doc-header__top-nav-item">
      <span
        className={clsx('vant-doc-header__cube vant-doc-header__version')}
        onClick={toggleVersionPop}
      >
        {packageVersion}
        <div name="vant-doc-dropdown">
          {showVersionPop && (
            <div className="vant-doc-header__version-pop">
              {versions.map((item) => (
                <div
                  key={item}
                  className="vant-doc-header__version-pop-item"
                  onClick={() => onSwitchVersion(item)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </span>
    </div>
  );
};

const Logo = (props) => {
  const { config, versions = [] } = props;
  return (
    <div className="vant-doc-logo">
      <a className="vant-doc-logo--main">
        <img alt="react vant" src={config.logo} />
        <span>{config.title}</span>
      </a>
      {!!versions.length && <VersionToggle versions={versions} />}
    </div>
  );
};

export default Logo;
