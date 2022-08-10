import React from 'react'
import { Typography, Divider } from 'react-vant'
import './style.less'

const content =
  'React Vant 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用，使用过程中发现任何问题都可以提 Issue 给我们，当然，我们也非常欢迎你给我们发 PR。'

export default () => {
  return (
    <div className='demo-typography'>
      <Typography.Text ellipsis>{content}</Typography.Text>
      <Divider>多行省略</Divider>
      <Typography.Text ellipsis={2}>{content}</Typography.Text>
      <Divider>带展开操作</Divider>
      <Typography.Text
        ellipsis={{
          rows: 2,
          collapseText: '收起',
          expandText: '展开',
        }}
      >
        {content}
      </Typography.Text>
      <Divider>保留末位文本</Divider>
      <Typography.Text
        ellipsis={{
          rows: 2,
          symbol: '......',
          suffixCount: 10,
        }}
      >
        {content}
      </Typography.Text>
      <Divider>自定义文本后缀</Divider>
      <Typography.Text
        ellipsis={{
          rows: 2,
          suffixText: '--William',
          expandText: '更多',
        }}
      >
        {content}
      </Typography.Text>
    </div>
  )
}
