// tslint:disable-next-line:no-import-side-effect
import 'whatwg-fetch';
import loadEntry from 'load-entry';

import { BioHeader } from 'components';
// tslint:disable-next-line:no-import-side-effect
import './global.style';

loadEntry(() => new BioHeader(ROOTID));
