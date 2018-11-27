// tslint:disable-next-line:no-import-side-effect
import '../polyfills';
import loadEntry from 'load-entry';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BioHeader } from 'components';
// tslint:disable-next-line:no-import-side-effect
import '../global.style';
// tslint:disable-next-line:no-import-side-effect
import './index.style';

loadEntry(() => {
  BioHeader.register();
  ReactDOM.render(
    <bio-header />,
    document.getElementById(ROOTID),
  );
});
