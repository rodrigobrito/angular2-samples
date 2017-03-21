import { ModularPage } from './app.po';

describe('modular App', () => {
  let page: ModularPage;

  beforeEach(() => {
    page = new ModularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
