import React, { useContext } from 'react';
import cls from 'clsx';
import { SkeletonProps } from './PropsType';
import { addUnit, getSizeStyle } from '../utils';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const DEFAULT_ROW_WIDTH = '100%';
const DEFAULT_LAST_ROW_WIDTH = '60%';

const Skeleton: React.FC<SkeletonProps> = ({ children, className, style, ...props }) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('skeleton', prefixCls);

  const getRowWidth = (index: number) => {
    const { rowWidth } = props;

    if (rowWidth === DEFAULT_ROW_WIDTH && index === +props.row - 1 && index !== 0) {
      return DEFAULT_LAST_ROW_WIDTH;
    }

    if (Array.isArray(rowWidth)) {
      return rowWidth[index];
    }

    return rowWidth;
  };
  const getRowHeight = (index: number) => {
    const { rowHeight } = props;

    if (Array.isArray(rowHeight)) {
      return rowHeight[index];
    }

    return rowHeight;
  };

  const renderAvatar = () => {
    if (props.avatar) {
      return (
        <div
          className={cls(bem('avatar', props.avatarShape))}
          style={getSizeStyle(props.avatarSize)}
        />
      );
    }
    return null;
  };

  const renderTitle = () => {
    if (props.title) {
      const width = addUnit(props.titleWidth);
      const height = addUnit(getRowHeight(0));
      return <div className={cls(bem('title'))} style={{ width, height }} />;
    }
    return null;
  };

  const renderRows = () =>
    Array(props.row)
      .fill('')
      .map((_, i) => {
        const width = addUnit(getRowWidth(i));
        const height = addUnit(getRowHeight(i));
        // eslint-disable-next-line react/no-array-index-key
        return <div key={i} className={cls(bem('row'))} style={{ width, height }} />;
      });

  if (!props.loading) return children;
  return (
    <div
      className={cls(className, bem({ animate: props.animate, round: props.round }))}
      style={style}
    >
      {renderAvatar()}
      <div className={cls(bem('content'))}>
        {renderTitle()}
        {renderRows()}
      </div>
    </div>
  );
};

Skeleton.defaultProps = {
  loading: true,
  animate: true,
  round: true,
  row: 3,
  avatarShape: 'round',
  rowWidth: DEFAULT_ROW_WIDTH,
};

export default Skeleton;
