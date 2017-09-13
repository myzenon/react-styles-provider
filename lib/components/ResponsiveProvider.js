'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCtx = require('react-ctx');

var _WindowDimensions = require('../enhancers/WindowDimensions');

var _WindowDimensions2 = _interopRequireDefault(_WindowDimensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Primitive mobile detection
var detectMobile = function detectMobile() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
};

var isMobile = detectMobile();

var ResponsiveProvider = function (_Component) {
  _inherits(ResponsiveProvider, _Component);

  function ResponsiveProvider() {
    _classCallCheck(this, ResponsiveProvider);

    return _possibleConstructorReturn(this, (ResponsiveProvider.__proto__ || Object.getPrototypeOf(ResponsiveProvider)).apply(this, arguments));
  }

  _createClass(ResponsiveProvider, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          window = _props.window,
          set = _props.set;


      return _react2.default.createElement(
        _reactCtx.MapPropsToContext,
        {
          contextTypes: ['responsive'],
          responsive: set(_extends({}, window, { isMobile: isMobile }))
        },
        children
      );
    }
  }]);

  return ResponsiveProvider;
}(_react.Component);

ResponsiveProvider.propTypes = {
  set: _react.PropTypes.func
};
ResponsiveProvider.defaultProps = {
  set: function set() {}
};
exports.default = (0, _WindowDimensions2.default)()(ResponsiveProvider);