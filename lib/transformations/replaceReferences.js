'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var getObjectFromKeyPath = function getObjectFromKeyPath(data, keyPath) {
  return keyPath.split('.').reduce(function (prev, curr) {
    return prev[curr];
  }, data);
};

// Maintain a reference to the root object.
// Look up styles by key from the root object.
var f = function f(root, x) {
  if ((0, _utils.type)(x) !== 'Array') return x;

  return x.map(function (item) {
    if ((0, _utils.type)(item) !== 'String') return item;

    return getObjectFromKeyPath(root, item);
  });
};

exports.default = function (x) {
  return (0, _utils.mapRecursive)(x, f.bind(null, x));
};