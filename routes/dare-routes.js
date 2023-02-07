import express from 'express';
import dareObserver from '../controllers/DareItems.js';

const router = express.Router();

router.post('/dareObserver', dareObserver);

export default {
    routes: router
}
