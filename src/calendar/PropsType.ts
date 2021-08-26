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
  getTitle: () => any;
  getHeight: () => number;
  setVisible: (value?: boolean | undefined) => void;
  scrollIntoView: (body: Element) => void;
};

export interface CalendarHeaderProps extends BaseTypeProps {
  title?: string;
  subtitle?: string;
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
}

export interface CalendarMonthProps extends BaseTypeProps {
  type?: CalendarType;
  color?: string;
  showMark?: boolean;
  rowHeight?: number | string;
  formatter?: (item: CalendarDayItem) => CalendarDayItem;
  currentDate?: Date | Date[];
  allowSameDay?: boolean;
  showSubtitle?: boolean;
  showMonthTitle?: boolean;
  firstDayOfWeek?: number;
  date: Date;
  minDate: Date;
  maxDate: Date;
  onClick?: (item: CalendarDayItem) => void;
}

export interface CalendarProps extends BaseTypeProps {
  show?: boolean;
  title?: string;
  color?: string;
  round?: boolean;
  readonly?: boolean;
  poppable?: boolean;
  showMark?: boolean;
  showTitle?: boolean;
  formatter?: (item: CalendarDayItem) => CalendarDayItem;
  rowHeight?: number | string;
  confirmText?: string;
  rangePrompt?: string;
  showConfirm?: boolean;
  defaultDate?: any;
  allowSameDay?: boolean;
  showSubtitle?: boolean;
  closeOnPopstate?: boolean;
  confirmDisabledText?: string;
  overlayClosable?: boolean;
  safeAreaInsetBottom?: boolean;
  type?: CalendarType;
  position?: PopupPosition;
  maxRange?: number | string;
  minDate: Date;
  maxDate: Date;
  firstDayOfWeek?: number | string;
  showRangePrompt?: boolean;
  footer?: React.ReactNode;
  onSelect?: (value: CalendarValue) => void;
  onConfirm?: (value: CalendarValue) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onUnselect?: (value: Date) => void;
  onMonthShow?: (value: { date: Date; title: string }) => void;
  onOverRange?: () => void;
  onClickSubtitle?: (e: React.MouseEvent) => void;
}
