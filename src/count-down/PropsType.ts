import { BaseTypeProps } from '../utils';

export type CurrentTime = {
  days: number;
  hours: number;
  total: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

export type UseCountDownOptions = {
  time: number;
  millisecond?: boolean;
  onChange?: (current: CurrentTime) => void;
  onFinish?: () => void;
};

export type CountDownActionType = {
  start: () => void;
  pause: () => void;
  reset: () => void;
};

export interface CountDownProps extends BaseTypeProps {
  autoStart?: boolean;
  millisecond?: boolean;
  time?: number | string;
  format?: string;
  onChange?: (currentTime: CurrentTime) => void;
  onFinish?: () => void;
  children?: (currentTime: CurrentTime) => React.ReactNode;
}
