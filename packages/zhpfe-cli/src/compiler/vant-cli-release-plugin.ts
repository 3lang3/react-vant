/* eslint-disable class-methods-use-this */
import releaseIt from 'release-it';
import { build } from '../commands/build';

class VantCliReleasePlugin extends releaseIt.Plugin {
  async beforeRelease() {
    // log an empty line
    console.log('');

    await build();
  }
}

module.exports = VantCliReleasePlugin;
