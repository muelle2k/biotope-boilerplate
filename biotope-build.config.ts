import { Options } from '@biotope/build';

const options: Options = {
  webpack: {
    alias: {
      '^components': './src/components',
      '^services$': './src/services/index.js',
      '^theme$': './src/theme/index.scss',
    },
  },
  runtime: {
    ROOTID: 'root-element',
  },
};

export = options;
