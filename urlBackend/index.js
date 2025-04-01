
import express from 'express';
import urlRoute from './routes/url.js';
import { db } from './firebase.js';

const app = express();
const port = 8001;

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    // Firebase equivalent of findOneAndUpdate
    const urlsRef = db.collection('urls');
    const snapshot = await urlsRef.where('shortId', '==', shortId).get();

    if (snapshot.empty) {
        return res.status(404).send('URL not found');
    }

    const doc = snapshot.docs[0];
    const urlData = doc.data();

    // Update visit history
    await doc.ref.update({
        visitHistory: [...(urlData.visitHistory || []), {
            createdAt: Date.now()
        }]
    });

    res.redirect(urlData.redirectURL);
});

import cors from 'cors';
app.use(cors()); // Enable CORS for all routes
app.use(cors({
    origin: ['https://yogeshtiwari2000.github.io/urlShort/url-short', 'http://localhost:3000']
}));

app.use(express.json());
app.use('/url', urlRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// 
