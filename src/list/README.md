# List 列表

### 介绍

瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

### 引入

```js
import { List } from '@rokku/design';
```

## 代码演示

### 基础用法

List 组件通过 `loading` 和 `finished` 两个变量控制加载状态，当组件滚动到底部时，会触发 `load` 事件并将 `loading` 设置成 `true`。此时可以发起异步操作并更新数据，数据更新完毕后，将 `loading` 设置成 `false` 即可。若数据已全部加载完毕，则直接将 `finished` 设置成 `true` 即可。

```jsx
<List loading="{loading}" finished="{finished}" onLoad="{onLoad}">
  {list.length ? list.map((item) => { return <Cell key="{item}" title="{item}" />; }) : null}
</List>
```

```js
const [list, setList] = useState([]);
const [loading, setLoading] = useState(false);
const [finished, setFinished] = useState(false);

const onLoad = () => {
  setLoading(true);

  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i += 1) {
      list.push(list.length + 1);
    }
    setList(list);

    // 加载状态结束
    setLoading(false);

    // 数据全部加载完成
    if (list.length >= 40) {
      setFinished(true);
    }
  }, 1000);
};
```

### 错误提示

若列表数据加载失败，将 `error` 设置成 `true` 即可显示错误提示，用户点击错误提示后会重新触发 load 事件。

```jsx
 <List
  loading={loading}
  error={error}
  errorText="请求失败，点击重新加载"
  onLoad={onLoadError}
>
  {errorList.length
    ? errorList.map((item) => {
        return <Cell key={item} title={item} />;
      })
    : null}
</List>
```

```js
const [errorList, setErrorList] = useState([]);
const [error, setError] = useState(false);

const onLoadError = () => {
  setLoading(true);

  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i += 1) {
      errorList.push(errorList.length + 1);
    }
    setErrorList(errorList);

    // 加载状态结束
    setLoading(false);
    if (errorList.length === 10) {
      setError(true);
    }
  }, 1000);
};
```

### 下拉刷新

List 组件可以与 [PullRefresh](#/zh-CN/pull-refresh) 组件结合使用，实现下拉刷新的效果。

```jsx
<PullRefresh refreshing={refreshing} onRefresh={onRefresh}>
  <List loading={loading} finished={finished} onLoad={onLoadRefresh}>
    {list.length
      ? list.map((item) => {
          return <Cell key={item} title={item} />;
        })
      : null}
  </List>
</PullRefresh>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 是否处于加载状态，加载过程中不触发`load`事件 | _boolean_ | `false` |
| finished | 是否已加载完成，加载完成后不再触发`load`事件 | _boolean_ | `false` |
| error | 是否加载失败，加载失败后点击错误提示可以重新<br>触发`load`事件，必须使用`sync`修饰符 | _boolean_ | `false` |
| offset | 滚动条与底部距离小于 offset 时触发`load`事件 | _number \| string_ | `300` |
| loadingText | 加载过程中的提示文案 | _string_ | `加载中...` |
| finishedText | 加载完成后的提示文案 | _string_ | - |
| errorText | 加载失败后的提示文案 | _string_ | - |
| immediateCheck | 是否在初始化时立即执行滚动位置检查 | _boolean_ | `true` |

### Events

| 事件名 | 说明                               | 回调参数 |
| ------ | ---------------------------------- | -------- |
| load   | 滚动条与底部距离小于 offset 时触发 | -        |

### 方法

通过 ref 可以获取到 List 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明                                                   | 参数 | 返回值 |
| ------ | ------------------------------------------------------ | ---- | ------ |
| check  | 检查当前的滚动位置，若已滚动至底部，则会触发 load 事件 | -    | -      |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                    | 默认值          | 描述 |
| ----------------------- | --------------- | ---- |
| @list-icon-margin-right | `5px`           | -    |
| @list-text-color        | `@gray-6`       | -    |
| @list-text-font-size    | `@font-size-md` | -    |
| @list-text-line-height  | `50px`          | -    |

## 常见问题

### List 的运行机制是什么？

List 会监听浏览器的滚动事件并计算列表的位置，当列表底部与可视区域的距离小于`offset`时，List 会触发一次 load 事件。

### 为什么 List 初始化后会立即触发 load 事件？

List 初始化后会触发一次 load 事件，用于加载第一屏的数据，这个特性可以通过`immediateCheck`属性关闭。

### 为什么会连续触发 load 事件？

如果一次请求加载的数据条数较少，导致列表内容无法铺满当前屏幕，List 会继续触发 load 事件，直到内容铺满屏幕或数据全部加载完成。因此你需要调整每次获取的数据条数，理想情况下每次请求获取的数据条数应能够填满一屏高度。

### loading 和 finished 分别是什么含义？

`List`有以下三种状态，理解这些状态有助于你正确地使用`List`组件：

- 非加载中，`loading`为`false`，此时会根据列表滚动位置判断是否触发`load`事件（列表内容不足一屏幕时，会直接触发）
- 加载中，`loading`为`true`，表示正在发送异步请求，此时不会触发`load`事件
- 加载完成，`finished`为`true`，此时不会触发`load`事件

在每次请求完毕后，需要手动将`loading`设置为`false`，表示加载结束

### 在 html、body 上设置 overflow 后一直触发加载？

如果在 html 和 body 标签上设置了`overflow-x: hidden`样式，会导致 List 一直触发加载。

```css
html,
body {
  overflow-x: hidden;
}
```

这个问题的原因是当元素设置了`overflow-x: hidden`样式时，该元素的`overflow-y`会被浏览器设置为`auto`，而不是默认值`visible`，导致 List 无法正确地判断滚动容器。解决方法是去除该样式，或者在 html 和 body 标签上添加`height: 100%`样式。
