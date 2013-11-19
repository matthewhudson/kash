kash      = require '../lib/kash'
vows      = require 'vows'
assert    = require 'assert'

vows
  .describe('KASH')
  .addBatch(
    'Setting a cache item':
      topic: ->
        kash.set 'foo', 'bar'

      'should have a value of "bar"': ->
        assert.equal kash.get('foo'), 'bar'

      'should have a size of 1': ->
        assert.equal kash.size(), 1
  )
  .addBatch(
    'Checking the cache after a key expires':
      topic: ->
        next = @callback

        kash.flush()

        kash.set 'foo', 'bar', 100

        setTimeout () -> 
          next undefined                    
        , 101

        # Returning 'undefined' lets vows know this test is async
        return

      'should have a value of null': ->
        assert.equal kash.get('foo'), null

      'should have a size of 0': ->
        assert.equal kash.size(), 0
  )
  .addBatch(
    'Deleting a key':
      topic: ->
        next = @callback

        kash.flush()

        kash.set 'foo', 'bar'
        kash.del 'foo'

      'should have a value of null': ->
        assert.equal kash.get('foo'), null

      'should have a size of 0': ->
        assert.equal kash.size(), 0
  )
  .addBatch(
    'Checking the cache size':
      topic: ->
        next = @callback

        kash.flush()

        i = 0
        while i < 8
          kash.set i.toString(), i.toString()
          i++

      'should have a size of 8': ->
        assert.equal kash.size(), 8
  )
  .addBatch(
    'Flushing the cache':
      topic: ->
        next = @callback

        kash.flush()

      'should have a size of 0': ->
        assert.equal kash.size(), 0
  )
  .export module
