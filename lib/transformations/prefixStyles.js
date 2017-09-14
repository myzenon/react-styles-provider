'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixer = new _inlineStylePrefixer2.default();
var prefix = function prefix(style) {
  return prefixer.prefix(style);
};

exports.default = function (x) {
  return prefix(x);
};