import merge from 'webpack-merge';
import { get } from 'lodash';
import { WebpackConfig } from '../common/types';
import { getRokkuConfig, getWebpackConfig } from '../common';
import { getSiteDevBaseConfig } from './webpack.site.dev';
import { DOC_DIST_DIR } from '../common/constant';

const rokkuConfig = getRokkuConfig();
const outputDir = get(rokkuConfig, 'build.site.outputDir', DOC_DIST_DIR);
const publicPath = get(rokkuConfig, 'build.site.publicPath', '/');

export function getSitePrdConfig(): WebpackConfig {
  return getWebpackConfig(
    merge(getSiteDevBaseConfig(), {
      mode: 'production',
      stats: 'none',
      performance: {
        maxAssetSize: 5 * 1024 * 1024,
        maxEntrypointSize: 5 * 1024 * 1024,
      },
      output: {
        publicPath,
        path: outputDir,
        filename: '[name].[hash:8].js',
        chunkFilename: 'async_[name].[chunkhash:8].js',
      },
    })
  );
}
