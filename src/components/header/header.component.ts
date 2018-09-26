import { ProjectService } from 'services';
import * as style from './header.style';

interface BiotopeHeaderData {
  text: string;
}

export class BiotopeHeader {
  private rootId: string;
  private text: string;

  constructor(rootId: string) {
    this.rootId = rootId;
    this.text = '';
    this.render();
    this.created();
  }

  public created() {
    fetch('/resources/example.json')
      .then(response => response.ok && response.json() || { text: 'Oops…' })
      .then(({ text }: BiotopeHeaderData) => this.text = text)
      .then(this.render.bind(this))
      // tslint:disable-next-line:no-console
      .catch(console.error);
  }

  public render() {
    const element = document.getElementById(this.rootId);
    if (element) {
      element.innerHTML = `
        <div class="${style.host}">
          <h1 class="${style.header}">
            This is @biotope
          </h1>
          <p class="${style.paragraph}">
            v${ProjectService.getVersion()}${this.text ? ` says "${this.text}"` : ''}
          </p>
        </div>
      `;
    }
  }
}
