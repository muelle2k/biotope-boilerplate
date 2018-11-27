import './polyfills';
import loadEntry from 'load-entry';

import { BioHeader } from 'components';
import './global.style';

loadEntry(() => {
  BioHeader.register();
  document.getElementById(ROOTID).innerHTML = `<${BioHeader.componentName} />`;
}, { event: 'WebComponentsReady' });
