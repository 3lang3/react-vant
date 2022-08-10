import { BaseTypeProps } from '../utils'

export interface WaterMarkProps extends BaseTypeProps {
  /** 水印的宽度 */
  width?: number
  /** 水印的高度 */
  height?: number
  /** 水印旋转的角度，单位 °	 */
  rotate?: number
  /** 设置图片水印 */
  image?: {
    /** 图片地址 */
    src: string
    /** 图片宽度 */
    width: number
    /** 图片高度 */
    height: number
  }
  zIndex?: number
  /** 水印文字内容 */
  content?: string
  font?: {
    /** 文字颜色	 */
    color?: string
    /** 文字大小	 */
    size?: number | string
    /** 文字style属性 */
    style?: string
    /** 文字family */
    family?: string
    /** 文字weight属性 */
    weight?: string
  }
  /** 水印之间的水平间距	 */
  gapX?: number
  /** 水印之间的垂直间距	 */
  gapY?: number
  /** 是否覆盖整个页面	 */
  fullPage?: boolean
}
