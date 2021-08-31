import React, { CSSProperties } from 'react';
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
  navLeft?: React.ReactNode;
  navRight?: React.ReactNode;
  navBottom?: React.ReactNode;
  onClick?: (name: string | number, title: string) => void;
  onClickTab?: (tab: {
    name: string | number;
    title: string;
    event: React.MouseEvent;
    disabled: boolean;
  }) => void;
  onChange?: (name: string | number, title: string) => void;
  onScroll?: (params: { scrollTop: number; isFixed: boolean }) => void;
  children?: React.ReactNode;
}

export interface TabsTitleProps extends BaseTypeProps {
  key?: number;
  dot: boolean;
  type: string;
  color: string;
  title: React.ReactNode;
  badge: number | string;
  isActive: boolean;
  disabled: boolean;
  scrollable: boolean;
  activeColor: string;
  renderTitle: Function;
  showZeroBadge?: boolean;
  inactiveColor: string;
  onClick: (event) => void;
}

export interface TabsContentProps {
  inited?: boolean;
  animated?: boolean;
  swipeable?: boolean;
  lazyRender?: boolean;
  count: number;
  duration: number | string;
  currentIndex: number;
  onChange?: (index) => void;
}

export interface TabPaneProps {
  key?: number;
  dot?: boolean;
  index?: number;
  name?: number | string;
  badge?: number | string;
  showZeroBadge?: boolean;
  title?: string;
  titleStyle?: CSSProperties;
  titleClass?: string;
  disabled?: boolean;
  renderTitle?: Function;
  children?: React.ReactNode;
}

export type TabsClickTabEventParams = {
  name: string | number;
  title: string;
  event: MouseEvent;
  disabled: boolean;
};

export type TabsInstance = {
  resize: () => void;
  scrollTo: (name: number | string) => void;
};
