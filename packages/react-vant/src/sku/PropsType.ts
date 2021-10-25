import { StepperProps } from '../stepper';
import { BaseTypeProps } from '../utils';

export type SkuValueType = Record<string | number, (string | number)[]>;

export type SkuFieldNames = {
  text?: string;
  value?: string;
  children?: string;
};
export interface SkuProps extends BaseTypeProps {
  fieldNames?: SkuFieldNames;
  stepperProps?: Omit<StepperProps, 'value' | 'onChange'>;
  onAddCart?: (value: SkuValueType) => void;
  onBuyClicked?: (value: SkuValueType) => void;
  onStepperChange?: (value: number) => void;
  onSkuSelected?: () => void;
  onSkuPropSelected?: () => void;
  onOpenPreview?: () => void;
  onClosePreview?: () => void;
}
