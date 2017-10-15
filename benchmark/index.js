/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const jsonValue = {
  "firstName": "Matthew",
  "lastName": "Hudson"
};

const jsonStringifyValue = JSON.stringify(jsonValue);

const kash = require('../src/kash');

kash.set('goose', 'silly', 10000);

suite
  .add('kash#GetKey', () => kash.get('goose')).add('kash#GetNonExistantKey', () => kash.get('non-existant-key')).add('kash#SetKeyWithDefaultExpiration', () => kash.set('new-key', 'new-value')).add('kash#SetKeyWithShortExpiration', () => kash.set('new-key', 'new-value', 1)).add('kash#SetKeyWithLongExpiration', () => kash.set('new-key', 'new-value', 25000)).add('kash#GetAndSetWithDefaultExpiration', function() {
    kash.set('houdini', 'disappear');
    return kash.get('houdini');
  }).add('kash#GetAndSetWithShortExpiration', function() {
    kash.set('houdini', 'disappear', 1);
    return kash.get('houdini');
  }).add('kash#GetAndSetWithLongExpiration', function() {
    kash.set('houdini', 'disappear', 25000);
    return kash.get('houdini');
  }).add('kash#GetAndSetRawJSON', function() {
    kash.set('json', jsonValue);
    return kash.get('json');
  }).add('kash#GetAndSetJSONStringify', function() {
    kash.set('jsonString', jsonStringifyValue);
    return kash.get('jsonString');
  }).on('cycle', function(ev) {
    console.log(String(ev.target));
    return kash.flush();
  }).on('complete', function() {
    return console.log(`Fastest is ${this.filter('fastest').pluck('name')}`);
  }).run({async: true});
