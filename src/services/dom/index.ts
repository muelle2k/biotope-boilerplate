
type HTMLElementContent = string | { toString: () => string };

// tslint:disable-next-line:variable-name
export const DomService = {
  createElement: (tagName: string, content: HTMLElementContent = '') => {
    const element = document.createElement(tagName);
    element.innerHTML = typeof content === 'string' ? content : content.toString();
    return element;
  },

  createStyleElement: (style: HTMLElementContent) => DomService.createElement('style', style),

  // tslint:disable-next-line:no-any
  createApp(component: any, rootId: string = ROOTID): void {
    component.register();
    (document.getElementById(rootId) as HTMLElement).innerHTML = `<${component.componentName} />`;
  },
};
