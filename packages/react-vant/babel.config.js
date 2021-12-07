module.exports = {
  presets: [
    [
      '@react-vant/cli/preset.cjs',
      {
        loose: process.env.BUILD_TARGET === 'package',
      },
    ],
  ],
};
