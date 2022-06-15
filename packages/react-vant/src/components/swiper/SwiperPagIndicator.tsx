import React from 'react';
import clsx from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { PageIndicatorProps } from './PropsType';

const SwiperPagIndicator = React.memo<PageIndicatorProps>(({ vertical, ...props }) => {
  const { prefixCls, createNamespace } = React.useContext(ConfigProviderContext);
  const [bem] = createNamespace('indicator', prefixCls);

  const dots: React.ReactElement[] = [];
  for (let i = 0; i < props.total; i++) {
    dots.push(
      <div
        key={i}
        className={clsx(
          bem('dot', {
            active: props.current === i,
          }),
        )}
      />,
    );
  }

  return (
    <div className={clsx(props.className, bem({ vertical }))} style={props.style}>
      {dots}
    </div>
  );
});

export default SwiperPagIndicator;
