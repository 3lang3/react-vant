import React, { CSSProperties, useMemo } from 'react';
import { ConfigProviderProps } from './PropsType';

function kebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

function mapThemeVarsToCSSVars(themeVars: Record<string, string | number>) {
  const cssVars: Record<string, string | number> = {};
  Object.keys(themeVars).forEach((key) => {
    cssVars[`--rv-${kebabCase(key)}`] = themeVars[key];
  });
  return cssVars;
}

const ConfigProvider: React.FC<ConfigProviderProps> = ({ className, ...props }) => {
  const style = useMemo<CSSProperties | undefined>(() => {
    if (props.themeVars) {
      return { ...props.style, ...mapThemeVarsToCSSVars(props.themeVars) };
    }
    return props.style;
  }, [props.themeVars]);
  return React.createElement(
    props.tag,
    {
      className,
      style,
    },
    props.children,
  );
};

ConfigProvider.defaultProps = {
  tag: 'div',
};

export default ConfigProvider;
