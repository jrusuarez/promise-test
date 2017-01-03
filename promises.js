'use strict';
const start = Date.now();
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var Promise = require('bluebird');
var _ = require ('lodash');

function lapse() {
  return Date.now() - start;
}

function promiseFunc1(name){
  return new Promise(function(resolve, reject){
    console.log('asyncFunc1 called', lapse());
    setTimeout(function () {
      console.log('asyncFunc1 returning', lapse());
      resolve();
    }, 100);
  });
}

function promiseFunc2(name){
  return new Promise(function(resolve, reject){
    console.log('asyncFunc2 called', lapse());
    setTimeout(function () {
      console.log('asyncFunc2 returning', lapse());
      resolve();
    }, 100);
  });
}

function promiseFunc3(n){
  return new Promise(function(resolve, reject){
   console.log('asyncFunc3 called', n, lapse());
   setTimeout(function () {
    console.log('asyncFunc3 returning', n, lapse());
    resolve();
  }, n*100);
 });
}

var run = async (function () { 
   await (promiseFunc1());
   await (promiseFunc2());   
   await ([promiseFunc3(1),promiseFunc3(2),promiseFunc3(3)]);
   await ( _.map([1, 2, 3], function(i){
     return promiseFunc3(i);
   }));
});

run().then(function (params)
{
 console.log('END');
});

