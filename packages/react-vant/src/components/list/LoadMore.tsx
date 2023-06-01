import React from 'react'
import clsx from 'clsx'
import { LoadMoreProps, LoadMoreInstance } from './PropsType'
import { createNamespace } from '../utils'
import useLockFn from '../hooks/use-lock-fn'
import { getScrollParent } from '../hooks/use-scroll-parent'
import Loading from '../loading'
import ConfigProviderContext from '../config-provider/ConfigProviderContext'
import useThrottleFn from '../hooks/use-throttle-fn'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('list')

function isWindow(element: any | Window): element is Window {
  return element === window
}

const LoadMore = React.forwardRef<LoadMoreInstance, LoadMoreProps>((p, ref) => {
  const props = mergeProps(p, {
    threshold: 300,
  })
  const { locale } = React.useContext(ConfigProviderContext)
  const [failed, setFailed] = React.useState(false)

  const doLoadMore = useLockFn(async (isRetry: boolean) => {
    try {
      await props.onLoad(isRetry)
    } catch (e) {
      setFailed(true)
    }
  })

  const elementRef = React.useRef<HTMLDivElement>(null)

  // Prevent duplicated trigger of `check` function
  const [flag, setFlag] = React.useState({})
  const nextFlagRef = React.useRef(flag)

  const [scrollParent, setScrollParent] = React.useState<
    Window | Element | null | undefined
  >()

  const { run: check } = useThrottleFn(
    async () => {
      if (nextFlagRef.current !== flag) return
      if (props.finished || failed) return
      const element = elementRef.current
      if (!element) return
      if (!element.offsetParent) return
      const parent = getScrollParent(element)
      setScrollParent(parent)
      if (!parent) return
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top
      const current = isWindow(parent)
        ? window.innerHeight
        : parent.getBoundingClientRect().bottom

      const isReachEdge = current >= elementTop - props.threshold
      if (isReachEdge) {
        const nextFlag = {}
        nextFlagRef.current = nextFlag
        await doLoadMore(false)
        setFlag(nextFlag)
      }
    },
    {
      wait: 100,
      leading: true,
      trailing: true,
    }
  )

  React.useEffect(() => {
    check()
  })

  React.useEffect(() => {
    const element = elementRef.current
    if (!element) return
    if (!scrollParent) return
    function onScroll() {
      check()
    }
    scrollParent.addEventListener('scroll', onScroll)
    return () => {
      scrollParent.removeEventListener('scroll', onScroll)
    }
  }, [scrollParent])

  async function retry() {
    setFailed(false)
    await doLoadMore(true)
    setFlag(nextFlagRef.current)
  }

  const renderDone = () => {
    if (props.finishedText) {
      return <div className={clsx(bem('finished'))}>{props.finishedText}</div>
    }
    return null
  }
  const renderFailed = () => {
    if (props.errorText) {
      if (typeof props.errorText === 'function') return props.errorText(retry)
      return (
        <div onClick={retry} className={clsx(bem('error'))}>
          {props.errorText}
        </div>
      )
    }

    return null
  }
  const renderLoading = () => {
    return (
      <Loading className={clsx(bem('loading'))} size={16}>
        {props.loadingText || locale.loading}
      </Loading>
    )
  }

  const renderPlaceholder = () => {
    if (props.finished) return renderDone()
    if (failed) return renderFailed()
    return renderLoading()
  }

  React.useImperativeHandle(ref, () => ({ check }))

  return (
    <div className={clsx(props.className, bem())} style={props.style}>
      {props.children}
      <div className={clsx(props.className, bem('loadmore'))} ref={elementRef}>
        {renderPlaceholder()}
      </div>
    </div>
  )
})

export default LoadMore
