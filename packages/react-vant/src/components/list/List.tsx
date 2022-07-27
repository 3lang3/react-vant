import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { ListInstance, ListProps } from './PropsType'
import LoadMore from './LoadMore'

const List = forwardRef<ListInstance, ListProps>((props, ref) => {
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

List.defaultProps = {
  offset: 300,
}

export default List
