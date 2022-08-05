import React from 'react'
import {
  Collapse,
  Switch,
  Checkbox,
  Calendar,
  Image,
  Button,
  Space,
  Flex,
  Typography,
  Slider,
  Card,
  Progress,
  Tabs,
  Cell,
  Steps,
} from 'react-vant'
import clsx from 'clsx'
import {
  ClockO,
  Exchange,
  Play,
  Arrow,
  ArrowLeft,
  Bookmark,
  WarningO,
  AppsO,
} from '@react-vant/icons'
import './home.less'
import { useCN } from './useCN'

const buttons = ['React', 'Vant', 'Next']

const ButtonGroupDemo = () => {
  const [current, setCurrent] = React.useState(0)
  return (
    <Button.Group className='_home-button-group' round block type='primary'>
      {buttons.map((button, index) => (
        <Button
          key={button}
          plain={index !== current}
          onClick={() => setCurrent(index)}
        >
          {button}
        </Button>
      ))}
    </Button.Group>
  )
}

const SliderDemo = () => {
  const [value, updateValue] = React.useState<[number, number]>([20, 50])
  return (
    <Slider barHeight={4} range value={value} onChange={updateValue} vertical />
  )
}

const Home = () => {
  const isCN = useCN()

  return (
    <div className='_home-container'>
      <div className='_home-container-left'>
        <Space direction='vertical' block align='end'>
          <Typography.Title level={1}>React Vant</Typography.Title>
          <Typography.Title level={2} style={{ textAlign: 'right' }}>
            {isCN ? (
              <>
                性能极佳的高质量组件库，覆盖
                <span className='_home-primary-color'>移动端</span>
                主流场景
              </>
            ) : (
              <>
                Fast and high-quality{' '}
                <span className='_home-primary-color'>mobile</span> component
                library
              </>
            )}
          </Typography.Title>
          <Typography.Text
            type='secondary'
            size='lg'
            style={{ maxWidth: 520, textAlign: 'right' }}
          >
            <Typography.Text
              style={{ cursor: 'pointer' }}
              onClick={() =>
                window.open('https://github.com/youzan/vant', '_blank')
              }
              strong
              type='primary'
            >
              Vant
            </Typography.Text>
            {isCN
              ? '是有赞前端团队开源的移动端组件库，于 2017 年开源。'
              : ' is a mobile component library open source by youzan front-end team, which was open source in 2017.'}
          </Typography.Text>

          <Space gap={16} style={{ marginTop: 30 }}>
            <Button
              round
              type='default'
              size='large'
              icon={<AppsO />}
              style={{ width: 148 }}
              onClick={() => {
                window.location.href = '/components'
              }}
            >
              {isCN ? `组件列表` : `Components`}
            </Button>
            <Button
              size='large'
              onClick={() => {
                window.location.href = '/guide/quickstart'
              }}
              round
              type='primary'
              icon={<Arrow />}
              iconPosition='right'
              style={{ width: 148 }}
            >
              {isCN ? `开始使用` : `Get Started`}
            </Button>
          </Space>
        </Space>
      </div>
      <div className='_home-container-right'>
        <Flex className='_home-container-right-content' gutter={40}>
          <Flex.Item span={12}>
            <Space direction='vertical' block gap={40}>
              <Card className='_home-card' round>
                <Card.Body>
                  <Space direction='vertical'>
                    <Typography.Text type='light'>
                      <ClockO /> March 25th
                    </Typography.Text>
                    <Button
                      round
                      plain
                      size='mini'
                      icon={
                        <Exchange
                          style={{
                            fontSize: 18,
                            color: '#3f45ff',
                            fontWeight: 'bold',
                          }}
                        />
                      }
                    />
                    <Typography.Text strong size='xl' type='light'>
                      Check the docs for getting every component API
                    </Typography.Text>
                    <Progress
                      showPivot={false}
                      color='#fff'
                      trackColor='rgba(255, 255, 255, 0.32)'
                      percentage='75'
                    />
                  </Space>
                </Card.Body>
              </Card>

              <Flex className='_home-music-card' align='center'>
                <Image
                  fit='cover'
                  style={{
                    width: 124,
                    height: 124,
                    margin: '0 10px 0 0',
                    borderRadius: 4,
                    overflow: 'hidden',
                    flex: 'none',
                  }}
                  src='/demo_1.jpg'
                />
                <Space direction='vertical' justify='between'>
                  <div>
                    <Typography.Title level={4}>Ultraviolet</Typography.Title>
                    <Typography.Text>Basement • Beside Myself</Typography.Text>
                  </div>
                  <Space>
                    <Button size='small' icon={<ArrowLeft />} round />
                    <Button size='small' icon={<Play />} round />
                    <Button size='small' icon={<Arrow />} round />
                  </Space>
                </Space>
              </Flex>

              <ButtonGroupDemo />

              <Space
                className='_home-switch'
                align='center'
                block
                justify='between'
              >
                <Switch defaultChecked />
                <Switch loading />
                <Checkbox defaultChecked>React </Checkbox>
                <Checkbox>Typescript</Checkbox>
              </Space>

              <Collapse className='_home-collapse' initExpanded={['1']}>
                <Collapse.Item
                  size='large'
                  icon={<Bookmark />}
                  title='Fonts'
                  label='Typefaces used in this branding project.'
                  name='1'
                >
                  Tag line headings (h1, h2) use Plus Jakarta Sans, whereas the
                  rest of the elements use IBM Plex Sans.
                </Collapse.Item>
                <Collapse.Item
                  disabled
                  size='large'
                  icon={<Bookmark />}
                  title='Hacks'
                  label='Some of our secrets to make this website.'
                  name='2'
                >
                  Some of our secrets to make this website.
                </Collapse.Item>
              </Collapse>

              <Cell.Group className='_home-cell'>
                <Cell title='Folder Name' value='size' />
                <Cell
                  icon={<Bookmark />}
                  title='Dependencies'
                  value={<Typography.Text type='success'>44MB</Typography.Text>}
                />
                <Cell
                  icon={<Bookmark />}
                  title='Fonts'
                  value={
                    <Typography.Text type='success'>125.6kb</Typography.Text>
                  }
                />
                <Cell
                  icon={<Bookmark />}
                  title='Libs'
                  value={
                    <Typography.Text type='success'>134MB</Typography.Text>
                  }
                />
                <Cell
                  icon={<Bookmark />}
                  title='Source'
                  value={
                    <Typography.Text type='success'>200MB</Typography.Text>
                  }
                />
              </Cell.Group>
            </Space>
          </Flex.Item>
          <Flex.Item span={12}>
            <Space direction='vertical' gap={40} block>
              <Calendar
                title={isCN ? '日期选择' : 'Calender'}
                className='_home-calendar'
                showConfirm={false}
                poppable={false}
              />
              <Tabs className='_home-tabs'>
                {['Yesterday', 'Today', 'Tomorrow'].map(el => (
                  <Tabs.TabPane key={el} title={el} />
                ))}
              </Tabs>
              <Flex gutter={20} className='_home-slider'>
                <Flex.Item span={12}>
                  <div className={clsx('_home-box')}>
                    <SliderDemo />
                  </div>
                </Flex.Item>
                <Flex.Item span={12}>
                  <Space gap={20} direction='vertical' block>
                    <Button size='large' block type='primary'>
                      Buy now
                    </Button>
                    <Button size='large' block type='primary' plain>
                      Buy now
                    </Button>
                  </Space>
                </Flex.Item>
              </Flex>

              <Space
                className='_home-steps'
                justify='between'
                direction='vertical'
                block
              >
                <Space justify='between' block>
                  <Typography.Title level={5}>
                    Add these properties:
                  </Typography.Title>
                  <WarningO style={{ fontSize: 24, color: '#888' }} />
                </Space>
                <Steps activeColor='#3f45ff' direction='vertical' active={2}>
                  <Steps.Item>Margin Top</Steps.Item>
                  <Steps.Item>Padding Bottom</Steps.Item>
                  <Steps.Item>Flexbox</Steps.Item>
                </Steps>
              </Space>

              <Cell
                isLink
                center
                title='Avatar'
                label='Typefaces used in this branding project.'
                icon={<Image width={44} height={44} src='/demo_2.jpg' round />}
              />
            </Space>
          </Flex.Item>
        </Flex>
      </div>
    </div>
  )
}

export default Home
