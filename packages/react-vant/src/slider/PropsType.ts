import React from 'react';
import { BaseTypeProps } from '../utils';

export type SliderValue = number | [number, number];
export interface SliderBaseProps<T> extends BaseTypeProps {
  /** 当前进度百分比，在双滑块模式下为数组格式 */
  value?: T;
  /** 是否开启双滑块模式	 */
  range?: boolean;
  /** 是否禁用滑块	 */
  disabled?: boolean;
  /** 是否将进度条反转	 */
  reverse?: boolean;
  /** 是否为只读状态，只读状态下无法修改滑块的值	 */
  readonly?: boolean;
  /** 是否垂直展示	 */
  vertical?: boolean;
  /** 进度条高度，默认单位为 `px` */
  barHeight?: number | string;
  /** 滑块按钮大小，默认单位为 `px`	 */
  buttonSize?: number | string;
  /** 进度条激活态颜色	 */
  activeColor?: string;
  /** 进度条非激活态颜色	 */
  inactiveColor?: string;
  /**
   * 最小值
   * @default 0
   */
  min?: number;
  /**
   * 最大值
   * @default 100
   */
  max?: number;
  /**
   * 步长
   * @default 1
   */
  step?: number;
  /** 自定义滑块按钮	 */
  button?: React.ReactNode | (({ value }: { value: SliderValue }) => React.ReactNode);
  /** 自定义左侧滑块按钮（双滑块模式下） */
  leftButton?: React.ReactNode;
  /** 自定义右侧滑块按钮 （双滑块模式下）	*/
  rightButton?: React.ReactNode;
  /** 进度变化时实时触发 */
  onChange?: (value: T) => void;
  /** 进度变化且结束拖动后触发 */
  onChangeAfter?: (value: T) => void;
  /** 开始拖动时触发 */
  onDragStart?: (event: React.TouchEvent, value: T) => void;
  /** 结束拖动时触发 */
  onDragEnd?: (event: React.TouchEvent, value: T) => void;
}

export type SliderSingleProps = SliderBaseProps<number>;
export type SliderRangeProps = SliderBaseProps<[number, number]>;

export type SliderProps = SliderSingleProps | SliderRangeProps;
