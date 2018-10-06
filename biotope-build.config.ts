import { Options } from '@biotope/build';

const options: Options = {
  webpack: {
    alias: {
      '^components$': './src/components/index.ts',
      '^services$': './src/services/index.ts',
      '^theme$': './src/theme/index.scss',
    },
  },
  runtime: {
    ROOTID: 'root-element',
  },
};

export = options;
