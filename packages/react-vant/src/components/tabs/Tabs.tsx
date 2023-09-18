import React, {
  useMemo,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react'
import clsx from 'clsx'

import useRefs from '../hooks/use-refs'
import useScrollParent from '../hooks/use-scroll-parent'

import Sticky from '../sticky'
import TabsTitle from './TabsTitle'
import TabsContent from './TabsContent'
import TabsContext from './TabsContext'

import { TabPaneProps, TabsInstance, TabsProps } from './PropsType'
import {
  addUnit,
  parseChildList,
  isHidden,
  unitToPx,
  scrollLeftTo,
  getElementTop,
  getVisibleHeight,
  scrollTopTo,
  getVisibleTop,
  setRootScrollTop,
  createNamespace,
  isObject,
} from '../utils'
import { callInterceptor } from '../utils/interceptor'
import { BORDER_TOP_BOTTOM } from '../utils/constant'
import { useUpdateEffect } from '../hooks'
import useEventListener from '../hooks/use-event-listener'
import { isReachBottom } from './utils'
import type { SwiperInstance } from '../swiper/PropsType'
import useRefState from '../hooks/use-ref-state'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('tabs')

const getTabName = (tab: TabPaneProps, index: number): string | number =>
  tab?.name ?? index

const Tabs = forwardRef<TabsInstance, TabsProps>((p, ref) => {
  const props = mergeProps(p, {
    type: 'line',
    duration: 300,
    swipeThreshold: 5,
    offsetTop: 0,
    ellipsis: true,
    lazyRender: true,
    stickyInitScrollbar: true,
    defaultActive: 0,
    align: 'center',
  })
  const { children, color, align, background } = props

  const root = useRef<HTMLDivElement>(null)
  const swiperRef = useRef<SwiperInstance>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const lockScroll = useRef<boolean>(false)
  const stickyFixed = useRef<boolean>(false)
  const immediateRef = useRef<boolean>(true)
  const navRef = useRef<HTMLDivElement>(null)
  const scroller = useScrollParent(root) as HTMLElement

  const [titleRefs, setTitleRefs] = useRefs()
  const [contentRefs, setContentRefs] = useRefs()

  const wrapHeight = useMemo(() => {
    if (!wrapRef.current) return 0
    return getVisibleHeight(wrapRef.current)
  }, [wrapRef.current])

  const childrenList = useMemo(
    () => parseChildList<TabPaneProps>(props.children),
    [props.children]
  )

  const defaultIndex = useMemo(() => {
    if (props.scrollspy) return 0
    const ac = props.active === undefined ? props.defaultActive : props.active
    let idx = childrenList.findIndex(
      (tab: TabPaneProps, index) => getTabName(tab, index) === ac
    )
    if (idx < 0) idx = 0
    return idx
  }, [props.scrollspy, props.active, props.defaultActive])

  const [index, setIndex] = useRefState(defaultIndex)

  // whether the nav is scrollable
  const scrollable = useMemo(
    () => childrenList.length > props.swipeThreshold || !props.ellipsis,
    [childrenList.length, props.swipeThreshold, props.ellipsis]
  )

  const navStyle = useMemo(
    () => ({
      borderColor: props.type === 'card' ? color : undefined,
      background,
    }),
    [color, background]
  )

  const currentName = useMemo(() => {
    const activeTab = childrenList?.[index]
    return activeTab ? getTabName(activeTab, index) : 0
  }, [childrenList, index])

  const offsetTopPx = useMemo(
    () => unitToPx(props.offsetTop),
    [props.offsetTop]
  )

  // 下划线偏移量
  const [lineTranslateLeft, setLineTranslateLeft] = useState<number>(0)
  const [showLine, setShowLine] = useState<boolean>(false)
  useUpdateEffect(() => {
    const hidden = isHidden(root.current)
    const title = titleRefs?.[index]
    if (!title || hidden || props.type !== 'line') {
      return
    }
    setShowLine(true)
    setLineTranslateLeft(title.offsetLeft + title.offsetWidth / 2)
  }, [root.current, titleRefs, props.type, index, childrenList])

  // 下划线样式
  const lineStyle = useMemo(() => {
    const { lineWidth, lineHeight } = props
    const measureStyle = {
      width: addUnit(lineWidth),
      backgroundColor: color,
      transitionDuration: `${immediateRef.current ? 0 : props.duration}ms`,
      display: showLine ? 'inherit' : 'none',
    } as React.CSSProperties

    if (lineTranslateLeft) {
      measureStyle.transform = `translateX(${lineTranslateLeft}px) translateX(-50%)`
    }

    if (lineHeight) {
      const height = addUnit(lineHeight)
      measureStyle.height = height
      measureStyle.borderRadius = height
    }
    return measureStyle
  }, [
    color,
    props.lineHeight,
    props.lineWidth,
    lineTranslateLeft,
    immediateRef.current,
    showLine,
  ])

  const getAvailableTab = (targetIndex: number) => {
    const diff = targetIndex < index ? -1 : 1
    while (targetIndex >= 0 && targetIndex < childrenList.length) {
      if (!childrenList[targetIndex]?.disabled) {
        return targetIndex
      }
      targetIndex += diff
    }
    return null
  }

  const setCurrentIndex = (currentIndex: number) => {
    const availableIndex = getAvailableTab(currentIndex)
    if (availableIndex === null) return
    const newTab = childrenList[availableIndex]
    const newName = getTabName(newTab, availableIndex)
    setIndex(availableIndex)
    props.onChange?.(newName, availableIndex)
  }

  // sync scrollspy content position
  const scrollToCurrentContent = (current?) => {
    if (!props.scrollspy) return
    const contentTarget = contentRefs[current ?? index]
    if (contentTarget && scroller) {
      const immediate = isObject(props.scrollspy)
        ? props.scrollspy?.scrollImmediate ?? true
        : true
      // void ui shake use math.ceil to get `to` value
      const to = Math.ceil(
        getElementTop(contentTarget, scroller) - (offsetTopPx + wrapHeight)
      )
      lockScroll.current = true
      scrollTopTo(scroller, to, immediate ? 0 : +props.duration, () => {
        lockScroll.current = false
      })
    }
  }

  const onClickTab = (item, targetIndex: number, event: React.MouseEvent) => {
    const { disabled = false } = item
    const name = getTabName(item, targetIndex)
    props.onClickTab?.({
      name,
      event,
      disabled,
      index: targetIndex,
    })
    if (disabled) return

    callInterceptor({
      interceptor: props.beforeChange,
      args: [name],
      done: () => {
        if (targetIndex !== index) {
          setCurrentIndex(targetIndex)
          scrollToCurrentContent(targetIndex)
        }
      },
    })
  }

  // scroll active tab into view
  const scrollIntoView = (immediate?: boolean) => {
    const nav = navRef.current
    const title = titleRefs?.[index]
    if (!scrollable || !nav || !title) {
      return
    }

    const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2
    scrollLeftTo(nav, to, immediate ? 0 : +props.duration)
  }

  const getCurrentIndexOnScroll = () => {
    const scrollOffset = offsetTopPx + wrapHeight
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < contentRefs.length; index++) {
      const $el = contentRefs[index]
      const top = getVisibleTop($el)
      if (top > scrollOffset) {
        return index === 0 ? 0 : index - 1
      }
    }

    return titleRefs.length - 1
  }

  const onScroll = () => {
    if (!props.scrollspy || lockScroll.current) return

    let currentIndex = getCurrentIndexOnScroll()
    if (typeof props.scrollspy === 'object') {
      if (
        props.scrollspy.autoFocusLast &&
        isReachBottom(props.scrollspy.reachBottomThreshold)
      ) {
        currentIndex = titleRefs.length - 1
      }
    }
    if (currentIndex !== index) {
      setCurrentIndex(currentIndex)
    }
  }

  const onStickyScroll = (params: { isFixed: boolean; scrollTop: number }) => {
    stickyFixed.current = params.isFixed
    props.onScroll?.(params)
  }

  const renderNav = () => {
    return childrenList.map((item: TabPaneProps, itemIndex: number) => {
      return (
        <TabsTitle
          ref={setTitleRefs(itemIndex)}
          key={item.key}
          type={props.type}
          badge={item.badge}
          title={item.title}
          description={item.description}
          color={color}
          style={item.titleStyle}
          className={item.titleClass}
          isActive={itemIndex === index}
          disabled={item.disabled}
          scrollable={scrollable}
          activeColor={props.titleActiveColor}
          inactiveColor={props.titleInactiveColor}
          onClick={event => {
            onClickTab(item, itemIndex, event)
          }}
        />
      )
    })
  }

  const renderHeader = () => {
    const { type, border } = props
    return (
      <div
        ref={wrapRef}
        className={clsx([
          bem('wrap', { scrollable }),
          { [BORDER_TOP_BOTTOM]: type !== 'card' && border },
        ])}
      >
        <div
          ref={navRef}
          role='tablist'
          className={clsx(
            bem('nav', [
              type,
              { complete: scrollable, start: align === 'start' },
            ])
          )}
          style={navStyle}
        >
          {props.navLeft}
          {renderNav()}
          {type === 'line' && !immediateRef.current && (
            <div className={clsx(bem('line'))} style={lineStyle} />
          )}
          {props.navRight}
        </div>
      </div>
    )
  }

  // sync props.active to inner index value
  useUpdateEffect(() => {
    if (props.active === undefined) return
    if (props.active !== currentName) {
      const currentIndex = childrenList.findIndex(
        (tab: TabPaneProps, index) => getTabName(tab, index) === props.active
      )
      if (currentIndex > -1 && currentIndex !== index) {
        setIndex(currentIndex)
        scrollToCurrentContent(currentIndex)
      }
    }
  }, [props.active])

  // sync tab.pane title in correct postion when index change
  useUpdateEffect(() => {
    scrollIntoView()
    // scrollspy situation
    if (stickyFixed.current && props.stickyInitScrollbar && !props.scrollspy) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setRootScrollTop(Math.ceil(getElementTop(root.current!) - offsetTopPx))
    }
  }, [index])

  // init
  useEffect(() => {
    immediateRef.current = false
    scrollIntoView(true)
  }, [])

  useEventListener('scroll', onScroll, {
    target: scroller,
    depends: [index],
  })

  useImperativeHandle(ref, () => ({
    scrollTo: (name: number | string) => {
      const currentIndex = childrenList.findIndex(
        (tab: TabPaneProps, index) => getTabName(tab, index) === name
      )
      if (currentIndex > -1 && currentIndex !== index) {
        setIndex(currentIndex)
        scrollToCurrentContent(currentIndex)
      }
    },
    swiper: swiperRef.current
      ? {
          enable: swiperRef.current?.enable,
          disable: swiperRef.current?.disable,
        }
      : undefined,
  }))

  return (
    <TabsContext.Provider value={{ props, currentName, scrollIntoView }}>
      <div
        ref={root}
        className={clsx(props.className, bem([props.type]))}
        style={props.style}
      >
        {props.sticky ? (
          <Sticky
            container={root}
            offsetTop={offsetTopPx}
            onScroll={onStickyScroll}
          >
            {renderHeader()}
            {props.navBottom}
          </Sticky>
        ) : (
          <>
            {renderHeader()}
            {props.navBottom}
          </>
        )}
        <TabsContent
          swiperRef={swiperRef}
          count={childrenList.length}
          animated={props.animated}
          duration={props.duration}
          swipeable={props.swipeable}
          lazyRender={props.lazyRender}
          currentIndex={index}
          onChange={setCurrentIndex}
        >
          {React.Children.toArray(children)
            .filter(Boolean)
            .map((node: React.ReactElement, index: number) =>
              React.cloneElement(node, {
                index,
                ref: setContentRefs(index),
              })
            )}
        </TabsContent>
      </div>
    </TabsContext.Provider>
  )
})

export default Tabs
