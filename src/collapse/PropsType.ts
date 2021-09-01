import { BaseTypeProps } from '../utils';

import { CellProps } from '../cell/PropsType';

export interface CollapseProps extends BaseTypeProps {
  accordion: boolean;
  initExpanded: string | number | Array<number | string>;
  border: boolean;
  value?: number | string | Array<number | string>;
  onChange: (name: number | string | Array<number | string>) => void;
}

export interface CollapseItemProps extends CellProps {
  name?: number | string;
  disabled?: boolean;
  isLink?: boolean;
  index?: number;
  readonly?: boolean;
}
