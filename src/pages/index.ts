// tslint:disable-next-line:no-import-side-effect
import 'whatwg-fetch';
// tslint:disable-next-line:no-import-side-effect
import '@babel/polyfill';
import loadEntry from 'load-entry';

import { BiotopeHeader } from 'components/header';
// tslint:disable-next-line:no-import-side-effect
import './global.style';

loadEntry(() => new BiotopeHeader(ROOTID));
