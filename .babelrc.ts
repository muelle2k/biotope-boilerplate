import * as babelrc from '@biotope/build/.babelrc';
import * as mergeDeep from 'merge-deep';

export = mergeDeep(babelrc, {
  presets: [
    '@babel/react',
  ],
});
