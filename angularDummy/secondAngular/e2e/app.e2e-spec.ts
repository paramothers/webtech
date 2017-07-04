import { SecondAngularPage } from './app.po';

describe('second-angular App', () => {
  let page: SecondAngularPage;

  beforeEach(() => {
    page = new SecondAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
