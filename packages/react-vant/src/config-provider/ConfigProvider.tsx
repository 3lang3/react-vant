import React, { CSSProperties, useMemo } from 'react';
import { kebabCase } from '../utils';
import ConfigProviderContext, { INITIAL_STATE } from './ConfigProviderContext';
import { ConfigProviderProps } from './PropsType';

function mapThemeVarsToCSSVars(themeVars: Record<string, string | number>, prefix: string) {
  const cssVars: Record<string, string | number> = {};
  Object.keys(themeVars).forEach((key) => {
    if (key.toString().startsWith(`--${prefix}-`)) {
      cssVars[key] = themeVars[key];
    } else {
      cssVars[`--${prefix}-${kebabCase(key)}`] = themeVars[key];
    }
  });
  return cssVars;
}

const ConfigProvider: React.FC<ConfigProviderProps> = ({
  className,
  style,
  themeVars,
  tag,
  children,
  ...props
}) => {
  const varStyle = useMemo<CSSProperties | undefined>(() => {
    if (themeVars) {
      return { ...style, ...mapThemeVarsToCSSVars(themeVars, 'rv') };
    }
    return style;
  }, [themeVars]);
  return (
    <ConfigProviderContext.Provider value={{ ...INITIAL_STATE, ...props }}>
      {React.createElement(
        tag,
        {
          className,
          style: varStyle,
        },
        children,
      )}
    </ConfigProviderContext.Provider>
  );
};

ConfigProvider.defaultProps = {
  tag: 'div',
};

export default ConfigProvider;
