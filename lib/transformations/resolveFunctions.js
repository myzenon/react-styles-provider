'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var f = function f(x, params) {
  while ((0, _utils.type)(x) === 'Function') {
    x = x.apply(undefined, _toConsumableArray(params));
  }

  return x;
};

exports.default = function (x) {
  for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return (0, _utils.mapRecursive)(x, params, f);
};