import * as React from 'react'
import IconBase, { IconBaseProps } from './IconBase'

const cache: string[] = []

const createFromIconfontCN = (scriptUrl: string | string[]) => {
  const passUrl = Array.isArray(scriptUrl) ? scriptUrl : [scriptUrl]
  const urls = passUrl.filter(u => cache.indexOf(u) === -1)
  if (
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    typeof document.createElement === 'function' &&
    typeof scriptUrl === 'string' &&
    urls.length
  ) {
    urls.forEach(u => {
      const script = document.createElement('script')
      script.setAttribute('src', u)
      script.setAttribute('data-namespace', u)
      cache.push(u)
      document.body.appendChild(script)
    })
  }

  return React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'children'>>(
    (props, ref) => {
      const { name } = props

      let content: React.ReactNode
      if (name) {
        content = (
          <svg width='1em' height='1em' fill='currentColor'>
            <use xlinkHref={`#${name}`} />
          </svg>
        )
      }
      return (
        <IconBase {...props} ref={ref}>
          {content}
        </IconBase>
      )
    }
  )
}

export default createFromIconfontCN
