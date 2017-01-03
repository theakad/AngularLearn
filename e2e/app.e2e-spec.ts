import { AngularLearnPage } from './app.po';

describe('angular-learn App', function() {
  let page: AngularLearnPage;

  beforeEach(() => {
    page = new AngularLearnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
