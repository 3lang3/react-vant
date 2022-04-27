# 开发指南

### 介绍

感谢你使用 React Vant。

以下是关于提交反馈或代码的指南。在提交 issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

## 参与开发

### 本地开发

按照下面的步骤操作，即可在本地开发组件。

```bash
# 克隆仓库
https://github.com/3lang3/react-vant.git

# 安装依赖
cd my-app && npm run bootstrap

# 进入开发模式，浏览器访问 http://localhost:8080
npm run start
# 创建新组件，根据提示输入组件信息
npm run create-component
```

### 目录结构

- 仓库的组件代码位于 src 下，每个组件一个文件夹
- docs 目录下是文档网站的代码，本地开发时可以在目录下运行 npm run start 开启文档网站

项目主要目录如下：

```
react-vant
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

## 提交 PR

### Pull Request 规范

如果你是第一次在 GitHub 上提 Pull Request ，可以阅读下面这两篇文章来学习：

- [如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)
- [第一次参与开源](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md)

#### 规范

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 PR 中请添加合适的描述，并关联相关的 Issue

### Pull Request 流程

1. fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码
2. 基于 fork 后仓库的 `main` 分支新建一个分支，比如 `feat-button_color`
3. 在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 `main` 分支
4. Pull Request 会在 Review 通过后被合并到主仓库
5. 等待 React Vant 发布版本

### 同步最新代码

提 Pull Request 前，请依照下面的流程同步主仓库的最新代码：

```bash
# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream https://github.com/3lang3/react-vant.git

# 拉取主仓库最新代码
git fetch upstream

# 合并主仓库代码
git merge upstream/main
```
