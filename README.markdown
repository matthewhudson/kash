# kash
[![NPM version](https://badge.fury.io/js/kash.svg)](http://badge.fury.io/js/kash)
[![Build Status](https://travis-ci.org/matthewhudson/kash.svg?branch=master)](https://travis-ci.org/matthewhudson/kash)
[![Greenkeeper badge](https://badges.greenkeeper.io/matthewhudson/kash.svg)](https://greenkeeper.io/)

## What?

Fast and simple in-memory caching.

## Why?

Because sometimes you need straight-forward, reliable, and low-latency caching.

## Installation

``` sh
npm install kash
```

And then import it:

``` js
// using es modules
import kash from 'kash'

// common.js
const kash = require('kash').default

// AMD
// I've forgotten but it should work.
```

Or use script tags and globals.

``` html
<script src="https://unpkg.com/kash"></script>
```

And then grab it off the global like so:

``` js
const kash = kash.default
```

## Synopsis

``` js
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
| [Matthew Hudson](http://thematthewhudson.com/) |

## Legal

Released under MIT license.

Copyright &copy; 2013-present Matthew Hudson
