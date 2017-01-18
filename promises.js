'use strict';
const async = require('async');
const Promise = require('bluebird');
const start = Date.now();

function lapse() {
  return Date.now() - start;
}


function run() {
  Promise.resolve([]).spread(function(arg1, arg2) {
      console.log('asyncFunc1 called', lapse());
      var deferred = Promise.pending();
      setTimeout(function(){
          console.log('asyncFunc1 returning', lapse());
          deferred.resolve();
      }, 100);
      return deferred.promise;
  }).then(function(arg1) {
      console.log('asyncFunc2 called', lapse());
      var deferred = Promise.pending();
      setTimeout(function(){
          console.log('asyncFunc2 returning', lapse());
          deferred.resolve();
      }, 200);
      return deferred.promise;
      
  }).then(function(arg2) {
      var items = [1,2,3];
      Promise.each(items, function(n) {
          console.log('asyncFunc2 called', n, lapse());
          var deferred = Promise.pending();
          setTimeout(function(){
              console.log('asyncFunc2 returning', n, lapse());
              deferred.resolve();
          }, n + 100);
      })
      .then(function(allItems) {

      });
  }).then(function(result) {

  });
}

run();
