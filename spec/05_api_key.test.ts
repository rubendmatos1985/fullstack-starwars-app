import { CommonPostRequestsTests } from './commons/post_queries';

describe('Api Key', () => {
  test('fail if api key is not in query', async () =>
    await CommonPostRequestsTests.Query.Wrong.ApiKeyNotPresent('films'));
});
