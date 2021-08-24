import React from 'react';
import { BaseTypeProps } from '../utils';

export type PopoverTheme = 'light' | 'dark';
export type PopoverTrigger = 'manual' | 'click';
export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';

export type PopoverAction = {
  text: string;
  icon?: string;
  color?: string;
  disabled?: boolean;
  className?: string;
};

export interface PopoverProps extends BaseTypeProps {
  overlay?: boolean;
  duration?: number;
  iconPrefix?: string;
  overlayClass?: string;
  overlayStyle?: React.CSSProperties;
  closeOnClickAction?: boolean;
  closeOnClickOverlay?: boolean;
  closeOnClickOutside?: boolean;
  offset?: [number, number];
  theme?: PopoverTheme;
  trigger?: PopoverTrigger;
  actions?: PopoverAction[];
  placement?: PopoverPlacement;
  reference?: string | React.ReactNode;
  onSelect?: (action: PopoverAction, index: number) => void;
}

export type PopoverInstance = {
  show: () => void;
  hide: () => void;
};
