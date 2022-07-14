import React from 'react'
import { Tabs } from 'react-vant'
import './style.less'

const items = Array.from({ length: 3 }, (_, i) => i + 1)

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs defaultActive={2}>
        {items.map(item => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            下划线标签页 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Tabs border type='capsule'>
        {items.map(item => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            胶囊标签页 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Tabs border type='jumbo'>
        {items.map(item => (
          <Tabs.TabPane
            badge={item}
            key={item}
            title={`标签${item}`}
            description='描述内容'
          >
            带描述信息的标签页 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Tabs type='card'>
        {items.map(item => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            卡片标签页 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}
