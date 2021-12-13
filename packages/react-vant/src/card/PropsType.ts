import React from 'react';
import { BaseTypeProps } from '../utils';

export interface CardProps extends BaseTypeProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

export interface CardHeaderProps extends BaseTypeProps {
  /** 头部额外内容 */
  extra?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

export interface CardFooterProps extends BaseTypeProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}
