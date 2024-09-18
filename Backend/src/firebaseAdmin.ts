import admin from 'firebase-admin';

const serviceAccount = require('./path/to/serviceAccountKey.json');  // Firebase config

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();

export const verifyToken = async (token: string) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
