import { PickerProps } from '../picker';
import { PickerPopupActions } from '../picker/PropsType';
import { BaseTypeProps } from '../utils';

export type AreaList = {
  city_list?: Record<string, string>;
  county_list?: Record<string, string>;
  province_list?: Record<string, string>;
};

export type AreaColumnOption = {
  name: string;
  code: string;
};

export type AreaColumnType = 'province' | 'county' | 'city';

export interface AreaProps
  extends Pick<
  PickerProps,
  | 'title'
  | 'loading'
  | 'readOnly'
  | 'itemHeight'
  | 'swipeDuration'
  | 'visibleItemCount'
  | 'cancelButtonText'
  | 'confirmButtonText'
  | 'toolbar'
  | 'columns'
  | 'columnsTop'
  | 'columnsBottom'
  | 'optionRender'
  | 'placeholder'
  >,
  BaseTypeProps {
  /** 当前选中项对应的地区码	 */
  value?: string[];
  /** 默认选中项 */
  defaultValue?: string[];
  /** 省市区数据 */
  areaList: AreaList;
  /** 显示列数，3-省市区，2-省市，1-省	 */
  columnsNum?: number;
  /** 根据地区码校验海外地址，海外地址会划分至单独的分类	 */
  isOverseaCode?: (code: string) => boolean;
  /** 选项改变时触发	 */
  onChange?: (value: string[], column: AreaColumnOption[], indexes: number[]) => void;
  /** 点击完成按钮时触发	 */
  onConfirm?: (value: string[], result: AreaColumnOption[], indexes: number[]) => void;
  /** 点击取消按钮时触发	 */
  onCancel?: (...args: unknown[]) => void;
}

export type AreaInstance = PickerPopupActions
