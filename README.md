# NodeJS wrapper around Blablacar API

This NPM module allows you easily to retrieve data from Blablacar through their API.

## Installation

Install with [npm](http://npmjs.org/):

```
    $ npm install node-blablacar
```

Install via Git clone:

```
    $ git clone https://github.com/ojathelonius/node-blablacar.git
    $ cd node-blablacar
    $ npm install
```

## Documentation

Please use the [Blablacar API documentation](https://dev.blablacar.com/docs/versions/1.0/getting-started) for all the details. Usage examples are shown below.

## Examples

Set-up the client


```javascript

import BlablacarClient from "node-blablacar";

var client = new BlablacarClient("your_api_key");

```


Run a trip search with given parameters (see full list of parameters [here](https://dev.blablacar.com/docs/versions/1.0/resources/trips/endpoints/list-dingbats)

```javascript

client
  .searchTrip({
    fn: "Paris",
    tn: "Berlin",
    format: "json",
    locale: "fr_FR",
    cur: "EUR",
    db: "2017-10-22",
    de: "2017-10-25",
    hb: 7,
    he: 14,
    seats: 1
  })
  .then(function(result) {
    // Do something with the result
  })
  .catch(function(err) {
    // Handle the error
  });

```

Retrieve details from a given trip

```javascript

client
  .getTripDetails({
    Trip_ID: "906288359-massy-angers",
    locale: "fr_FR",
    format: "json"
  })
  .then(function(result) {
    // Do something with the result
  })
  .catch(function(err) {
    // Handle the error
  });

```
