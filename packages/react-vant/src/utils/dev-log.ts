/* eslint-disable no-console */
import { isDev } from './is-dev';

export function devWarning(component: string, message: string): void {
  if (isDev) {
    console.warn(`[react-vant: ${component}] ${message}`);
  }
}
