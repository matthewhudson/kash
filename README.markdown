# KASH [![NPM version](https://badge.fury.io/js/kash.png)](http://badge.fury.io/js/kash) [![Build Status](https://travis-ci.org/matthewhudson/kash.png?branch=master)](https://travis-ci.org/matthewhudson/kash)

#### Fast and simple in-memory caching for JavaScript

## Benchmarks

<img src="https://i.imgur.com/QIlOZhY.png" />

_Benchmarks run on an early 2013 Macbook Pro: 2.7 GHz Intel Core i7, and 16 GB 1600 MHz DDR3_


What?
-----

Notifies your app when the network connection goes online or offline.

Why?
----

Because the next billion users of the internet will have a decent device but a spotty connection. Having a component to help you declaratively deal with that is super fantastic.

## Installation

```bash
npm install kash
# or
yarn add kash
```

And then import it:

```js
// using es modules
import kash from 'kash'

// common.js
const kash = require('kash').default

// AMD
// I've forgotten but it should work.
```

Or use script tags and globals.

```html
<script src="https://unpkg.com/kash"></script>
```

And then grab it off the global like so:

```js
const kash = kash.default
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
| [Matthew Hudson](http://thematthewhudson.com/) |

## Legal

Released under MIT license.

Copyright &copy; 2017-present Matthew Hudson
