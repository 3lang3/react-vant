/* eslint-disable class-methods-use-this */
import releaseIt from 'release-it';
import { build } from '../commands/build';

class RokkuCliReleasePlugin extends releaseIt.Plugin {
  async beforeRelease() {
    // log an empty line
    console.log('');

    await build();
  }
}

module.exports = RokkuCliReleasePlugin;
