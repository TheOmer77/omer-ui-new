//@ts-check

import cssnano from 'cssnano';
import nested from 'postcss-nested';

const config = {
  plugins: [cssnano({ preset: 'default' }), nested()],
};

export default config;
