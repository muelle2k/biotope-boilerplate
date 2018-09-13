import { Options } from '@biotope/build';

const options: Options = {
  webpack: {
    alias: {
      '^theme$': './src/theme/index.scss',
    },
  },
  runtime: {
    ROOTID: 'root-element',
  },
};

export = options;
