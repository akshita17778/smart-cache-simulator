const express = require('express');
const { getCache, setCache } = require('../controllers/cacheController');
const router = express.Router();

router.get('/:key', getCache);
router.post('/', setCache);

module.exports = router;
