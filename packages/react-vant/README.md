English | [简体中文](https://github.com/3lang3/react-vant/blob/main/packages/react-vant/README.zh-CN.md)

<p align="center">
    <img alt="logo" src="https://user-images.githubusercontent.com/7098719/132332142-f84a2bb9-879d-47e6-8e99-638d8e4b4740.png" width="240" style="margin-bottom: 10px;">
</p>

<h1 align="center">React Vant</h1>

<p align="center">📱 A mobile component library based on the <strong>React</strong> framework according to <a href="https://github.com/youzan/vant">Vant</a>.</p>

<p align="center">
  <a href="https://npmjs.org/package/react-vant" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/npm/v/react-vant/latest?style=flat-square" alt="npm version" />
  </a>
  <a href="https://npmjs.org/package/react-vant" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/npm/dm/react-vant.svg?style=flat-square" alt="npm download" />
  </a>
  <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg?style=flat-square" alt="renovate" />
  <a href="https://github.com/3lang3/react-vant/discussions" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/badge/discussions-on%20github-blue?style=flat-square" alt="discussions" />
  </a>
  <a href="https://github.com/3lang3/react-vant/discussions" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/npm/l/react-vant?style=flat-square" alt="license" />
  </a>
</p>

<p align="center">
  🔥 <a href="https://lang3.gitee.io/react-vant/">Documentation (Domestic)</a>
  &nbsp;
  🌈 <a href="https://3lang3.github.io/react-vant/">Documentation（GitHub）</a>
</p>

## ✨ Feature

- 🚀 The average component size is less than 1KB（min+gzip）.
- 💎 60+ high-quality components, covering mainstream mobile scenes.
- 💪 Written in TypeScript, providing a complete type definition.
- 📝 Provide complete documentation and component examples.
- 🎨 Support theme customization, built-in 700+ theme designers.
- 😎 Support on-demand import and Tree Shaking.
- ⚡️ Support [Vite](https://github.com/3lang3/react-vant-template/tree/main/template/vite) and Parcel@2.
- 🌵 Modern browsers
- 🌝 Support [SSR](https://github.com/3lang3/react-vant-template/tree/main/template/nextjs).

## 🖥 Environment Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br> Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/a94987f29719142668cdf960b3f624ce1a3c6aa8/src/safari-ios/safari-ios.svg" alt="Safari for iOS" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| --- | --- | --- | --- |

Support modern browsers and Chrome >= 51, iOS >= 10.0.

## 📱 Preview

Scan the QR code on your mobile phone to access the demo:

<img src="https://user-images.githubusercontent.com/7098719/132332336-20429085-18b7-4639-8022-a5e7098610ad.png" width="200" />

<details>
  <summary>View some screenshots.</summary>
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/c6034f01-b534-4e01-9b43-d28259ea77ea.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/b8c56952-943b-4e8e-b4cb-274d5ac62f7b.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/20a5ea40-6470-4156-b244-a4cbd8cef9d2.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/9cd23768-e2d5-45c7-b80b-be6367c157b9.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/87f8d07c-bdeb-46de-b64a-eaf78f062c6a.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/e8cf6bdd-96b3-4d89-84af-606ab443a6fd.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/02abb81a-4c80-4468-815f-b11076b16524.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/ecf39bd8-f933-4f62-89b2-574845696bc0.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/6e2800b6-1675-467d-be48-f5e876c19e0f.png" width="200" />
</details>

## 📦 Install

Recommended **pin** version:

```bash
# npm
npm i react-vant -S -E

# pnpm
pnpm i react-vant -S -E
```

## 🚀 Quick start

The following are some code examples of react-vant:

#### Code Snippet:

```jsx
import ReactDOM from 'react-dom';
import { Button } from 'react-vant';
import 'react-vant/lib/index.css';

function App() {
  return <Button>Default Button</Button>;
}

ReactDOM.render(<App />, mountNode);
```

#### Code Examples:

- [Create React App](https://github.com/3lang3/react-vant-template/tree/main/template/create-react-app)
- [Umi](https://github.com/3lang3/react-vant-template/tree/main/template/umi)
- [Next.js](https://github.com/3lang3/react-vant-template/tree/main/template/nextjs)
- [Vite](https://github.com/3lang3/react-vant-template/tree/main/template/vite)

For more information, please refer to [QuickStart](https://3lang3.github.io/react-vant/#/zh-CN/).

## 🤝 Contributing

Read our contributing guide and let's build a better react-vant together.

We welcome all contributions. Please read our [CONTRIBUTING.md](https://3lang3.github.io/react-vant/#/zh-CN/contribution) first. You can submit any ideas as pull requests or as GitHub issues. :)

## 💭 Discuss

<img src="https://user-images.githubusercontent.com/7098719/143408499-6e838945-9fc3-4b4d-bf8f-f262f4937c33.jpg" width="200"  />

## 👥 Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/0x219"><img src="https://avatars.githubusercontent.com/u/50414099?v=4?s=100" width="100px;" alt=""/><br /><sub><b>0x219</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/commits?author=0x219" title="Code">💻</a> <a href="https://github.com/3lang3/react-vant/commits?author=0x219" title="Documentation">📖</a> <a href="#maintenance-0x219" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/TinsFox"><img src="https://avatars.githubusercontent.com/u/33956589?v=4?s=100" width="100px;" alt=""/><br /><sub><b>TinsFox</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/commits?author=TinsFox" title="Code">💻</a> <a href="https://github.com/3lang3/react-vant/commits?author=TinsFox" title="Documentation">📖</a> <a href="#maintenance-TinsFox" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/sethyuan"><img src="https://avatars.githubusercontent.com/u/3410293?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Seth Yuan</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/commits?author=sethyuan" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/union-mall"><img src="https://avatars.githubusercontent.com/u/82643376?v=4?s=100" width="100px;" alt=""/><br /><sub><b>union-mall</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/commits?author=union-mall" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/tgioer"><img src="https://avatars.githubusercontent.com/u/18252854?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tang Zhi</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/commits?author=tgioer" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/yuegongzi"><img src="https://avatars.githubusercontent.com/u/13476544?v=4?s=100" width="100px;" alt=""/><br /><sub><b>yuegongzi</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/commits?author=yuegongzi" title="Code">💻</a> <a href="https://github.com/3lang3/react-vant/commits?author=yuegongzi" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/ovensi"><img src="https://avatars.githubusercontent.com/u/24306930?v=4?s=100" width="100px;" alt=""/><br /><sub><b>周神</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/commits?author=ovensi" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/BiscuitCoder"><img src="https://avatars.githubusercontent.com/u/17230944?v=4?s=100" width="100px;" alt=""/><br /><sub><b>BiscuitCoder</b></sub></a><br /><a href="#design-BiscuitCoder" title="Design">🎨</a></td>
    <td align="center"><a href="https://renovate.whitesourcesoftware.com/"><img src="https://avatars.githubusercontent.com/u/25180681?v=4?s=100" width="100px;" alt=""/><br /><sub><b>WhiteSource Renovate</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/commits?author=renovate-bot" title="Documentation">📖</a> <a href="#security-renovate-bot" title="Security">🛡️</a> <a href="#tool-renovate-bot" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/apps/allcontributors"><img src="https://avatars.githubusercontent.com/in/23186?v=4?s=100" width="100px;" alt=""/><br /><sub><b>allcontributors[bot]</b></sub></a><br /><a href="#tool-allcontributors[bot]" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/apps/dependabot"><img src="https://avatars.githubusercontent.com/in/29110?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dependabot[bot]</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/commits?author=dependabot[bot]" title="Documentation">📖</a> <a href="#security-dependabot[bot]" title="Security">🛡️</a></td>
    <td align="center"><a href="https://github.com/AdonLee"><img src="https://avatars.githubusercontent.com/u/5396468?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cedong.Lee</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/issues?q=author%3AAdonLee" title="Bug reports">🐛</a> <a href="#ideas-AdonLee" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/hongmaoxiao/myblog/issues"><img src="https://avatars.githubusercontent.com/u/3943494?v=4?s=100" width="100px;" alt=""/><br /><sub><b>xiaomao Feng</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/issues?q=author%3Ahongmaoxiao" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/xiaojingyuaner"><img src="https://avatars.githubusercontent.com/u/24470322?v=4?s=100" width="100px;" alt=""/><br /><sub><b>xiaojingyuaner</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/issues?q=author%3Axiaojingyuaner" title="Bug reports">🐛</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.keep-wan.me"><img src="https://avatars.githubusercontent.com/u/19300142?v=4?s=100" width="100px;" alt=""/><br /><sub><b>keep_wan</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/issues?q=author%3Awhevether" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://blog.csdn.net/weixin_42755677"><img src="https://avatars.githubusercontent.com/u/42933010?v=4?s=100" width="100px;" alt=""/><br /><sub><b>zhangYin</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/issues?q=author%3Amytheart" title="Bug reports">🐛</a> <a href="#ideas-mytheart" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://www.itworker.cn"><img src="https://avatars.githubusercontent.com/u/12168991?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yann</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/issues?q=author%3Afeifanshijie" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/feifaneric"><img src="https://avatars.githubusercontent.com/u/52685056?v=4?s=100" width="100px;" alt=""/><br /><sub><b>feifaneric</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/issues?q=author%3Afeifaneric" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/FJHou"><img src="https://avatars.githubusercontent.com/u/22517598?v=4?s=100" width="100px;" alt=""/><br /><sub><b>FJHou</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/issues?q=author%3AFJHou" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://wangbaoqi.gitbook.io/front/"><img src="https://avatars.githubusercontent.com/u/11024545?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nate Wang</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/issues?q=author%3AWangbaoqi" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/Wal1e"><img src="https://avatars.githubusercontent.com/u/20591468?v=4?s=100" width="100px;" alt=""/><br /><sub><b>rook1e</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/issues?q=author%3AWal1e" title="Bug reports">🐛</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/chinieer"><img src="https://avatars.githubusercontent.com/u/5187043?v=4?s=100" width="100px;" alt=""/><br /><sub><b>chinieer</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/commits?author=chinieer" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/GangYHu"><img src="https://avatars.githubusercontent.com/u/26001209?v=4?s=100" width="100px;" alt=""/><br /><sub><b>GangYHu</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/issues?q=author%3AGangYHu" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/Jungzl"><img src="https://avatars.githubusercontent.com/u/35426360?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jungzl</b></sub></a><br /><a href="https://github.com/3lang3/react-vant/commits?author=Jungzl" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## 🙏 Thanks

[Vant](https://github.com/youzan/vant) - Thanks to the Vant team for years of continuous maintenance, allowing me to stand on the shoulders of giants.

[Zan Design](https://design.youzan.com/) - Thanks for the careful production of YouZan Design Experience Center.

## 📜 License

[MIT](./LICENSE) ⓒ 3lang3
