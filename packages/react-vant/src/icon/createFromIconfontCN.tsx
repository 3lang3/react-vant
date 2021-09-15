import React, { FunctionComponent, ReactNode } from 'react';
import { IconProps } from './PropsType';
import Icon from './Icon';

const cache = new Set<string>();

export default function createFromIconfontCN(
  scriptUrl: string,
): FunctionComponent<Omit<IconProps, 'classPrefix'>> {
  if (
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    typeof document.createElement === 'function' &&
    typeof scriptUrl === 'string' &&
    scriptUrl.length &&
    !cache.has(scriptUrl)
  ) {
    const script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('data-namespace', scriptUrl);
    cache.add(scriptUrl);
    document.body.appendChild(script);
  }

  const Iconfont: FunctionComponent<Omit<IconProps, 'classPrefix'>> = (props) => {
    Iconfont.displayName = 'Iconfont';

    const { name } = props;

    let content: ReactNode;
    if (name) {
      content = (
        <svg width="1em" height="1em" fill="currentColor">
          <use xlinkHref={`#${name}`} />
        </svg>
      );
    }
    return <Icon {...props}>{content}</Icon>;
  };

  return Iconfont;
}
