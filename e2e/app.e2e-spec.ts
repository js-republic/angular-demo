import { AngularCliTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('angular-cli-test App', function() {
  /*
  let page: AngularCliTestPage;


  beforeEach(() => {
    page = new AngularCliTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
  */

  it('should display the 2048 table', () => {
    browser.get('/2048');

    let table = element.all(by.css('.g204D8__table'));
    expect(table).toBeTruthy();
  });
});
