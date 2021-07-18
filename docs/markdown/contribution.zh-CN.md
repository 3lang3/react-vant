# 开发指南

### 介绍

以下是关于提交反馈或代码的指南。在提交 issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

## 参与开发

### 本地开发

按照下面的步骤操作，即可在本地开发组件。

```bash
# 克隆仓库
git clone git@github.com:Hyattria/rokku.git

# 安装依赖
cd my-app && npm run bootstrap

# 进入开发模式，浏览器访问 http://localhost:8080
npm run start
```

### 目录结构

- 仓库的组件代码位于 src 下，每个组件一个文件夹
- docs 目录下是文档网站的代码，本地开发时可以在目录下运行 npm run start 开启文档网站

项目主要目录如下：

```
zhpfe-design
├─ build     # 构建
├─ docs      # 文档
├─ src       # 组件
├─ packages  # 子包
├─ test      # 单测
└─ typings     # 类型
```

### 添加新组件

添加新组件时，请按照下面的目录结构组织文件，并在 `vant.config.js` 中配置组件名称。

```
src
└─ button
   ├─ demo              # 示例代码
   ├─ __test__          # 单元测试
   ├─ index.js          # 组件入口
   ├─ style/index.less  # 组件样式
   ├─ README.md         # 中文文档
   └─ README.en-US.md   # 英文文档
```
