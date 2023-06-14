const FIREBASE_CONFIG =
  process.env.FIREBASE_CONFIG && JSON.parse(process.env.FIREBASE_CONFIG);
export const projectId = FIREBASE_CONFIG.projectId;
