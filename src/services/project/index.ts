import { version } from '../../../package.json';

// tslint:disable-next-line:variable-name
export const ProjectService = {
  getVersion(): string {
    return version || '';
  },
};
