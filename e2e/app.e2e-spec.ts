import { FontAwesomePage } from './app.po';

describe('font-awesome App', () => {
  let page: FontAwesomePage;

  beforeEach(() => {
    page = new FontAwesomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
