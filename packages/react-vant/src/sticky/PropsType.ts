export type ScrollEventParams = {
  scrollTop: number;
  isFixed: boolean;
};

export type StickyPosition = 'top' | 'bottom';

export interface StickyProps {
  /** 吸顶时的 z-index	 */
  zIndex?: number | string;
  /**
   * 吸附位置，可选值为 bottom
   * @default 'top'
   */
  position?: StickyPosition;
  container?: React.MutableRefObject<HTMLElement>;
  /** 吸顶时与顶部的距离，支持 px vw vh rem 单位，默认 px	 */
  offsetTop?: number | string;
  /** 吸底时与底部的距离，支持 px vw vh rem 单位，默认 px	 */
  offsetBottom?: number | string;
  /** 滚动时触发	 */
  onScroll?: (e: ScrollEventParams) => void;
  /** 当吸顶状态改变时触发	 */
  onChange?: (isFixed: boolean) => void;
}
