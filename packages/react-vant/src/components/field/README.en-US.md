# Button

### Install

```js
import { Button } from 'react-vant';
```

## Usage

### Type

```html
<button type="primary">Primary</button>
<button type="success">Success</button>
<button type="default">Default</button>
<button type="danger">Danger</button>
<button type="warning">Warning</button>
```

### Plain

```html
<button plain type="primary">Primary</button> <button plain type="primary">Danger</button>
```

### Hairline

```html
<button plain hairline type="primary">Hairline</button>
<button plain hairline type="primary">Hairline</button>
```

### Disabled

```html
<button disabled type="primary">Diabled</button> <button disabled type="primary">Diabled</button>
```

### Loading

```html
<button loading type="primary" />
<button loading type="primary" loading-type="spinner" />
<button loading type="primary" loading-text="Loading..." />
```

### Shape

```html
<button square type="primary">Square</button> <button round type="primary">Round</button>
```

### Icon

```html
<button icon="plus" type="primary" />
<button icon="plus" type="primary">Button</button>
<button icon="https://img.yzcdn.cn/vant/user-active.png" type="primary">Button</button>
```

### Size

```html
<button type="primary" size="large">Large</button>
<button type="primary" size="normal">Normal</button>
<button type="primary" size="small">Small</button>
<button type="primary" size="mini">Mini</button>
```

### Block Element

```html
<button type="primary" block>Block Element</button>
```

### Route

```html
<button type="primary" url="/vant/mobile.html">URL</button>
<button type="primary" to="index">Vue Router</button>
```

### Custom Color

```html
<button color="#7232dd">Pure</button>
<button color="#7232dd" plain>Pure</button>
<button color="linear-gradient(to right, #ff6034, #ee0a24)">Gradient</button>
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

| Event      | Description                                             | Arguments           |
| ---------- | ------------------------------------------------------- | ------------------- |
| click      | Triggered when click button and not disabled or loading | _event: Event_      |
| touchstart | Triggered when touch start                              | _event: TouchEvent_ |

### Slots

| Name              | Description         |
| ----------------- | ------------------- |
| default           | Default slot        |
| loading `v2.10.1` | Custom loading icon |
