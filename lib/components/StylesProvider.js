'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCtx = require('react-ctx');

var _utils = require('../utils');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var omitKeys = ['children', 'key', 'ref', 'customStyleParams'];

var StylesProvider = function (_Component) {
  _inherits(StylesProvider, _Component);

  function StylesProvider() {
    _classCallCheck(this, StylesProvider);

    return _possibleConstructorReturn(this, (StylesProvider.__proto__ || Object.getPrototypeOf(StylesProvider)).apply(this, arguments));
  }

  _createClass(StylesProvider, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          customStyleParams = _props.customStyleParams;

      var mergedStyleParams = _extends({}, customStyleParams, (0, _utils.omit)(this.props, omitKeys));

      return _react2.default.createElement(
        _reactCtx.MapPropsToContext,
        {
          contextNamespace: _constants.contextNamespace,
          contextTypes: _constants.contextTypes,
          customStyleParams: mergedStyleParams
        },
        children
      );
    }
  }]);

  return StylesProvider;
}(_react.Component);

exports.default = (0, _reactCtx.context)(_constants.contextTypes, _constants.contextNamespace)(StylesProvider);