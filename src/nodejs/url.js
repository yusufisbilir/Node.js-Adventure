const url = require('url');

const adress = 'https://www.btkakademi.gov.tr/portal/course/player/deliver/node-js-ile-web-programlama-14301';

let result = url.parse(adress,true);
console.log(result);
/*Url {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.btkakademi.gov.tr',
    port: null,
    hostname: 'www.btkakademi.gov.tr',
    hash: null,
    search: null,
    query: [Object: null prototype] {},
    pathname: '/portal/course/player/deliver/node-js-ile-web-programlama-14301',
    path: '/portal/course/player/deliver/node-js-ile-web-programlama-14301',
    href: 'https://www.btkakademi.gov.tr/portal/course/player/deliver/node-js-ile-web-programlama-14301'
  }*/