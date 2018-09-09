import Element from '@biotope/element';

import { ProjectService } from 'services';
import * as style from './header.style';

interface BiotopeHeaderState {
  text: string;
}

export class BiotopeHeader extends Element<{}, BiotopeHeaderState> {
  public static componentName = 'bio-header';

  constructor() {
    super();
    this.setState({ text: '' });
  }

  public created() {
    fetch('/assets/example.json')
      .then(response => response.ok && response.json() || { text: 'error' })
      .then(({ text }: BiotopeHeaderState) => this.setState({ text }))
      // tslint:disable-next-line:no-console
      .catch(console.error);
  }

  public render() {
    const { text } = this.state;
    return this.html`
      <h1 class="${style.locals.header}">
        This is @biotope
      </h1>
      <p class="${style.locals.paragraph}">
        v${ProjectService.getVersion()}${text ? ` says "${text}"` : ''}
      </p>
      <style>
        ${style.toString()}
      </style>
    `;
  }
}
