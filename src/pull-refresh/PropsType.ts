import { BaseTypeProps } from '../utils';

export type LoadingType = 'circular' | 'spinner';
export type PullRefreshStatus = 'normal' | 'loading' | 'loosing' | 'pulling' | 'success';

export interface PullRefreshProps extends BaseTypeProps {
  refreshing: boolean;
  onRefresh: () => void;
  disabled?: boolean;
  successSlot?: () => React.ReactElement;
  pullingSlot?: () => React.ReactElement;
  loosingSlot?: () => React.ReactElement;
  loadingSlot?: () => React.ReactElement;
  successText?: string;
  pullingText?: string;
  loosingText?: string;
  loadingText?: string;
  successDuration?: number | string;
  animationDuration?: number | string;
  headHeight?: number | string;
  onScrollStart?: () => void;
  onScrollEnd?: () => void;
}
