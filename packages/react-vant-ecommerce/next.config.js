/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['react-vant']);

module.exports = withPlugins([withAntdLess, withImages, withTM], {
  images: {
    domains: ['img.yzcdn.cn'], // 配置 CDN 域名
  },
  reactStrictMode: true,
});
