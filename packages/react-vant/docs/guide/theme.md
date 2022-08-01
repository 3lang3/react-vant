# 🎨 主题定制

在组件文档的 "样式变量" 表格中，你可以查阅到每个组件暴露了都哪些[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)。

以 `Button` 组件为例，我们可以在它的文档上找到类似于下面这样的表格：

| 变量名称                             | 默认值                    | 描述 |
| ------------------------------------ | ------------------------- | ---- |
| --rv-button-primary-border-color     | _var(--rv-primary-color)_ | -    |
| --rv-button-primary-background-color | _var(--rv-primary-color)_ | -    |

接下来，我们需要设置 CSS 变量的值，有两种方法：

#### 方法一：使用 ConfigProvider

`ConfigProvider` 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 `ConfigProvider` 组件，并通过 `themeVars` 属性来配置一些主题变量。

```tsx | pure
const themeVars = {
  buttonPrimaryBorderColor: '#951fff',
  buttonPrimaryBackgroundColor: '#951fff',
};
<ConfigProvider themeVars={themeVars}>
  <Button type="primary">
    提交
  </Button>
</ConfigProvider>
```

#### 方法二：在 CSS 文件中设置

```css
.my-button {
  --rv-button-primary-background-color: red;
}
```

#### 方法三：通过父级 style, className 属性设置

直接通过组件父级的 `style` `className` 属性，简单粗暴，适合小范围的调整：

```jsx | pure
<div style={{
  '--rv-button-primary-background-color': 'red'
}}>
  <Button/>
</div>
```

#### 方法四：通过全局变量进行设置

假如你需要对整个项目中所有的 `Button` 都进行样式的调整，你可以通过"全局 CSS 变量" 进行统一的设置：

```css
:root:root {
  --rv-button-primary-background-color: red;
}
```

这样页面上全部的 Button 都会受到调整。

当然，你也可以"局部性"地进行调整，只需要把对应的 CSS 变量添加到对应的父级节点上。
