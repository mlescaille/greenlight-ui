import { GreenlightUiPage } from './app.po';

describe('greenlight-ui App', () => {
  let page: GreenlightUiPage;

  beforeEach(() => {
    page = new GreenlightUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
