import { RbkSitePage } from './app.po';

describe('rbk-site App', () => {
  let page: RbkSitePage;

  beforeEach(() => {
    page = new RbkSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
