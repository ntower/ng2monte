import { Ng2montePage } from './app.po';

describe('ng2monte App', function() {
  let page: Ng2montePage;

  beforeEach(() => {
    page = new Ng2montePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
