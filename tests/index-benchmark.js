const Benchmark = require('benchmark')
const kash = require('../src')

const suite = new Benchmark.Suite()

const jsonValue = {
  firstName: 'Matthew',
  lastName: 'Hudson'
}

const jsonStringifyValue = JSON.stringify(jsonValue)

kash.set('goose', 'silly', 10000)

suite
  .add('kash#GetKey', () => {
    kash.get('goose')
  })
  .add('kash#GetNonExistingKey', () => {
    kash.get('non-existing-key')
  })
  .add('kash#SetKeyWithDefaultExpiration', () => {
    kash.set('new-key', 'new-value')
  })
  .add('kash#SetKeyWithShortExpiration', () => {
    kash.set('new-key', 'new-value', 1)
  })
  .add('kash#SetKeyWithLongExpiration', () => {
    kash.set('new-key', 'new-value', 25000)
  })
  .add('kash#GetAndSetWithDefaultExpiration', () => {
    kash.set('houdini', 'disappear')
    kash.get('houdini')
  })
  .add('kash#GetAndSetWithShortExpiration', () => {
    kash.set('houdini', 'disappear', 1)
    kash.get('houdini')
  })
  .add('kash#GetAndSetWithLongExpiration', () => {
    kash.set('houdini', 'disappear', 25000)
    kash.get('houdini')
  })
  .add('kash#GetAndSetRawJSON', () => {
    kash.set('json', jsonValue)
    kash.get('json')
  })
  .add('kash#GetAndSetJSONStringify', () => {
    kash.set('jsonString', jsonStringifyValue)
    kash.get('jsonString')
  })
  .on('cycle', ev => {
    console.log(String(ev.target))
    kash.flush()
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'))
  })
  .run({
    async: true
  })
