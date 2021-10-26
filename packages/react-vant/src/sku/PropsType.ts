import { StepperProps } from '../stepper';
import { BaseTypeProps } from '../utils';

export type SkuValueType = Record<string | number, (string | number)[]>;

export type SkuFieldNames = {
  text?: string;
  value?: string;
  children?: string;
};
export interface SkuProps extends BaseTypeProps {
  sku: any;
  properties?: any;
  fieldNames?: SkuFieldNames;
  stepperProps?: Omit<StepperProps, 'value' | 'onChange'>;
  stepperQuota?: React.ReactNode;
  priceTag?: React.ReactNode;
  originPrice?: number | string;
  bodyOffsetTop?: number;
  hideStock?: boolean;
  hideSelectedText?: boolean;
  onAddCart?: (value: SkuValueType) => void;
  onBuyClicked?: (value: SkuValueType) => void;
  onStepperChange?: (value: number) => void;
  onSkuSelected?: () => void;
  onSkuPropSelected?: () => void;
  onOpenPreview?: () => void;
  onClosePreview?: () => void;
}
