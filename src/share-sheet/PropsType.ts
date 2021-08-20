import { PopupProps } from '../popup/PropsType';
import { BaseTypeProps } from '../utils';

export type ShareSheetOption = {
  name: string;
  icon: string;
  className?: string;
  description?: string;
};

export type ShareSheetOptions = ShareSheetOption[] | ShareSheetOption[][];

export interface ShareSheetProps extends BaseTypeProps, PopupProps {
  /** 顶部标题	 */
  title?: JSX.Element;
  /** 取消按钮文字，传入空字符串可以隐藏按钮 */
  cancelText?: string;
  /** 标题下方的辅助描述文字	 */
  description?: JSX.Element;
  /** 是否在页面回退时自动关闭	 */
  closeOnPopstate?: boolean;
  /** 是否开启底部安全区适配	 */
  safeAreaInsetBottom?: boolean;
  /** 分享选项 */
  options?: ShareSheetOptions[];
  /** 点击取消按钮时触发	 */
  onCancel?: () => void;
  /** 点击分享选项时触发	 */
  onSelect?: (option: ShareSheetOption, index: number) => void;
}
