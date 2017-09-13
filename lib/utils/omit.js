"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (original) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object.keys(original).reduce(function (created, key) {
    if (keys.indexOf(key) === -1) {
      created[key] = original[key];
    }

    return created;
  }, {});
};