import * as admin from 'firebase-admin';

// old admin sdk
// const serviceAccount = require('./sih-super-set-dev-firebase-adminsdk-ayuh1-1ee1709ed8.json');

// new admin sdk
const serviceAccount = require('./config/fih-superset-dev-firebase-adminsdk-nzzmm-ef4bbee189.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export { admin, db };
