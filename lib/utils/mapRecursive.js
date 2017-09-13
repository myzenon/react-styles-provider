'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapRecursive = function mapRecursive(x, params, f, depth) {
  x = f(x, params, depth);

  switch ((0, _type2.default)(x)) {

    case 'Object':
      return Object.keys(x).reduce(function (acc, key) {
        acc[key] = mapRecursive(x[key], params, f, depth);

        return acc;
      }, {});

    case 'Array':
      return x.map(function (y) {
        return mapRecursive(y, params, f, depth);
      });

    default:
      return x;
  }
};

exports.default = function (x, params, f) {
  return (0, _type2.default)(params) === 'Array' ? mapRecursive(x, params, f, 0) : mapRecursive(x, [], params, 0);
};