(function() {
  var exports, kash, store;

  store = {};

  kash = {};

  kash.set = function(key, value, milliseconds) {
    if (store[key] == null) {
      store[key] = value;
      return setTimeout(function() {
        return delete store[key];
      }, milliseconds || 2000);
    }
  };

  kash.get = function(key) {
    return store[key] || null;
  };

  kash.del = function(key) {
    return delete store[key];
  };

  kash.flush = function() {
    return store = {};
  };

  kash.size = function() {
    return Object.keys(store).length;
  };

  exports = module.exports = kash;

}).call(this);
