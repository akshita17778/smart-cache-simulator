const LRUCache = require('../models/cache');
const cache = new LRUCache(5); // Example capacity

exports.get = (key) => cache.get(key);
exports.set = (key, value) => cache.set(key, value);
