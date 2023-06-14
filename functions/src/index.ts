import * as functions from 'firebase-functions';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import { _clientApi } from './callable-functions/client-api';

initializeApp(functions.config().firebase);
getFirestore(functions.config().firebase).settings({
  ignoreUndefinedProperties: true
});

// callable functions
export const clientApi = functions.https.onCall(_clientApi);
