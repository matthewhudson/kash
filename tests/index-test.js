import expect from 'expect'
import kash from 'src'

describe('kash', () => {

  it('Setting a single cache item', () => {

    kash.set('foo', 'bar')

    it('should have a value of `bar`', () => {
      expect(kash.get('foo')).toEqual('bar')
    })

    it('should have a size of 1', () => {
      expect(kash.size()).toEqual(1)
    })

  })

  it('Checking the cache after a key expires', () => {

    kash.flush()
    kash.set('foo', 'bar', 100)

    it('should have a value of `null`', () => {
      expect(kash.get('foo')).toEqual(null)
    })

    it('should have a size of 0', () => {
      expect(kash.size()).toEqual(0)
    })

  })

  it('Checking the cache size', () => {

    kash.flush()

    let i = 0
    while (i < 8) {
      kash.set(i.toString(), i.toString())
      i++
    }

    it('should have a size of 8', () => {
      expect(kash.size()).toEqual(8)
    })

  })

  it('Flushing the cache', () => {

    kash.flush()

    it('should have a size of 0', () => {
      expect(kash.size()).toEqual(0)
    })

  })

  it('Deleting a key', () => {

    kash.flush()
    kash.set('foo', 'bar')
    kash.del('foo')

    it('should have a value of `null`', () => {
      expect(kash.get('foo')).toEqual(null)
    })

    it('should have a size of 0', () => {
      expect(kash.size()).toEqual(0)
    })

  })

})
