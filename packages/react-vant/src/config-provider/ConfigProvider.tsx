import React, { CSSProperties, useMemo } from 'react';
import ConfigProviderContext, { INITIAL_STATE } from './ConfigProviderContext';
import { ConfigProviderProps } from './PropsType';

function kebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

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
      return { ...style, ...mapThemeVarsToCSSVars(themeVars, props.prefixCls) };
    }
    return style;
  }, [themeVars]);
  return (
    <ConfigProviderContext.Provider value={{ ...INITIAL_STATE, ...props }}>
      <TagElement className={className} style={varStyle}>
        {children}
      </TagElement>
    </ConfigProviderContext.Provider>
  );
};

ConfigProvider.defaultProps = {
  prefixCls: 'rv',
};

export default ConfigProvider;
