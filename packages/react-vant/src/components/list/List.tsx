import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { ListInstance, ListProps } from './PropsType'
import LoadMore from './LoadMore'
import { mergeProps } from '../utils/get-default-props'

const List = forwardRef<ListInstance, ListProps>((p, ref) => {
  const props = mergeProps(p, {
    offset: 300,
  })
  return (
    <LoadMore
      ref={ref}
      className={clsx(props.className)}
      style={props.style}
      onLoad={props.onLoad}
      threshold={props.offset}
      finished={props.finished}
      finishedText={props.finishedText}
      loadingText={props.loadingText}
      errorText={props.errorText}
    >
      {props.children}
    </LoadMore>
  )
})

export default List
