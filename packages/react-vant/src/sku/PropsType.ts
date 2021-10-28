import { StepperProps } from '../stepper';
import { BaseTypeProps } from '../utils';

export type SkuData = {
  price: string;
  none_sku: boolean;
  stock_num: number;
  hide_stock: boolean;
  collection_id: number;
  tree: SkuTreeItemData[];
  list: SkuListItemData[];
  messages: SkuMessageData[];
  properties: SkuPropItemData[];
};

export type SkuTreeItemData = {
  k: string;
  v: SkuTreeItemValueData[];
  k_s: string;
  is_multiple: never;
};

export type SkuTreeItemValueData = {
  id: string;
  name: string;
  imgUrl?: string;
  img_url?: string;
  previewImgUrl?: string;
};

export type SkuPropItemData = {
  k: string;
  v: SkuPropItemValueData[];
  k_id: number;
  is_multiple?: boolean;
  is_necessary?: boolean;
};

export type SkuPropItemValueData = {
  id: string;
  name: string;
  price?: number;
};

export type SkuListItemData = {
  id: number;
  s1: string;
  s2: string;
  s3: string;
  price: number;
  stock_num: number;
};

export type SkuMessageData = {
  name: string;
  type: string;
  required?: string;
  datetime?: string;
  multiple?: string;
  placeholder?: string;
};

export type SkuGoodsData = {
  title: string;
  picture: string;
};

export type SelectedSkuData = Record<string, string>;

export type SkuValueType = Record<string | number, (string | number)[]>;

export type SkuFieldNames = {
  text?: string;
  value?: string;
  children?: string;
};

export type SkuActionType = 'add-cart' | 'buy-clicked';
export interface SkuProps extends BaseTypeProps {
  sku: any;
  properties?: any;
  goods?: any;
  goodsId?: number | string;
  quota?: number;
  quotaUsed?: number;
  startSaleNum?: number;
  stock?: number;
  disableSoldoutSku?: boolean;
  showHeaderImage?: boolean;
  hideQuotaText?: boolean;
  lazyload?: boolean;
  fieldNames?: SkuFieldNames;
  stepperProps?: Omit<StepperProps, 'value' | 'onChange'>;
  stepperQuota?: React.ReactNode;
  stepperTitle?: React.ReactNode;
  customStepperConfig?: any;
  priceTag?: React.ReactNode;
  originPrice?: number | string;
  bodyOffsetTop?: number;
  hideStock?: boolean;
  hideSelectedText?: boolean;
  customSkuValidator?: (
    actionType: SkuActionType,
    selectedSku: any,
  ) => void | boolean | Promise<boolean>;
  stockRender?: (stock: number) => React.ReactNode;
  onAddCart?: (value: SkuValueType) => void;
  onBuyClicked?: (value: SkuValueType) => void;
  onStepperChange?: (value: number) => void;
  onSkuSelected?: (value: any) => void;
  onSkuPropSelected?: (value: any) => void;
  onOpenPreview?: () => void;
  onClosePreview?: () => void;
  onOverLimit?: (value: any) => void;
}
