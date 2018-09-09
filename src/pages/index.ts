import loadEntry from 'load-entry';

import { BiotopeHeader } from 'components/header';
import { DomService } from 'services';
import * as style from './index.style';

document.head.appendChild(DomService.createStyleElement(style));

loadEntry(() => DomService.createApp(BiotopeHeader), { event: 'WebComponentsReady' });
