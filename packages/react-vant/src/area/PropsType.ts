import { PickerProps } from '../picker';
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
      | 'readonly'
      | 'itemHeight'
      | 'swipeDuration'
      | 'visibleItemCount'
      | 'cancelButtonText'
      | 'confirmButtonText'
      | 'toolbar'
      | 'columnsTop'
      | 'columnsBottom'
      | 'optionRender'
    >,
    BaseTypeProps {
  // 这里写组件的props
  areaList: AreaList;
  columnsNum?: number;
  isOverseaCode?: (code: string) => boolean;
  columnsPlaceholder?: string[];
  value?: string;
  onChange?: (column: AreaColumnOption[], index: number) => void;
  onConfirm?: (result: AreaColumnOption[], index: number) => void;
  onCancel?: (...args: unknown[]) => void;
}

export type AreaInstance = {
  reset: (newCode?: string) => void;
  getArea: () => {
    code: string;
    country: string;
    province: string;
    city: string;
    county: string;
  };
  getValues: () => AreaColumnOption[];
};
