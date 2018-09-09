import { Options } from '@biotope/build/src/webpack/settings/types';

const options: Options = {
  webpack: {
    alias: {
      '^theme$': './src/theme/index.scss',
    },
    disablePlugins: ['mini-css-extract-plugin', 'prerender-spa-plugin'],
    externalFiles: [
      './src/resources/',
      ...['', 'bundles/'].map(folder => ({
        from: `./node_modules/@webcomponents/webcomponentsjs/${folder}*.js`,
        to: `polyfills/${folder}`,
        flatten: true,
      })),
    ],
  },
  runtime: {
    ROOTID: 'root-element',
  },
};

export = options;
