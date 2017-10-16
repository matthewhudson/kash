let store = {};

const kash = {};

kash.set = (key, value, milliseconds = 2000) => {
  if (!store[key]) {
    store[key] = value;
    setTimeout(() => {
      delete store[key]
    }, milliseconds);
  }
};

kash.get = key => store[key] || null;

kash.del = key => delete store[key];

kash.flush = () => store = {};

kash.size = () => Object.keys(store).length;

export default kash;
