

import { db } from '../firebase.js';
import { nanoid } from 'nanoid';

export async function handleGeneratedNewURl(req, res) {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {

        const shortId = nanoid(8);

        // Save to Firestore
        const docRef = await db.collection('urls').add({
            shortId,
            redirectURL: url,
            visitHistory: [],
            createdAt: Date.now()
        });

        return res.json({
            redirectURL: url,
            id: shortId,
            firebaseId: docRef.id
        });

    } catch (error) {
        console.error("Firebase error:", error);
        return res.status(500).json({ error: "Failed to create short URL" });
    }
}