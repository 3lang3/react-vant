import{j as u,a as n}from"./main.0cdb74b2.js";const o=function({previewer:e=()=>null,api:p=()=>null}){const t=e;return u("div",{children:n("div",{children:[u("h1",{id:"\u6D4F\u89C8\u5668\u9002\u914D","data-anchor":"\u6D4F\u89C8\u5668\u9002\u914D",children:"\u6D4F\u89C8\u5668\u9002\u914D"}),n("p",{children:[u("code",{children:"react-vant"})," \u9ED8\u8BA4\u4F7F\u7528 ",u("code",{children:"px"})," \u4F5C\u4E3A\u6837\u5F0F\u5355\u4F4D\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528 ",u("code",{children:"viewport"})," \u5355\u4F4D (vw, vh, vmin, vmax)\uFF0C\u63A8\u8350\u4F7F\u7528 ",u("a",{href:"https://github.com/evrone/postcss-px-to-viewport",children:"postcss-px-to-viewport"})," \u8FDB\u884C\u8F6C\u6362\u3002"]}),u("p",{children:"\u4E0B\u9762\u63D0\u4F9B\u4E86\u4E00\u4EFD\u57FA\u672C\u7684 PostCSS \u793A\u4F8B\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5728\u6B64\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u6839\u636E\u9879\u76EE\u9700\u6C42\u8FDB\u884C\u4FEE\u6539\u3002"}),u(t,{code:`// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportUnit: "vw",
      fontViewportUnit: "vw",
    },
  },
};`,lang:"js"}),n("p",{children:["\u7531\u4E8E ",u("code",{children:"react-vant"})," \u662F\u6309\u7167 ",u("code",{children:"375px"})," \u6765\u5F00\u53D1\u7684\uFF0C \u5982\u679C\u4F60\u7684\u8BBE\u8BA1\u7A3F\u662F ",u("code",{children:"750px"})," \u7684\u8BDD\uFF0C\u5219\u9700\u8981\u8C03\u6574\u914D\u7F6E\uFF08\u5176\u4ED6\u5C3A\u5BF8\u540C\u7406\uFF09"]}),u(t,{code:`// postcss.config.js
const px2viewport = require('postcss-px-to-viewport');

module.exports = () => {
  return {
    plugins: [
      px2viewport({
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        viewportWidth: 375,
        exclude: [/^(?!.*node_modules\\/react-vant)/]
      }),
      px2viewport({
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        viewportWidth: 750,
        exclude: [/node_modules\\/react-vant/i]
      })
    ]
  }
}`,lang:"js"}),u("ul",{children:u("li",{children:u("strong",{children:u("a",{href:"https://github.com/3lang3/react-vant-template/blob/main/next/vite/postcss.config.js",children:"postcss config demo"})})})}),u("blockquote",{children:n("p",{children:["Tips: \u5728\u914D\u7F6E postcss-loader \u65F6\uFF0C\u5E94\u907F\u514D ignore ",u("code",{children:"node_modules"})," \u76EE\u5F55\uFF0C\u5426\u5219\u5C06\u5BFC\u81F4 ",u("code",{children:"react-vant"})," \u6837\u5F0F\u65E0\u6CD5\u88AB\u7F16\u8BD1\u3002"]})})]})})},i=[],r=void 0,c=[{depth:1,text:"\u6D4F\u89C8\u5668\u9002\u914D",id:"\u6D4F\u89C8\u5668\u9002\u914D"}],d="/docs/guide/hd.md",s="\u6D4F\u89C8\u5668\u9002\u914D",F="1683550562000";var h=e=>e.children({MdContent:o,demos:i,frontmatter:r,slugs:c,filePath:d,title:s,updatedTime:F});export{o as MdContent,h as default,i as demos,d as filePath,r as frontmatter,c as slugs,s as title,F as updatedTime};
