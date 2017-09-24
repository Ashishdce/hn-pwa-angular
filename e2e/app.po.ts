import { browser, by, element } from 'protractor';

export class HnpwaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.scss('app-root h1')).getText();
  }
}
