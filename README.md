[![Build Status](https://travis-ci.org/dpittner/wurstsalat.svg?branch=master)](https://travis-ci.org/dpittner/wurstsalat)
[![codecov](https://codecov.io/gh/dpittner/wurstsalat/branch/master/graph/badge.svg)](https://codecov.io/gh/dpittner/wurstsalat)

This repo contains an example setup for tracking code coverage of [Mocha](http://visionmedia.github.io/mocha) tests via [Istanbul](http://gotwarlost.github.io/istanbul/) and [Karma](http://karma-runner.github.io/).

Run the following:

```
npm install
npm test
```

and then open the code coverage report under the subdirectory `coverage`.

The tests are executed using [PhantomJS](http://phantomjs.org) and Firefox. It is easy to add [other browsers](http://karma-runner.github.io/0.10/config/browsers.html) as well.
