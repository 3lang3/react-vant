import { BaseTypeProps } from '../utils';

export type CurrentTime = {
  /** 剩余总时间（单位毫秒）	 */
  total: number;
  /** 剩余天数	 */
  days: number;
  /** 剩余小时	 */
  hours: number;
  /** 剩余分钟	 */
  minutes: number;
  /** 剩余秒数	 */
  seconds: number;
  /** 剩余毫秒	 */
  milliseconds: number;
};

export type UseCountDownOptions = {
  time: number;
  millisecond?: boolean;
  onChange?: (current: CurrentTime) => void;
  onFinish?: () => void;
};

export type CountDownInstance = {
  /** 开始倒计时	 */
  start: () => void;
  /** 暂停倒计时	 */
  pause: () => void;
  /** 重设倒计时，若 autoStart 为 true，重设后会自动开始倒计时	 */
  reset: () => void;
};

export interface CountDownProps extends BaseTypeProps {
  /**
   * 是否自动开始倒计时
   * @default true
   */
  autoStart?: boolean;
  /**
   * 是否开启毫秒级渲染
   */
  millisecond?: boolean;
  /**
   * 倒计时时长，单位毫秒
   * @default 0
   */
  time?: number | string;
  /**
   * 时间格式
   * @default 'HH:mm:ss'
   */
  format?: string;
  /** 倒计时变化时触发	 */
  onChange?: (currentTime: CurrentTime) => void;
  /** 倒计时结束时触发	*/
  onFinish?: () => void;
  children?: (currentTime: CurrentTime) => React.ReactNode;
}
