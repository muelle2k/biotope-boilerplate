import Component from '@biotope/element';

import { ProjectService } from 'services';
import * as style from './bio-header.style';

interface BioHeaderState {
  text: string;
}

export class BioHeader extends Component<object, BioHeaderState> {
  public static componentName = 'bio-header';

  constructor() {
    super();
    this.setState({ text: '' });
  }

  public created() {
    fetch('/resources/example.json')
      .then(response => response.ok && response.json() || { text: 'Oops…' })
      .then(({ text }: BioHeaderState) => this.setState({ text }))
      // tslint:disable-next-line:no-console
      .catch(console.error);
  }

  public render() {
    const { text } = this.state;
    return this.html`
      <h1 class="${style.header}">
        This is @biotope
      </h1>
      <p class="${style.paragraph}">
        @biotope/boilerplate v${ProjectService.getBoilerplateVersion()} and
        @biotope/build v${ProjectService.getBuildVersion()} say:
      </p>
      <p class="${style.paragraph}">
        ${text}
      </p>
      <style>
        ${style.toString()}
      </style>
    `;
  }
}
