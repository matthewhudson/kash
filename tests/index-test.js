import expect from 'expect';
import kash from 'src';

describe('kash', () => {
  afterEach(() => {
    kash.flush();
  });

  describe('#set', () => {
    beforeEach(() => {
      kash.set('foo', 'bar');
    });

    it('should have a value of `bar`', () => {
      expect(kash.get('foo')).toEqual('bar');
    });

    it('should have a size of 1', () => {
      expect(kash.size()).toEqual(1);
    });
  });

  describe('#size', () => {
    beforeEach(() => {
      let i = 0;
      while (i < 8) {
        kash.set(i.toString(), i.toString());
        i++;
      }
    });

    it('should have a size of 8', () => {
      expect(kash.size()).toEqual(8);
    });
  });

  describe('#flush', () => {
    it('should have a size of 0', () => {
      expect(kash.size()).toEqual(0);
    });
  });

  describe('#del', () => {
    beforeEach(() => {
      kash.set('foo', 'bar');
      kash.del('foo');
    });

    it('should have a value of `null`', () => {
      expect(kash.get('foo')).toEqual(null);
    });

    it('should have a size of 0', () => {
      expect(kash.size()).toEqual(0);
    });
  });
});
