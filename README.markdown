# KASH

#### Fast and efficient in-memory caching for JavaScript

## Benchmarks

<img src="https://i.imgur.com/QIlOZhY.png" />

_Benchmarks run on an early 2013 Macbook Pro: 2.7 GHz Intel Core i7, and 16 GB 1600 MHz DDR3_

## Installation

Using [`npm`](http://npmjs.org/):

``` sh
$ npm [-g] install kash
```

In [Node.js](http://nodejs.org/):

``` javascript
var kash = require("kash");
```
## Usage

``` javascript
setTimeout(function() {
  // Prints "Houdini is... null" to console
  console.log("Houdini is... " + kash.get('houdini'));
}, 101);

kash.set('houdini', 'disappear', 100);

// Prints "disappear" to console
console.log(kash.get('houdini'));
```

### kash.set(key, value [, expires ])

Set a `key` with a `value`. Optionally, pass in a milliseconds `expires` argument.

### kash.get(key)

Retrieve the `value` for the specified `key`. Returns `null` if `key` does not exist.

### kash.del(key)

Deletes a `key`.

### kash.flush()

Removes the cache of all contents.

### kash.size()

Get the number of entries in the cache.

## Author

| [![twitter/matthewgh](http://gravatar.com/avatar/e0f8435a3df533d64b09b8aee394b8d3?s=85)](https://twitter.com/matthewgh "Follow @matthewgh on Twitter") |
|---|
| [Matthew Hudson](http://matthewhudson.me/) |