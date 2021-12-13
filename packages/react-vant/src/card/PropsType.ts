import React from 'react';
import { BaseTypeProps } from '../utils';

export interface CardProps extends BaseTypeProps {
  shadow?: boolean | 1 | 2 | 3;
  round?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

export interface CardHeaderProps extends BaseTypeProps {
  /** 头部额外内容 */
  extra?: React.ReactNode;
  children?: React.ReactNode;
  border?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export interface CardBodyProps extends BaseTypeProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

export interface CardFooterProps extends BaseTypeProps {
  children?: React.ReactNode;
  border?: boolean;
  flex?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export interface CardCoverProps extends BaseTypeProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}
