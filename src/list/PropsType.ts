import { BaseTypeProps } from '../utils';

export type Direction = 'up' | 'down';

export interface ListRefreshProps extends BaseTypeProps {
  error?: boolean;
  loading: boolean;
  finished?: boolean;
  errorText?: string;
  loadingText?: string;
  finishedText?: string;
  offset?: number | string;
  direction?: Direction;
  immediateCheck?: boolean;
  onLoad?: () => void;
}
