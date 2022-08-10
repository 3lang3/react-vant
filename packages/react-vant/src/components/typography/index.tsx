import './style/index.less'
import React from 'react'
import {
  TypographyTextProps,
  TypographyTitleProps,
  TypographyLinkProps,
} from './PropsType'
import Typography from './Typography'

const Text = (props: TypographyTextProps) => (
  <Typography renderType='text' tag='span' {...props} />
)
const Title = (props: TypographyTitleProps) => (
  <Typography renderType='title' tag='h1' {...props} />
)
const Link = (props: TypographyLinkProps) => (
  <Typography renderType='link' tag='a' {...props} />
)

const TypographyNamespace = Object.assign(Typography, { Text, Title, Link })

export { TypographyNamespace as Typography }
export type {
  TypographyBaseProps as TypographyProps,
  TypographySize,
  TypographyType,
  TypographyTitleLevel,
} from './PropsType'
