"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var x = arguments[1];
  return list.reduce(function (result, f) {
    return f.apply(undefined, [result].concat(params));
  }, x);
};