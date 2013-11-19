# KASH

#### Fast and efficient in-memory caching for JavaScript

[![Build Status](https://travis-ci.org/matthewhudson/kash.png?branch=master)](https://travis-ci.org/matthewhudson/kash)

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

## Synopsis

``` javascript
setTimeout(function() {
  console.log(kash.get('foo'));
}, 101);

kash.set('foo', 'bar', 100);

console.log(kash.get('foo'));
```

Will print the following in the console:

``` sh
bar
null
```

## API

### kash.set(key, value [, expires ])

Set a `key` with a `value`. Set `expires` to remove from cache after specified number of milliseconds. Defaults to `2000` ms.

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