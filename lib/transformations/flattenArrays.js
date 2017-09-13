'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../utils');

var f = function f(x) {
  return (0, _utils.type)(x) === 'Array' ? x.reduce(function (result, obj) {
    return _extends({}, result, obj);
  }, {}) : x;
};

exports.default = function (x) {
  return (0, _utils.mapRecursive)(x, f);
};