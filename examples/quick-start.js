var kash = require('../lib/kash');

kash.set('foo', 'bar', 100);

console.log(kash.get('foo'));

setTimeout(function() {
  console.log(kash.get('foo'));
}, 101);
