# Button

### Install

```js
import { Button } from '@zhpfe/design'
```

## Usage

### Type

```jsx
<Button type="primary">Primary</Button>
<Button type="success">Success</Button>
<Button type="default">Default</Button>
<Button type="danger">Danger</Button>
<Button type="warning">Warning</Button>
```

### Plain

```jsx
<Button plain type="primary">Primary</Button>
<Button plain type="primary">Danger</Button>
```

### Hairline

```jsx
<Button plain hairline type="primary">Hairline</Button>
<Button plain hairline type="primary">Hairline</Button>
```

### Disabled

```jsx
<Button disabled type="primary">Diabled</Button>
<Button disabled type="primary">Diabled</Button>
```

### Loading

```jsx
<Button loading type="primary" />
<Button loading type="primary" loading-type="spinner" />
<Button loading type="primary" loading-text="Loading..." />
```

### Shape

```jsx
<Button square type="primary">Square</Button>
<Button round type="primary">Round</Button>
```

### Icon

```jsx
<Button icon="plus" type="primary" />
<Button icon="plus" type="primary">Button</Button>
<Button icon="https://img.yzcdn.cn/vant/user-active.png" type="primary">
  Button
</Button>
```

### Size

```jsx
<Button type="primary" size="large">Large</Button>
<Button type="primary" size="normal">Normal</Button>
<Button type="primary" size="small">Small</Button>
<Button type="primary" size="mini">Mini</Button>
```

### Block Element

```jsx
<Button type="primary" block>Block Element</Button>
```

### Route

```jsx
<Button type="primary" url="/vant/mobile.html">URL</Button>
<Button type="primary" to="index">Vue Router</Button>
```

### Custom Color

```jsx
<Button color="#7232dd">Pure</Button>
<Button color="#7232dd" plain>Pure</Button>
<Button color="linear-gradient(to right, #ff6034, #ee0a24)">
  Gradient
</Button>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `success` `warning` `danger` | _string_ | `default` |
| size | Can be set to `large` `small` `mini` | _string_ | `normal` |
| text | Text | _string_ | - |
| color | Color, support linear-gradient | _string_ | - |
| icon | Left Icon | _string_ | - |
| icon-prefix `v2.6.0` | Icon className prefix | _string_ | `van-icon` |
| icon-position `v2.10.7` | Icon position, can be set to `right` | _string_ | `left` |
| tag | HTML Tag | _string_ | `button` |
| native-type | Native Type Attribute | _string_ | `button` |
| plain | Whether to be plain button | _boolean_ | `false` |
| block | Whether to set display block | _boolean_ | `false` |
| round | Whether to be round button | _boolean_ | `false` |
| square | Whether to be square button | _boolean_ | `false` |
| disabled | Whether to disable button | _boolean_ | `false` |
| loading | Whether show loading status | _boolean_ | `false` |
| loading-text | Loading text | _string_ | - |
| loading-type | Loading type, can be set to `spinner` | _string_ | `circular` |
| loading-size | Loading icon size | _string_ | `20px` |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as using vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Triggered when click button and not disabled or loading | _event: Event_ |
| touchstart | Triggered when touch start | _event: TouchEvent_ |

### Slots

| Name              | Description         |
| ----------------- | ------------------- |
| default           | Default slot        |
| loading `v2.10.1` | Custom loading icon |
