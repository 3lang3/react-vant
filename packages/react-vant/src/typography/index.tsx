import React from 'react';
import { TypographyTextProps, TypographyTitleProps, TypographyLinkProps } from './PropsType';
import Typography from './Typography';

const Text = (props: TypographyTextProps) => <Typography renderType="text" {...props} />;
const Title = (props: TypographyTitleProps) => <Typography renderType="title" {...props} />;
const Link = (props: TypographyLinkProps) => <Typography renderType="link" {...props} />;

const TypographyNamespace = Object.assign(Typography, { Text, Title, Link });

export default TypographyNamespace;
export { TypographyNamespace as Typography };
export type {
  TypographyBaseProps as TypographyProps,
  TypographySize,
  TypographyType,
  TypographyTitleLevel,
} from './PropsType';
