const CacheService = require('../services/cacheService');

exports.getCache = (req, res) => {
    const key = req.params.key;
    const value = CacheService.get(key);
    res.json({ key, value });
};

exports.setCache = (req, res) => {
    const { key, value } = req.body;
    CacheService.set(key, value);
    res.json({ message: 'Cache set successfully' });
};
