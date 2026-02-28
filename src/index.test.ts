import kash from './'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.clearAllTimers()
})

test('set and get values in cache', () => {
  kash.set('testKey', 'testValue')
  expect(kash.get('testKey')).toBe('testValue')
})

test('cache returns null for nonexistent keys', () => {
  expect(kash.get('nonexistentKey')).toBeNull()
})

test('value should be removed after expiration time', () => {
  kash.set('expiredKey', 'expiredValue', 100)
  jest.runAllTimers()
  expect(kash.get('expiredKey')).toBeNull()
})

test('delete keys in cache', () => {
  kash.set('testKey', 'testValue')
  kash.del('testKey')
  expect(kash.get('testKey')).toBeNull()
})

test('flush cache', () => {
  kash.set('testKey1', 'testValue1')
  kash.set('testKey2', 'testValue2')
  kash.flush()
  expect(kash.get('testKey1')).toBeNull()
  expect(kash.get('testKey2')).toBeNull()
})

test('get cache size', () => {
  kash.flush()
  kash.set('testKey1', 'testValue1')
  kash.set('testKey2', 'testValue2')
  expect(kash.size()).toBe(2)
})
