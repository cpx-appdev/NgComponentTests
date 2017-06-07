import { NgComponentTestsPage } from './app.po';

describe('ng-component-tests App', () => {
  let page: NgComponentTestsPage;

  beforeEach(() => {
    page = new NgComponentTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
