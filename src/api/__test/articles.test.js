import {ApiSdk} from './sdk/ApiSdk';
import {programmingArticle} from './fixtures/article';

describe("Articles", () => {
  let sdk;

  beforeEach(() => {
    sdk = new ApiSdk();
    return sdk.start();
  });

  it("Should have 0 articles when not added", async () => {
    const initialNumber = await sdk.countAllArticles();
    await sdk.addArticle(programmingArticle);
    const resultingNumber = await sdk.countAllArticles();

    expect(resultingNumber - initialNumber).toBe(1);
  });

  it.todo("Should have all articles when added");
  it.todo("Should return article by id when exists");
  it.todo("!!! - Should do sth when the article requested by id is not added");
  it.todo("Should save the article when it's valid");
  it.todo("Should return Bad Request Status when the article is not valid");
  it.todo("Should save the updated article when it's valid");
  it.todo("Should return Bad Request Status when the updated article is not valid");
  it.todo("Should delete the article when requested");

  afterEach(async () => {
    await sdk.stop();
  });
});
