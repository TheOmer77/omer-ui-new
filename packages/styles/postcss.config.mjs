//@ts-check

import cssnano from 'cssnano';
import nested from 'postcss-nested';
import presetEnv from 'postcss-preset-env';

const config = {
  plugins: [nested(), presetEnv(), cssnano({ preset: 'default' })],
};

export default config;
