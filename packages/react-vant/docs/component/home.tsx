import React from 'react';
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
} from 'react-vant';
import clsx from 'clsx';
import { ClockO, Exchange, Play, Arrow, ArrowLeft, Bookmark, WarningO } from '@react-vant/icons';
import './home.less';

const SliderDemo = () => {
  const [value, updateValue] = React.useState<[number, number]>([20, 50]);
  return <Slider barHeight={4} range value={value} onChange={updateValue} vertical />;
};

export default () => {
  return (
    <div className="_home-container">
      <div className="_home-container-left">
        <Space direction="vertical" block align="end">
          <Typography.Title level={1}>React Vant</Typography.Title>
          <Typography.Title level={2}>
            性能极佳的高质量组件库，覆盖<span className="_home-primary-color">移动端</span>主流场景
          </Typography.Title>
          <Typography.Text size="lg">
            <Typography.Text strong type="primary">
              Vant
            </Typography.Text>{' '}
            是有赞前端团队开源的移动端组件库，于 2017 年开源。
          </Typography.Text>

          <Space style={{ marginTop: 30 }}>
            <Button round>npm install react-vant@next</Button>
            <Button round type="primary" icon={<Arrow />} iconPosition="right">
              开始使用
            </Button>
          </Space>
        </Space>
      </div>
      <div className="_home-container-right">
        <Flex className="_home-container-right-content" gutter={40}>
          <Flex.Item span={12}>
            <Space direction="vertical" block gap={40}>
              <Card className="_home-card" round>
                <Card.Body>
                  <Space direction="vertical">
                    <Typography.Text type="light">
                      <ClockO /> March 25th
                    </Typography.Text>
                    <Button
                      round
                      size="mini"
                      icon={
                        <Exchange style={{ fontSize: 18, color: '#3f45ff', fontWeight: 'bold' }} />
                      }
                    />
                    <Typography.Text strong size="xl" type="light">
                      Check the docs for getting every component API
                    </Typography.Text>
                    <Progress
                      showPivot={false}
                      color="#fff"
                      trackColor="rgba(255, 255, 255, 0.32)"
                      percentage="75"
                    />
                  </Space>
                </Card.Body>
              </Card>

              <Flex className="_home-music-card">
                <Image
                  style={{
                    width: 124,
                    height: 124,
                    margin: '0 10px 0 0',
                    borderRadius: 4,
                    overflow: 'hidden',
                    flex: 'none',
                  }}
                  src="https://mui.com/static/images/cards/basement-beside-myself.jpeg"
                />
                <Space style={{ padding: '10px 0' }} direction="vertical" justify="between">
                  <div>
                    <Typography.Title level={4}>Ultraviolet</Typography.Title>
                    <Typography.Text>Basement • Beside Myself</Typography.Text>
                  </div>
                  <Space>
                    <Button size="small" icon={<ArrowLeft />} round />
                    <Button size="small" icon={<Play />} round />
                    <Button size="small" icon={<Arrow />} round />
                  </Space>
                </Space>
              </Flex>

              <Button.Group className="_home-button-group" plain round block type="primary">
                <Button type="primary">React</Button>
                <Button>Vant</Button>
                <Button>Next</Button>
              </Button.Group>

              <Space className="_home-switch" align="center" block justify="between">
                <Switch defaultChecked />
                <Switch loading />
                <Checkbox defaultChecked>React </Checkbox>
                <Checkbox>Typescript</Checkbox>
              </Space>

              <Collapse className="_home-collapse" initExpanded={['1']}>
                <Collapse.Item
                  size="large"
                  icon={<Bookmark />}
                  title="Fonts"
                  label="Typefaces used in this branding project."
                  name="1"
                >
                  Tag line headings (h1, h2) use Plus Jakarta Sans, whereas the rest of the elements
                  use IBM Plex Sans.
                </Collapse.Item>
                <Collapse.Item
                  disabled
                  size="large"
                  icon={<Bookmark />}
                  title="Hacks"
                  label="Some of our secrets to make this website."
                  name="2"
                >
                  Some of our secrets to make this website.
                </Collapse.Item>
              </Collapse>

              <Cell.Group className="_home-cell">
                <Cell title="Folder Name" value="size" />
                <Cell
                  icon={<Bookmark />}
                  title="Dependencies"
                  value={<Typography.Text type="success">44MB</Typography.Text>}
                />
                <Cell
                  icon={<Bookmark />}
                  title="Fonts"
                  value={<Typography.Text type="success">125.6kb</Typography.Text>}
                />
                <Cell
                  icon={<Bookmark />}
                  title="Libs"
                  value={<Typography.Text type="success">134MB</Typography.Text>}
                />
                <Cell
                  icon={<Bookmark />}
                  title="Source"
                  value={<Typography.Text type="success">200MB</Typography.Text>}
                />
              </Cell.Group>
            </Space>
          </Flex.Item>
          <Flex.Item span={12}>
            <Space direction="vertical" gap={40} block>
              <Calendar className="_home-calendar" showConfirm={false} poppable={false} />
              <Tabs className="_home-tabs">
                {['Yesterday', 'Today', 'Tomorrow'].map((el) => (
                  <Tabs.TabPane key={el} title={el} />
                ))}
              </Tabs>
              <Flex gutter={20} className="_home-slider">
                <Flex.Item span={12}>
                  <div className={clsx('_home-box')}>
                    <SliderDemo />
                  </div>
                </Flex.Item>
                <Flex.Item span={12}>
                  <Space gap={20} direction="vertical" block>
                    <Button size="large" block type="primary">
                      Buy now
                    </Button>
                    <Button size="large" block type="primary" plain>
                      Buy now
                    </Button>
                  </Space>
                </Flex.Item>
              </Flex>

              <Space className="_home-steps" justify="between" block>
                <Space direction="vertical">
                  <Typography.Title level={5}>Add these properties:</Typography.Title>
                  <Steps activeColor="#3f45ff" direction="vertical" active={2}>
                    <Steps.Item>Margin Top</Steps.Item>
                    <Steps.Item>Padding Bottom</Steps.Item>
                    <Steps.Item>Flexbox</Steps.Item>
                  </Steps>
                </Space>
                <WarningO style={{ fontSize: 24, color: '#888' }} />
              </Space>
            </Space>
          </Flex.Item>
        </Flex>
      </div>
    </div>
  );
};
