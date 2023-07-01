import { defineConfig } from 'tsup';
import { TsconfigPathsPlugin } from '@esbuild-plugins/tsconfig-paths';

const config = defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  esbuildPlugins: [TsconfigPathsPlugin({})],
  external: ['react'],
  format: ['cjs', 'esm'],
  minify: true,
  sourcemap: 'inline',
  splitting: false,
  treeshake: true,
});

export default config;
