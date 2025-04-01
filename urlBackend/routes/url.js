// // const express = require('express');
// import express from 'express';
// // const { handleGeneratedNewURl } = require('../controllers/url');
// import { handleGeneratedNewURl } from '../controllers/url.js';
// const router = express.Router();
// router.post('/', handleGeneratedNewURl)

// export default router;

// // module.exports = router;
import express from 'express';
import { handleGeneratedNewURl } from '../controllers/url.js'; // Adjust imports as needed

const router = express.Router();

router.post('/', handleGeneratedNewURl); // Create short URL
// Add other routes if needed (e.g., analytics)
// router.get('/analytics/:shortId', handleGetAnalytics); 

export default router;