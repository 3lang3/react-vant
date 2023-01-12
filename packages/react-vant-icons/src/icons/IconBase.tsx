import React from 'react'

function kebabCase(str: string): string {
  return str
    .substring(3)
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
}

export interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
  /** 是否开启旋转动画	 */
  spin?: boolean
  /** 图标旋转角度 */
  rotate?: number
  /** 自定义图标名 */
  name?: string
  style?: React.CSSProperties
  className?: string
}

const IconBase = React.forwardRef<SVGSVGElement, IconBaseProps>(
  (props, ref) => {
    const {
      name = '',
      className,
      style,
      spin,
      rotate,
      tabIndex,
      onClick,
      children,
      ...restProps
    } = props
    const svgStyle = {} as any
    if (rotate) {
      svgStyle.msTransform = `rotate(${rotate}deg)`
      svgStyle.transform = `rotate(${rotate}deg)`
    }

    const kebabCaseName = name ? kebabCase(name) : undefined

    let iconTabIndex = tabIndex
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1
    }

    const attrs = {
      role: 'img',
      'aria-label': kebabCaseName,
      focusable: 'false',
      'data-icon': kebabCaseName,
      'aria-hidden': 'true',
      preserveAspectRatio: 'xMidYMid meet',
      ref,
      tabIndex: iconTabIndex,
      onClick,
      className: [
        'rv-icon',
        kebabCaseName ? `rv-icon-${kebabCaseName}` : '',
        spin ? 'rv-icon--spin' : '',
        className,
      ]
        .join(' ')
        .trim(),
      style: { ...style, ...svgStyle },
      ...restProps,
    }

    return React.cloneElement(children as React.ReactElement, attrs)
  }
)

export default IconBase
