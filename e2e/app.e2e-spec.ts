import { PropertyappPage } from './app.po';

describe('propertyapp App', function() {
  let page: PropertyappPage;

  beforeEach(() => {
    page = new PropertyappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
