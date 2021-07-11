import { BaseTypeProps } from '../utils';

export type TagSize = 'mini' | 'medium' | 'large';
export interface TagProps extends BaseTypeProps {
  size: TagSize;
  mark: boolean;
  selected: boolean;
  color: string;
  plain: boolean;
  round: boolean;
  textColor: string;
  closeable: boolean;
  type: string;
  show: boolean;
  hairline: boolean;
  onClose: () => void;
  onChange: (selected: boolean) => void;
}
