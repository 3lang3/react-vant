import { BaseTypeProps } from '../utils';

import { CellProps } from '../cell/PropsType';

export interface CollapseGroupProps extends BaseTypeProps {
  accordion: boolean;
  initExpanded: string | number | [];
  border: boolean;
  onChange: (name: number | string) => void;
}

export interface CollapseProps extends CellProps {
  name?: number | string;
  disabled?: boolean;
  isLink?: boolean;
  index?: number;
}
