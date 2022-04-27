import { CSSProperties } from 'react';

export interface BaseTypeProps {
  style?: CSSProperties | any;
  className?: string;
}

/** 指定挂载的节点 */
export type TeleportType = HTMLElement | (() => HTMLElement) | null;

export type WithDisplayNameReactElement = React.ReactElement & { type: { displayName: string } };
