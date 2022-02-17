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
  Card,
  Progress,
  Tabs,
} from 'react-vant';
import { ClockO, Exchange, Play, Arrow, ArrowLeft, Bookmark } from '@react-vant/icons';
import './index.less';

export default () => {
  return (
    <div className="_home-container">
      <div className="_home-container-left">
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
          <Button round type="primary" icon={<Arrow />} iconPosition="right">
            开始使用
          </Button>
          <Button round>npm install react-vant@next</Button>
        </Space>
      </div>
      <div className="_home-container-right">
        <Flex>
          <Flex.Item span={12}>
            <Card
              round
              style={{
                background: 'linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)',
                color: 'white',
              }}
            >
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

            <Button.Group plain round block type="primary">
              <Button type="primary">React</Button>
              <Button>Vant</Button>
              <Button>Next</Button>
            </Button.Group>

            <Space align="center">
              <Switch defaultChecked />
              <Switch loading />
              <Checkbox defaultChecked>React </Checkbox>
              <Checkbox>JavaScript</Checkbox>
            </Space>

            <Collapse initExpanded={['1']}>
              <Collapse.Item
                icon={<Bookmark />}
                title="Fonts"
                label="Typefaces used in this branding project."
                name="1"
              >
                Tag line headings (h1, h2) use Plus Jakarta Sans, whereas the rest of the elements
                use IBM Plex Sans.
              </Collapse.Item>
              <Collapse.Item title="标题2" name="2">
                代码是写出来给人看的，附带能在机器上运行
              </Collapse.Item>
            </Collapse>

            <Tabs className="_home-tabs">
              {['Yesterday', 'Today', 'Tomorrow'].map((el) => (
                <Tabs.TabPane key={el} title={el} />
              ))}
            </Tabs>

            <Calendar className="_home-calendar" showConfirm={false} poppable={false} />
          </Flex.Item>
        </Flex>
      </div>
    </div>
  );
};
