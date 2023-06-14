import { _clientApi } from './client-api';

beforeEach(() => {
  jest.resetAllMocks();
});
describe('client-api', () => {
  it('returns data', async () => {
    const res = await _clientApi({ data: 'test-data' }, {
      auth: undefined
    } as any);

    expect(res).toEqual({ data: 'test-data' });
  });
});
