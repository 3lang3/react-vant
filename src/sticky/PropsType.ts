import { BaseTypeProps } from '../utils';

export type ScrollEventParams = {
  scrollTop: number;
  isFixed: boolean;
};

export interface StickyProps extends BaseTypeProps {
  zIndex?: number | string;
  container?: React.MutableRefObject<HTMLDivElement>;
  offsetTop?: number | string;
  /** 滚动时触发	 */
  onScroll?: (e: ScrollEventParams) => void;
  /** 当吸顶状态改变时触发	 */
  onChange?: (isFixed: boolean) => void;
}
