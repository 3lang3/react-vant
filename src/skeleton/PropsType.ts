import { BaseTypeProps } from '../utils';

export interface SkeletonProps extends BaseTypeProps {
  title?: boolean;
  round?: boolean;
  avatar?: boolean;
  loading?: boolean;
  animate?: boolean;
  avatarSize?: string | number;
  titleWidth?: string | number;
  row?: number;
  avatarShape?: 'square' | 'round';
  rowWidth?: number | string | (number | string)[];
  rowHeight?: number | string | (number | string)[];
  children?: JSX.Element;
}
