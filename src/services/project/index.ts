import { version as buildVersion } from '@biotope/build/package.json';

import { version as biolerplateVersion } from '../../../package.json';

// tslint:disable-next-line:variable-name
export const ProjectService = {
  getBoilerplateVersion(): string {
    return biolerplateVersion || '';
  },

  getBuildVersion(): string {
    return buildVersion || '';
  },
};
