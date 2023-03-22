# KASH 🚀🎉

[![NPM Version](https://img.shields.io/npm/v/kash.svg)](https://npmjs.com/package/kash)
[![Code Coverage](https://codecov.io/gh/matthewhudson/kash/branch/master/graph/badge.svg?token=dznrRZtztn)](https://codecov.io/gh/matthewhudson/kash)
[![Downloads](https://img.shields.io/npm/dt/kash.svg)](https://img.shields.io/npm/dt/kash.svg)
[![License](https://img.shields.io/npm/l/kash.svg)](https://img.shields.io/npm/l/kash.svg)

## What?  🤔

Fast and simple in-memory caching. 🏎️💨

## Why? 🎯

Because sometimes you need straight-forward, reliable, and low-latency caching. ⚡

## Installation 📦

```sh
npm install kash
```

And then import it:

```js
// using es modules
import kash from "kash";

// common.js
const kash = require("kash");

// AMD
// I've forgotten but it should work.
```

Or use script tags and globals.

```html
<script src="https://unpkg.com/kash"></script>
```

And then grab it off the global like so:

```js
const kash = kash.default;
```

## Synopsis 📖

```js
setTimeout(function() {
  console.log(kash.get("foo"));
}, 101);

kash.set("foo", "bar", 100);

console.log(kash.get("foo"));
```

Will print the following in the console:

```sh
bar
null
```

## API 🛠️

### kash.set(key, value [, expiration ])

Set a key with a value. Set expiration to remove from cache after the specified number of milliseconds. Defaults to 2000 ms.

### kash.get(key)

Retrieve the value for the specified key. Returns null if key does not exist.

### kash.del(key)

Deletes a key.

### kash.flush()

Removes the cache of all contents.

### kash.size()

Get the number of entries in the cache.

## Author

| [![twitter/matthewgh](http://gravatar.com/avatar/e0f8435a3df533d64b09b8aee394b8d3?s=85)](https://twitter.com/matthewgh "Follow @matthewgh on Twitter") |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Matthew Hudson](http://thematthewhudson.com/)                                                                                                         |  |
