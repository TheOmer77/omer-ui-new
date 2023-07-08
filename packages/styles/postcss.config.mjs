//@ts-check

import cssnano from 'cssnano';
import hoverMedia from 'postcss-hover-media-feature';
import nested from 'postcss-nested';
import presetEnv from 'postcss-preset-env';

const config = {
  plugins: [
    nested(),
    hoverMedia(),
    presetEnv(),
    cssnano({ preset: 'default' }),
  ],
};

export default config;
