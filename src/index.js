/** Cache module */
const kash = {
  /** Cache store */
  cacheStore: {},

  /**
   * Sets a key-value pair in the cache with an optional expiration time.
   * @param {string} key - The key of the item to store.
   * @param {*} value - The value of the item to store.
   * @param {number} [expiration=2000] - The expiration time in milliseconds (default: 2000).
   */
  set (key, value, expiration = 2000) {
    if (!this.cacheStore[key]) {
      this.cacheStore[key] = value
      setTimeout(() => {
        delete this.cacheStore[key]
      }, expiration)
    }
  },

  /**
   * Gets the value associated with a key from the cache.
   * @param {string} key - The key of the item to retrieve.
   * @returns {*} The value of the item or null if not found.
   */
  get (key) {
    return this.cacheStore[key] || null
  },

  /**
   * Deletes an item from the cache using its key.
   * @param {string} key - The key of the item to delete.
   * @returns {boolean} True if the item was deleted, false otherwise.
   */
  del (key) {
    return delete this.cacheStore[key]
  },

  /**
   * Flushes all items from the cache.
   */
  flush () {
    this.cacheStore = {}
  },

  /**
   * Returns the number of items currently in the cache.
   * @returns {number} The number of items in the cache.
   */
  size () {
    return Object.keys(this.cacheStore).length
  }
}

// Exporting as default because this module is simple and will only have one export.
export default kash
