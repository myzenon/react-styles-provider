"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return {}.toString.call(x).slice(8, -1);
};