# Instructions

## Problem description

Node.js non-blocking nature allows handling high concurrency in a very easy way, without the introduced overhead of running several threads or processes of the same program. The classic way of handling the flow of an async program is by handling the response of asynchronous functions in callbacks. However, when coding this way, if several aynchronous functions are called in a nested way, the code can become very hard to read and mantain. This why libraries like async have been written, allowing asynchronous code to be written in a much nicer way.

However, promises have gained a lot of adoption during the last years because they produce even much nicer and readable code, while at the same time having other advantages like making easier to handle errors and also handling any exception that might happen inside the promise chain.

In the file promises.js, you can find some code written with callbacks and the async library. Your goal is to rewrite that code to use promises instead while keeping the same behaviour.


In order to solve the problem you can use any open source third-party libraries from the npm registry.

Once the problem is solved, please open a pull request with your solution.

## Before starting

Install dependencies:

```sh
$ npm install
```
