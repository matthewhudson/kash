var kash = require('../lib/kash');

setTimeout(function() {
  console.log("Houdini is... " + kash.get('houdini'));
}, 101);

kash.set('houdini', 'disappear', 100);

console.log(kash.get('houdini'));