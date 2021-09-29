import React from 'react';
import { BaseTypeProps } from '../utils';

export interface FormProps extends BaseTypeProps {
  label?: React.ReactNode;
  footer?: React.ReactNode;
}
