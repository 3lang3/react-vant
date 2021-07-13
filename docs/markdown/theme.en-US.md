# Custom Theme

### Intro

Zhpfe provides a set of default themes, if you want to custom the theme color or other styles, you can use the following methods:

### Less variables

Zhpfe use [Less](http://lesscss.org/) as css preprocessor，you can modify less variables to custom theme.

There are some basic variables below, all available variables could be found in [var.less](https://github.com/youzan/vant/blob/dev/src/style/var.less)。

```less
// Component Colors
@text-color: #333333;
@border-color: #ebedf0;
@active-color: #f2f3f5;
@background-color: #f7f8fa;
@background-color-light: #fafafa;
```

## How to custom theme

### Step 1: import less file

First you should import the less source file to your project. you can use babel-plugin-import to automatically import or just manually import less file.

#### Automatically import style

Configure babel plugin in babel.config.js, if you are using babel6, please manually import less file.

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'rokku',
        libraryDirectory: 'es',
        // specify less file path
        style: (name) => `${name}/style/less`,
      },
      'rokku',
    ],
  ],
};
```
### Step 2: modify less variables

Use [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) provided by less.js to modify less variables，webpack config for reference:

```js
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        // ...other loaders
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                // overide with less vars
                'text-color': '#111',
                'border-color': '#eee'
                // or override with less file
                'hack': `true; @import "your-less-file-path.less";`
              },
            }
          },
        },
      ],
    },
  ],
};
```
