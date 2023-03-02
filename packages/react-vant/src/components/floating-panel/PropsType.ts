import { BaseTypeProps } from '../utils'

export interface FloatingPanelProps extends BaseTypeProps {
  anchors?: number[]
  onHeightChange?: (height: number) => void
}

export type FloatingPanelInstance = {
  moveTo: (height: number) => void
}
