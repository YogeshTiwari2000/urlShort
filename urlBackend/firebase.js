import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from './firebase-service-account.json' assert { type: 'json' }; // Use import for JSON

// const serviceAccount = require('./firebase-service-account.json'); // Path to your service account key file

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

export { db };