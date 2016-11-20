'use strict';
const async = require('async');
const start = Date.now();

function lapse() {
  return Date.now() - start;
}

function asyncFunc1(cb) {
  console.log('asyncFunc1 called', lapse());
  setTimeout(function () {
    console.log('asyncFunc1 returning', lapse());
    cb();
  }, 100);
}

function asyncFunc2(cb) {
  console.log('asyncFunc2 called', lapse());
  setTimeout(function () {
    console.log('asyncFunc2 returning', lapse());
    cb();
  }, 200);
}

function asyncFunc3(n, cb) {
  console.log('asyncFunc2 called', n, lapse());
  setTimeout(function () {
    console.log('asyncFunc2 returning', n, lapse());
    cb(null);
  }, n * 100);
}



function run() {
  async.waterfall(
    [
      function (cb) {
        asyncFunc1(cb);
      },

      function (cb) {
        asyncFunc2(cb);
      },

      function (cb) {
        async.each([1, 2, 3], asyncFunc3, cb);
      }
    ],

    function () {
      console.log('END');
    }
  );
}

run();
