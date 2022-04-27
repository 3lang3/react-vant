import React from 'react';
import { TabsProps } from '../tabs/PropsType';
import { BaseTypeProps } from '../utils';

export type CouponInfo = {
  id: string | number;
  name: string;
  endAt: number;
  value: number;
  startAt: number;
  reason?: string;
  discount?: number;
  unitDesc?: string;
  condition?: string;
  valueDesc?: string;
  description: string;
  denominations?: number;
  originCondition?: number;
};

export interface CouponProps extends BaseTypeProps {
  chosen?: boolean;
  disabled?: boolean;
  coupon: CouponInfo;
  currency?: string;
  onClick?: (event?: React.MouseEvent) => void;
}

export interface CouponCellProps extends BaseTypeProps {
  title?: React.ReactNode;
  border?: boolean;
  editable?: boolean;
  chosenCoupon?: number | string;
  coupons?: CouponInfo[];
  currency?: string;
  onClick?: (event?: React.MouseEvent) => void;
}

export interface CouponListProps extends BaseTypeProps {
  showCount?: boolean;
  enabledTitle?: React.ReactNode;
  disabledTitle?: React.ReactNode;
  showExchangeBar?: boolean;
  showCloseButton?: boolean;
  closeButtonText?: string;
  inputPlaceholder?: string;
  exchangeButtonText?: string;
  exchangeButtonLoading?: boolean;
  exchangeButtonDisabled?: boolean;
  code?: string;
  exchangeMinLength?: number;
  chosenCoupon?: number;
  coupons?: CouponInfo[];
  disabledCoupons?: CouponInfo[];
  displayedCouponIndex?: number;
  currency?: string;
  emptyImage?: string;
  listFooter?: React.ReactNode;
  disabledListFooter?: React.ReactNode;
  tabsProps?: Omit<TabsProps, 'children'>;
  onExchange?: (code: string) => void;
  onChange?: (index: number) => void;
}
