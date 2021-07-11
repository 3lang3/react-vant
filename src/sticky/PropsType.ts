import { BaseTypeProps } from '../utils';

export type ScrollEventParams = {
  scrollTop: number;
  isFixed: boolean;
};

export interface StickyProps extends BaseTypeProps {
  zIndex?: number | string;
  container?: React.MutableRefObject<HTMLDivElement>;
  offsetTop?: number | string;
  onScroll?: (e: ScrollEventParams) => void;
}
