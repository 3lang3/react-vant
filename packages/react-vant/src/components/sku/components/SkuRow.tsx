import React from 'react'
import cls from 'clsx'
import { BORDER_BOTTOM } from '../../utils/constant'
import { createNamespace } from '../../utils'

type SkuRowProps = {
  skuRow: Record<any, any>
  children?: React.ReactNode
}

const [bem] = createNamespace('sku-row')

const SkuRow: React.FC<SkuRowProps> = props => {
  const { skuRow } = props

  const renderTitle = () => {
    return (
      <div className={cls(bem('title'))}>
        {skuRow.k}
        {skuRow.is_multiple && (
          <span className={cls(bem('title-multiple'))}>（可多选）</span>
        )}
      </div>
    )
  }

  const renderContent = () => {
    const { largeImageMode } = skuRow
    return largeImageMode ? (
      <div className={cls(bem('scroller'))}>
        <div className={cls(bem('row'))}>{props.children}</div>
      </div>
    ) : (
      props.children
    )
  }

  return (
    <div className={cls(bem(), BORDER_BOTTOM)}>
      {renderTitle()}
      {renderContent()}
    </div>
  )
}

export default SkuRow
