import { BaseTypeProps } from '../utils';

export interface IndexBarProps extends BaseTypeProps {
  zIndex?: number | string;
  highlightColor?: string;
  sticky?: boolean;
  stickyOffsetTop?: number;
  indexList?: Array<number | string>;
  onChange?: (value: number | string) => void;
  onSelect?: (value: number | string) => void;
}

export interface IndexAnchorProps extends BaseTypeProps {
  index: number | string;
}
