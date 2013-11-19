Benchmark = require 'benchmark'
suite = new Benchmark.Suite

jsonValue =
  "firstName": "Matthew"
  "lastName": "Hudson"

jsonStringifyValue = JSON.stringify(jsonValue)

kash = require '../src/kash'

kash.set 'goose', 'silly', 10000

suite
  .add 'kash#GetKey', ->
    kash.get 'goose'
  
  .add 'kash#GetNonExistantKey', ->
    kash.get 'non-existant-key'

  .add 'kash#NoTimeout', ->
    kash.set 'houdini', 'disappear'
    kash.get 'houdini'

  .add 'kash#BasicShortTimeout', ->
    kash.set 'houdini', 'disappear', 100
    kash.get 'houdini'

  .add 'kash#BasicLongTimeout', ->
    kash.set 'houdini', 'disappear', 5000
    kash.get 'houdini'

  .add 'kash#JSONRaw', ->
    kash.set 'json', jsonValue
    kash.get 'json'

  .add 'kash#JSONStringifyValue', ->
    kash.set 'jsonString', jsonStringifyValue
    kash.get 'jsonString'

  .on 'cycle', (ev) ->
    console.log String(ev.target)
    kash.flush()

  .on 'complete', ->
    console.log "Fastest is #{@filter('fastest').pluck('name')}"

  .run async: true