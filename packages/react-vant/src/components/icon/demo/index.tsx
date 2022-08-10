import React from 'react'
import {
  Cell,
  Grid,
  Space,
  Switch,
  Toast,
  Typography,
  Search,
} from 'react-vant'
import * as Icons from '@react-vant/icons'
import icons from './config'
import './style.less'

function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

// from https://30secondsofcode.org
function copyToClipboard(str: string) {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)

  const selection = document.getSelection()

  if (!selection) {
    return
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false

  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)

  if (selected) {
    selection.removeAllRanges()
    selection.addRange(selected)
  }
}

function camelize(str) {
  return str
    .split('-')
    .map(el => el.replace(/^\S/, s => s.toUpperCase()))
    .join('')
}

function getTypeIcons(type, keyword = '') {
  return icons[type]
    .map(icon => {
      const name = camelize(icon)
      if (
        name.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1
      ) {
        const component = Icons[name]
        return { name, component }
      }
      return false
    })
    .filter(Boolean)
}

export default () => {
  const [baseVisible, updateBaseVisible] = React.useState(true)
  const [lineVisible, updateLineVisible] = React.useState(true)
  const [fillVisible, updateFillVisible] = React.useState(true)
  const [keyword, updateKeyword] = React.useState('')

  const baseIcons = React.useMemo(
    () => getTypeIcons('basic', keyword),
    [keyword]
  )
  const lineIcons = React.useMemo(
    () => getTypeIcons('outline', keyword),
    [keyword]
  )
  const fillIcons = React.useMemo(
    () => getTypeIcons('filled', keyword),
    [keyword]
  )

  const updateKeywordDebunce = React.useMemo(
    () => debounce(value => updateKeyword(value), 500),
    []
  )

  const copy = (icon: string) => {
    const tag = `<${icon}  />`
    copyToClipboard(tag)

    Toast({
      duration: 1500,
      className: 'demo-icon-notify',
      message: `复制成功: ${tag}`,
    })
  }

  return (
    <div className='demo-icon-inline'>
      <Space align='center' className='demo-icon-inline--filter'>
        <Cell
          center
          title='基础图标'
          rightIcon={
            <Switch
              checked={baseVisible}
              size={20}
              onChange={updateBaseVisible}
            />
          }
        />
        <Cell
          center
          title='线框风格'
          rightIcon={
            <Switch
              checked={lineVisible}
              size={20}
              onChange={updateLineVisible}
            />
          }
        />
        <Cell
          center
          title='实底风格'
          rightIcon={
            <Switch
              checked={fillVisible}
              size={20}
              onChange={updateFillVisible}
            />
          }
        />
        <Search
          value={keyword}
          onChange={updateKeywordDebunce}
          placeholder='在此搜索图标，点击图标可复制代码'
          background='transparent'
        />
      </Space>
      {baseVisible && !!baseIcons.length && (
        <>
          <Typography.Title level={3}>基础图标</Typography.Title>
          <Grid style={{ marginBottom: 40 }} border={false} columnNum={7}>
            {baseIcons.map(item => (
              <Grid.Item
                icon={<item.component />}
                text={item.name}
                onClick={() => copy(item.name)}
                key={item.name}
              />
            ))}
          </Grid>
        </>
      )}
      {lineVisible && !!lineIcons.length && (
        <>
          <Typography.Title level={3}>线框风格</Typography.Title>
          <Grid style={{ marginBottom: 40 }} border={false} columnNum={7}>
            {lineIcons.map(item => (
              <Grid.Item
                icon={<item.component />}
                text={item.name}
                onClick={() => copy(item.name)}
                key={item.name}
              />
            ))}
          </Grid>
        </>
      )}
      {fillVisible && !!fillIcons.length && (
        <>
          <Typography.Title level={3}>实底风格</Typography.Title>
          <Grid style={{ marginBottom: 40 }} border={false} columnNum={7}>
            {fillIcons.map(item => (
              <Grid.Item
                icon={<item.component />}
                text={item.name}
                onClick={() => copy(item.name)}
                key={item.name}
              />
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}
