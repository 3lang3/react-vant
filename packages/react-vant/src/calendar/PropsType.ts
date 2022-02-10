import React from 'react';
import { PopupPosition } from '../popup/PropsType';
import { BaseTypeProps } from '../utils';

export type CalendarValue = Date | Date[];

export type CalendarType = 'single' | 'range' | 'multiple';

export type CalendarDayType =
  | ''
  | 'start'
  | 'start-end'
  | 'middle'
  | 'end'
  | 'selected'
  | 'multiple-middle'
  | 'multiple-selected'
  | 'disabled'
  | 'placeholder';

export type CalendarDayItem = {
  date?: Date;
  text?: string | number;
  type?: CalendarDayType;
  topInfo?: string;
  className?: unknown;
  bottomInfo?: string;
};

export type CalendarExpose = {
  reset: (date?: Date | Date[]) => void;
  scrollToDate: (targetDate: Date) => void;
};

export type CalendarInstance = CalendarExpose;

export type CalendarMonthInstance = {
  showed?: boolean;
  getTitle: () => string | React.ReactNode;
  getHeight: () => number;
  setVisible: (value?: boolean | undefined) => void;
  scrollIntoView: (body: Element) => void;
};

export interface CalendarHeaderProps extends BaseTypeProps {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  weekdays?: React.ReactNode[];
  showTitle?: boolean;
  showSubtitle?: boolean;
  firstDayOfWeek?: number;
  onClickSubtitle?: (e: React.MouseEvent) => void;
}

export interface CalendarDayProps extends BaseTypeProps {
  color?: string;
  index?: number;
  rowHeight?: string;
  offset?: number;
  item: CalendarDayItem;
  onClick?: (item: CalendarDayItem) => void;
  topInfoRender?: (day: CalendarDayItem) => React.ReactNode;
  bottomInfoRender?: (day: CalendarDayItem) => React.ReactNode;
}

export interface CalendarMonthProps extends BaseTypeProps {
  type?: CalendarType;
  color?: string;
  showMark?: boolean;
  rowHeight?: number | string;
  formatter?: (item: CalendarDayItem) => CalendarDayItem;
  formatMonthTitle?: (date: Date) => React.ReactNode;
  currentDate?: Date | Date[];
  allowSameDay?: boolean;
  showSubtitle?: boolean;
  showMonthTitle?: boolean;
  firstDayOfWeek?: number;
  date: Date;
  minDate?: Date;
  maxDate?: Date;
  lazyRender?: boolean;
  topInfoRender?: (day: CalendarDayItem) => React.ReactNode;
  bottomInfoRender?: (day: CalendarDayItem) => React.ReactNode;
  onClick?: (item: CalendarDayItem) => void;
}

export interface CalendarProps extends BaseTypeProps {
  visible?: boolean;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  /** 自定义星期文案 */
  weekdays?: React.ReactNode[];
  color?: string;
  round?: boolean;
  readonly?: boolean;
  poppable?: boolean;
  showMark?: boolean;
  showTitle?: boolean;
  formatter?: (item: CalendarDayItem) => CalendarDayItem;
  /** 自定义月标题 */
  formatMonthTitle?: (date: Date) => React.ReactNode;
  rowHeight?: number | string;
  confirmText?: string;
  rangePrompt?: string;
  showConfirm?: boolean;
  lazyRender?: boolean;
  /**
   * @todo
   * Date | Date[] | null
   */
  defaultDate?: any;
  allowSameDay?: boolean;
  showSubtitle?: boolean;
  closeOnPopstate?: boolean;
  confirmDisabledText?: string;
  closeOnClickOverlay?: boolean;
  safeAreaInsetBottom?: boolean;
  type?: CalendarType;
  position?: PopupPosition;
  maxRange?: number | string;
  minDate?: Date;
  maxDate?: Date;
  firstDayOfWeek?: number | string;
  showRangePrompt?: boolean;
  footer?: React.ReactNode;
  topInfoRender?: (day: CalendarDayItem) => React.ReactNode;
  bottomInfoRender?: (day: CalendarDayItem) => React.ReactNode;
  onSelect?: (value: CalendarValue) => void;
  onConfirm?: (value: CalendarValue) => void;
  onClose?: () => void;
  onClosed?: () => void;
  onUnselect?: (value: Date) => void;
  onMonthShow?: (value: { date: Date; title: string }) => void;
  onOverRange?: () => void;
  onClickSubtitle?: (e: React.MouseEvent) => void;
}
