export interface FlexPropsType {
  gutter?: number | [number, number];
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  disabled?: boolean;
}

export type FlexType = number | 'none' | 'auto' | string;

export interface FlexItemPropsType {
  span?: number | string;
  flex?: FlexType;
  disabled?: boolean;
}
