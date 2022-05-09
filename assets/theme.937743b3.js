import{j as u,a as F}from"./main.cc295cd4.js";const t=function({previewer:e=()=>null,api:i=()=>null}){const n=e;return u("div",{children:F("div",{children:[u("h1",{id:"\u5B9A\u5236\u4E3B\u9898","data-anchor":"\u5B9A\u5236\u4E3B\u9898",children:"\u5B9A\u5236\u4E3B\u9898"}),u("h3",{id:"\u5E9F\u5F03\u63D0\u793A","data-anchor":"\u5E9F\u5F03\u63D0\u793A",children:"\u5E9F\u5F03\u63D0\u793A"}),F("p",{children:["\u672C\u6587\u6863\u5DF2\u5E9F\u5F03\uFF0CReact Vant \u63D0\u4F9B\u4E86\u66F4\u65B9\u4FBF\u7684 ",u("a",{href:"#/zh-CN/config-provider",children:"ConfigProvider"})," \u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u8FDB\u884C\u4E3B\u9898\u914D\u7F6E\u3002\u57FA\u4E8E Less \u53D8\u91CF\u8FDB\u884C\u5B9A\u5236\u7684\u65B9\u5F0F",u("strong",{children:"\u5C06\u5728\u4E0B\u4E2A\u5927\u7248\u672C\u5E9F\u5F03"}),"\u3002"]}),u("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"react-vant \u63D0\u4F9B\u4E86\u4E00\u5957\u9ED8\u8BA4\u4E3B\u9898\uFF0CCSS \u547D\u540D\u91C7\u7528 BEM \u7684\u98CE\u683C\uFF0C\u65B9\u4FBF\u4F7F\u7528\u8005\u8986\u76D6\u6837\u5F0F\u3002\u5982\u679C\u4F60\u60F3\u5B8C\u5168\u66FF\u6362\u4E3B\u9898\u8272\u6216\u8005\u5176\u4ED6\u6837\u5F0F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u63D0\u4F9B\u7684\u65B9\u6CD5\u3002"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),F("p",{children:["react-vant \u4F7F\u7528\u4E86 ",u("a",{href:"http://lesscss.org/",children:"Less"})," \u5BF9\u6837\u5F0F\u8FDB\u884C\u9884\u5904\u7406\uFF0C\u5E76\u5185\u7F6E\u4E86\u4E00\u4E9B\u6837\u5F0F\u53D8\u91CF\uFF0C\u901A\u8FC7\u66FF\u6362\u6837\u5F0F\u53D8\u91CF\u5373\u53EF\u5B9A\u5236\u4F60\u81EA\u5DF1\u9700\u8981\u7684\u4E3B\u9898\u3002"]}),F("p",{children:["\u4E0B\u9762\u662F\u4E00\u4E9B\u57FA\u672C\u7684\u6837\u5F0F\u53D8\u91CF\uFF0C\u6240\u6709\u53EF\u7528\u7684\u989C\u8272\u53D8\u91CF\u8BF7\u53C2\u8003 ",u("a",{href:"https://github.com/youzan/vant/blob/dev/src/style/var.less",children:"\u914D\u7F6E\u6587\u4EF6"}),"\u3002"]}),u(n,{code:`// Component Colors
@text-color: #333333;
@border-color: #ebedf0;
@active-color: #f2f3f5;
@background-color: #f7f8fa;
@background-color-light: #fafafa;`,lang:"less"}),u("h2",{id:"\u5B9A\u5236\u65B9\u6CD5","data-anchor":"\u5B9A\u5236\u65B9\u6CD5",children:"\u5B9A\u5236\u65B9\u6CD5"}),u("h3",{id:"\u6B65\u9AA4\u4E00-\u5F15\u5165\u6837\u5F0F\u6E90\u6587\u4EF6","data-anchor":"\u6B65\u9AA4\u4E00-\u5F15\u5165\u6837\u5F0F\u6E90\u6587\u4EF6",children:"\u6B65\u9AA4\u4E00 \u5F15\u5165\u6837\u5F0F\u6E90\u6587\u4EF6"}),u("p",{children:"\u5B9A\u5236\u4E3B\u9898\u65F6\uFF0C\u9700\u8981\u5F15\u5165\u7EC4\u4EF6\u5BF9\u5E94\u7684 Less \u6837\u5F0F\u6587\u4EF6\uFF0C\u652F\u6301\u6309\u9700\u5F15\u5165\u548C\u624B\u52A8\u5F15\u5165\u4E24\u79CD\u65B9\u5F0F\u3002"}),u("h4",{id:"\u6309\u9700\u5F15\u5165\u6837\u5F0F\u63A8\u8350","data-anchor":"\u6309\u9700\u5F15\u5165\u6837\u5F0F\u63A8\u8350",children:"\u6309\u9700\u5F15\u5165\u6837\u5F0F\uFF08\u63A8\u8350\uFF09"}),u("p",{children:"\u5728 babel.config.js \u4E2D\u914D\u7F6E\u6309\u9700\u5F15\u5165\u6837\u5F0F\u6E90\u6587\u4EF6\uFF0C\u6CE8\u610F babel6 \u4E0D\u652F\u6301\u6309\u9700\u5F15\u5165\u6837\u5F0F\uFF0C\u8BF7\u624B\u52A8\u5F15\u5165\u6837\u5F0F\u3002"}),u(n,{code:`module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'react-vant',
        libraryDirectory: 'es',
        // \u6307\u5B9A\u6837\u5F0F\u8DEF\u5F84
        style: (name) => \`\${name}/style/less\`,
      },
      'react-vant',
    ],
  ],
};`,lang:"js"}),u("h3",{id:"\u6B65\u9AA4\u4E8C-\u4FEE\u6539\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6B65\u9AA4\u4E8C-\u4FEE\u6539\u6837\u5F0F\u53D8\u91CF",children:"\u6B65\u9AA4\u4E8C \u4FEE\u6539\u6837\u5F0F\u53D8\u91CF"}),F("p",{children:["\u4F7F\u7528 Less \u63D0\u4F9B\u7684 ",u("a",{href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables",children:"modifyVars"})," \u5373\u53EF\u5BF9\u53D8\u91CF\u8FDB\u884C\u4FEE\u6539\uFF0C\u4E0B\u9762\u662F\u53C2\u8003\u7684 webpack \u914D\u7F6E\u3002"]}),u(n,{code:`// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\\.less$/,
      use: [
        // ...\u5176\u4ED6 loader \u914D\u7F6E
        {
          loader: 'less-loader',
          options: {
            // \u82E5\u4F7F\u7528 less-loader@5\uFF0C\u8BF7\u79FB\u9664 lessOptions \u8FD9\u4E00\u7EA7\uFF0C\u76F4\u63A5\u914D\u7F6E\u9009\u9879\u3002
            lessOptions: {
              modifyVars: {
                // \u76F4\u63A5\u8986\u76D6\u53D8\u91CF
                'text-color': '#111',
                'border-color': '#eee',
                // \u6216\u8005\u53EF\u4EE5\u901A\u8FC7 less \u6587\u4EF6\u8986\u76D6\uFF08\u6587\u4EF6\u8DEF\u5F84\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\uFF09
                hack: \`true; @import "your-less-file-path.less";\`,
              },
            },
          },
        },
      ],
    },
  ],
};`,lang:"js"})]})})},r=[],d=void 0,E=[{depth:1,text:"\u5B9A\u5236\u4E3B\u9898",id:"\u5B9A\u5236\u4E3B\u9898"},{depth:3,text:"\u5E9F\u5F03\u63D0\u793A",id:"\u5E9F\u5F03\u63D0\u793A"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5B9A\u5236\u65B9\u6CD5",id:"\u5B9A\u5236\u65B9\u6CD5"},{depth:3,text:"\u6B65\u9AA4\u4E00 \u5F15\u5165\u6837\u5F0F\u6E90\u6587\u4EF6",id:"\u6B65\u9AA4\u4E00-\u5F15\u5165\u6837\u5F0F\u6E90\u6587\u4EF6"},{depth:4,text:"\u6309\u9700\u5F15\u5165\u6837\u5F0F\uFF08\u63A8\u8350\uFF09",id:"\u6309\u9700\u5F15\u5165\u6837\u5F0F\u63A8\u8350"},{depth:3,text:"\u6B65\u9AA4\u4E8C \u4FEE\u6539\u6837\u5F0F\u53D8\u91CF",id:"\u6B65\u9AA4\u4E8C-\u4FEE\u6539\u6837\u5F0F\u53D8\u91CF"}],s="/docs/guide/theme.md",a="\u5B9A\u5236\u4E3B\u9898",o="1652064015000";var c=e=>e.children({MdContent:t,demos:r,frontmatter:d,slugs:E,filePath:s,title:a,updatedTime:o});export{t as MdContent,c as default,r as demos,s as filePath,d as frontmatter,E as slugs,a as title,o as updatedTime};
