import kash from "./index";

describe("kash", () => {
  beforeEach(() => {
    kash.flush();
  });

  test("set() should store a value in the cache", () => {
    kash.set("key", "value");
    expect(kash.get("key")).toBe("value");
  });

  test("get() should return null for non-existent keys", () => {
    expect(kash.get("non-existent-key")).toBeNull();
  });

  test("set() should store a value in the cache with an expiration", (done) => {
    kash.set("key", "value", 200);
    expect(kash.get("key")).toBe("value");
    setTimeout(() => {
      expect(kash.get("key")).toBeNull();
      done();
    }, 201);
  });

  test("del() should remove a key from the cache", () => {
    kash.set("key", "value");
    expect(kash.get("key")).toBe("value");
    kash.del("key");
    expect(kash.get("key")).toBeNull();
  });

  test("flush() should remove all keys from the cache", () => {
    kash.set("key1", "value1");
    kash.set("key2", "value2");
    expect(kash.size()).toBe(2);
    kash.flush();
    expect(kash.size()).toBe(0);
  });

  test("size() should return the correct number of keys in the cache", () => {
    expect(kash.size()).toBe(0);
    kash.set("key1", "value1");
    kash.set("key2", "value2");
    expect(kash.size()).toBe(2);
  });
});
