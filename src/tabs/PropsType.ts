import { CSSProperties } from 'react';
import { BaseTypeProps } from '../utils';

export interface TabsProps extends BaseTypeProps {
  color?: string;
  border?: boolean;
  sticky?: boolean;
  animated?: boolean;
  swipeable?: boolean;
  scrollspy?: boolean;
  background?: string;
  lineWidth?: number | string;
  lineHeight?: number | string;
  beforeChange?: Function;
  titleActiveColor?: string;
  titleInactiveColor?: string;
  type?: string;
  active?: number | string;
  ellipsis?: boolean;
  duration?: number | string;
  offsetTop?: number | string;
  lazyRender?: boolean;
  swipeThreshold?: number | string;
  onClick?: (name: string | number, title: string) => void;
}

export interface TabsTitleProps extends BaseTypeProps {
  key?: number;
  dot: boolean;
  type: string;
  color: string;
  title: string;
  badge: number | string;
  isActive: boolean;
  disabled: boolean;
  scrollable: boolean;
  activeColor: string;
  renderTitle: Function;
  inactiveColor: string;
  onClick: () => void;
}

export interface TabsContentProps {
  inited?: boolean;
  animated?: boolean;
  swipeable?: boolean;
  lazyRender?: boolean;
  count: number;
  duration: number | string;
  currentIndex: number;
}

export interface TabPaneProps {
  key?: number;
  dot?: boolean;
  index?: number;
  name?: number | string;
  badge?: number | string;
  title?: string;
  titleStyle?: CSSProperties;
  titleClass?: string;
  disabled?: boolean;
  renderTitle?: Function;
  children?: React.ReactNode;
}
