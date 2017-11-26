import { ArchilearningPage } from './app.po';

describe('archilearning App', () => {
  let page: ArchilearningPage;

  beforeEach(() => {
    page = new ArchilearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
