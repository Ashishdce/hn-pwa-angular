import { HnpwaPage } from './app.po';

describe('hnpwa App', () => {
  let page: HnpwaPage;

  beforeEach(() => {
    page = new HnpwaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
