let store = {};

const kash = {};

kash.set = function(key, value, milliseconds) {
  if ((store[key] === null)) {
    store[key] = value;
    return setTimeout(() => delete store[key]
    , (milliseconds || 2000));
  }
};

kash.get = key => store[key] || null;

kash.del = key => delete store[key];

kash.flush = () => store = {};

kash.size = () => Object.keys(store).length;

export default kash;
