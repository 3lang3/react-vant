import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

export type WebpackConfig = Webpack.Configuration & {
  devServer?: WebpackDevServer.Configuration;
};
