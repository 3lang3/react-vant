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
  tag = 'div',
  children,
  ...props
}) => {
  const TagElement = tag as React.ElementType;

  const varStyle = useMemo<CSSProperties | undefined>(() => {
    if (themeVars) {
      return { ...style, ...mapThemeVarsToCSSVars(themeVars, 'rv') };
    }
    return style;
  }, [style, themeVars]);
  return (
    <ConfigProviderContext.Provider value={{ ...INITIAL_STATE, ...props }}>
      <TagElement className={className} style={varStyle}>
        {children}
      </TagElement>
    </ConfigProviderContext.Provider>
  );
};

ConfigProvider.defaultProps = {
  themeVars: {},
};

export default ConfigProvider;
