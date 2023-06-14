import { ClientApiParams, ClientApiResponse } from '@og-shared/types';
import { CallableContext } from 'firebase-functions/v1/https';

export async function _clientApi(
  data: ClientApiParams,
  context: CallableContext
): Promise<ClientApiResponse> {
  console.log('called client api', { data, context });
  return { data: data.data };
}
