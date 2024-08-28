import React from 'react'
import clsx from 'clsx'
import { WaterMarkProps } from './PropsType'
import { createNamespace } from '../utils'
import { mergeProps } from '../utils/get-default-props'

const DEFAULT_FONT = {
  style: 'normal',
  weight: 'normal',
  color: 'rgba(0,0,0,.15)',
  size: 14,
  family: 'sans-serif',
}

const [bem] = createNamespace('water-mark')

// 移植自antd mobile: https://github.com/ant-design/ant-design-mobile/blob/master/src/components/water-mark/water-mark.tsx
const WaterMark: React.FC<WaterMarkProps> = p => {
  const props = mergeProps(p, {
    zIndex: 2000,
    gapX: 24,
    gapY: 48,
    width: 100,
    height: 64,
    rotate: -22,
    font: DEFAULT_FONT,
    fullPage: true,
  })
  const { zIndex, gapX, gapY, width, height, rotate, image, content, font } =
    props

  const [base64Url, setBase64Url] = React.useState('')

  React.useEffect(() => {
    const canvas = document.createElement('canvas')
    const ratio = window.devicePixelRatio

    const ctx = canvas.getContext('2d')

    const canvasWidth = `${(gapX + width) * ratio}px`
    const canvasHeight = `${(gapY + height) * ratio}px`

    const markWidth = width * ratio
    const markHeight = height * ratio

    canvas.setAttribute('width', canvasWidth)
    canvas.setAttribute('height', canvasHeight)

    if (ctx) {
      if (image) {
        const { width, height, src } = image
        ctx.translate(markWidth / 2, markHeight / 2)
        ctx.rotate((Math.PI / 180) * Number(rotate))

        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.referrerPolicy = 'no-referrer'
        img.src = src
        img.onload = () => {
          ctx.drawImage(
            img,
            (-width * ratio) / 2,
            (-height * ratio) / 2,
            width * ratio,
            height * ratio
          )
          ctx.restore()
          setBase64Url(canvas.toDataURL())
        }
      } else if (content) {
        const frontProps = { ...DEFAULT_FONT, ...font }
        const { size, family, style, weight, color } = frontProps
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'
        // 文字绕中间旋转
        ctx.translate(markWidth / 2, markHeight / 2)
        ctx.rotate((Math.PI / 180) * Number(rotate))

        const markSize = Number(size) * ratio
        ctx.font = `${style} normal ${weight} ${markSize}px/${markHeight}px ${family}`
        ctx.fillStyle = color

        ctx.fillText(content, 0, 0)
        ctx.restore()
        setBase64Url(canvas.toDataURL())
      }
    } else {
      throw new Error('当前环境不支持Canvas')
    }
  }, [gapX, gapY, rotate, width, height, image, content, font])

  return (
    <div
      className={clsx(
        bem({
          full: props.fullPage,
        })
      )}
      style={{
        zIndex,
        backgroundSize: `${gapX + width}px`,
        backgroundImage: `url('${base64Url}')`,
      }}
    />
  )
}

export default WaterMark
