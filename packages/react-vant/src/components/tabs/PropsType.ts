import React from 'react'
import { BadgeProps } from '../badge'
import { SwiperInstance, SwiperProps } from '../swiper/PropsType'
import { BaseTypeProps } from '../utils'

type ScrollspyConfig = {
  /** 滚动导航模式下，容器滚动触底时是否将最后一个tab转为Active状态 */
  autoFocusLast?: boolean
  /** 触底偏移量 */
  reachBottomThreshold?: number
  /** 点击标签，立即展示对应内容区域，取消滚动动画 */
  scrollImmediate?: boolean
}

type TabPaneTitle = React.ReactNode | ((active: boolean) => React.ReactNode)

export interface TabsProps extends BaseTypeProps {
  /** 样式风格类型 */
  type?: 'line' | 'card' | 'capsule' | 'jumbo'
  /**
   * 标签栏对齐方式
   * @default 'center'
   */
  align?: 'start' | 'center' | string
  /** 标签主题色	 */
  color?: string
  /** 是否显示标签栏外边框，仅在 type="line" 时有效	 */
  border?: boolean
  /** 是否使用粘性定位布局	 */
  sticky?: boolean
  /**
   * sticky模式下点击标签重置滚动条位置
   * @default true
   */
  stickyInitScrollbar?: boolean
  /** 是否开启切换标签内容时的转场动画	 */
  animated?: boolean
  /** 是否开启手势左右滑动切换	 */
  swipeable?: boolean | Pick<SwiperProps, 'autoHeight' | 'preventScroll'>
  /** 是否开启滚动导航	 */
  scrollspy?: boolean | ScrollspyConfig
  /** 标签栏背景色	 */
  background?: string
  /** 底部条宽度，默认单位 px	 */
  lineWidth?: number | string
  /** 底部条高度，默认单位 px	 */
  lineHeight?: number | string
  /** 切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise	 */
  beforeChange?: (name: number | string) => boolean | Promise<boolean>
  /** 标题选中态颜色	 */
  titleActiveColor?: string
  /** 标题默认态颜色	 */
  titleInactiveColor?: string
  /** 当前选中项的标识符 */
  active?: number | string
  /** 默认选项 */
  defaultActive?: number | string
  /** 是否省略过长的标题文字	 */
  ellipsis?: boolean
  /** 动画时间，单位毫秒，设置为 0 可以禁用动画	 */
  duration?: number | string
  /** 粘性定位布局下与顶部的最小距离，支持 px vw vh rem 单位，默认 px	 */
  offsetTop?: number | string
  /** 是否开启延迟渲染（首次切换到标签时才触发内容渲染）	 */
  lazyRender?: boolean
  /** 延迟渲染占位符 */
  lazyRenderPlaceholder?: React.ReactNode
  /**
   * 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动
   * @default 5
   */
  swipeThreshold?: number | string
  /** 标签栏左侧内容 */
  navLeft?: React.ReactNode
  /** 标签栏右侧内容 */
  navRight?: React.ReactNode
  /** 标签栏下方内容 */
  navBottom?: React.ReactNode
  /** @deprecated */
  onClick?: (name: string | number, title: any) => void
  /** 点击标签时触发	 */
  onClickTab?: (tab: any) => void
  /** 当前激活的标签改变时触发	 */
  onChange?: (name: string | number, tabIndex: number) => void
  /** 滚动时触发，仅在 sticky 模式下生效	 */
  onScroll?: (params: { scrollTop: number; isFixed: boolean }) => void
  children?: React.ReactNode
}

export interface TabsTitleProps extends BaseTypeProps {
  key?: React.Key
  type: string
  color: string
  title: TabPaneTitle
  description?: TabPaneTitle
  /** 图标右上角徽标的内容	 */
  badge?:
    | number
    | string
    | Omit<BadgeProps, 'children' | 'onClick' | 'onTouchStart'>
  isActive: boolean
  disabled: boolean
  scrollable: boolean
  activeColor: string
  inactiveColor: string
  onClick: (event) => void
}

export interface TabsContentProps {
  inited?: boolean
  animated?: boolean
  swipeable?: TabsProps['swipeable']
  lazyRender?: boolean
  count: number
  duration: number | string
  currentIndex: number
  swiperRef: React.RefObject<SwiperInstance>
  onChange?: (index) => void
  children?: React.ReactNode
}

export interface TabPaneProps {
  key?: React.Key
  /** @private */
  index?: number
  /** 标签名称，作为匹配的标识符	 */
  name?: number | string
  /** 图标右上角徽标的内容	 */
  badge?:
    | number
    | string
    | Omit<BadgeProps, 'children' | 'onClick' | 'onTouchStart'>
  /** 标题 */
  title?: TabPaneTitle
  /** 描述信息 */
  description?: TabPaneTitle
  /** 自定义标题样式	 */
  titleStyle?: React.CSSProperties
  /** 自定义标题类名	 */
  titleClass?: string
  /** 是否禁用标签	 */
  disabled?: boolean
  children?: React.ReactNode
}

export type TabsClickTabEventParams = {
  name: string | number
  event: React.MouseEvent
  disabled: boolean
  index: number
}

export type TabsInstance = {
  /** 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘	 */
  // resize: () => void;
  /** 滚动到指定的标签页，在滚动导航模式下可用 */
  scrollTo: (name: number | string) => void
  /** 调用 swiper 方法 */
  swiper?: Partial<Pick<SwiperInstance, 'disable' | 'enable'>>
}
