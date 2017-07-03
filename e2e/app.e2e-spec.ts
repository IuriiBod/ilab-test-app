import { IlabsAppPage } from './app.po';

describe('ilabs-app App', () => {
  let page: IlabsAppPage;

  beforeEach(() => {
    page = new IlabsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
