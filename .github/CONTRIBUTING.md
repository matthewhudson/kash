# Contributing to Kash

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to `kash`. These are
mostly guidelines, not rules. Use your best judgment, and feel free to propose
changes to this document in a Pull Request.

## Contributing Code

1. Pull the repo
2. Create a branch against `main` (`git checkout -b feature`)
3. Make change(s)
4. Commit your changes (`git commit -am 'Added a feature'`)
5. Push to the branch (`git push origin feature`)
6. Open a Pull Request

## Prerequisites

[Node.js](http://nodejs.org/) >= v18 must be installed.

## Installation

- Running `npm install` in the module's root directory will install everything you need for development.

## Running Tests

- `npm test` will run the tests once.

- `npm run test:coverage` will run the tests and produce a coverage report in `coverage/`.

## Building

- `npm run build` will build the module for publishing to npm.
