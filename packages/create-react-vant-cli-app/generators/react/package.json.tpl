{
  "name": "<%= name %>",
  "version": "1.0.0",
  "description": "",
  "main": "lib/<%= name %>.js",
  "style": "lib/index.css",
  "files": [
    "lib",
    "es"
  ],
  "scripts": {
    "start": "react-vant-cli dev",
    "create-component": "react-vant-cli create-component",
    "postcreate-component":"yarn prettier",
    "prettier":"npx prettier --write vant.config.js src/index.ts",
    "build": "react-vant-cli build",
    "release": "react-vant-cli release --tag dev",
    "build:site": "react-vant-cli build-site",
    "release:site": "npm run build:site && gh-pages -d site",
    "prepack": "yarn build"
  },
  "author": "",
  "license": "MIT",
  "peerDependencies": {
    "react": ">=16.14.0",
    "react-dom": ">=16.14.0"
  },
  "devDependencies": {
    "@react-vant/cli": "^1.1.12",
    "@types/react": "^16.9.55",
    "@types/react-dom": "^16.9.9",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "lint-staged": {
     "*.md": "prettier --write",
     "*.{ts,tsx,js,vue,less,scss}": "prettier --write",
     "*.{ts,tsx,js,vue}": "eslint --fix",
     "*.{vue,css,less,scss}": "stylelint --fix"
   },
  "browserslist": [
    "Android >= 4.0",
    "iOS >= 8"
  ]
}
