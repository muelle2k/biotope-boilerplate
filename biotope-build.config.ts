import { Options } from '@biotope/build';

const getVariables = (environment: string) => ({
  [environment]: { ENVIRONMENT: environment },
});

const options: Options = {
  webpack: {
    alias: {
      '^components$': './src/components',
      '^services$': './src/services',
      '^theme$': './src/theme/index.scss',
    },
    compileExclusions: ['react'],
    disablePlugins: ['mini-css-extract-plugin'],
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    externalFiles: [
      {
        from: './src/resources',
        to: 'resources',
        ignore: ['*.md'],
      },
      ...['', 'bundles/'].map(folder => ({
        from: `./node_modules/@webcomponents/webcomponentsjs/${folder}*.js`,
        to: `polyfills/${folder}`,
        flatten: true,
      })),
    ],
    entryPoints: {
      index: 'index.ts',
      javascript: 'javascript.js',
      react: 'react/index.tsx',
    },
  },
  runtime: {
    ENVIRONMENT: 'local',
    ROOTID: 'root-element',

    ...getVariables('development'),
    ...getVariables('production'),
  },
};

export = options;
