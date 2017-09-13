'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function () {
  var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'window';
  return function (WrappedComponent) {
    return function (_Component) {
      _inherits(WindowDimensionsEnhancer, _Component);

      function WindowDimensionsEnhancer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WindowDimensionsEnhancer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WindowDimensionsEnhancer.__proto__ || Object.getPrototypeOf(WindowDimensionsEnhancer)).call.apply(_ref, [this].concat(args))), _this), _this.state = _defineProperty({}, propName, {
          width: window.innerWidth,
          height: window.innerHeight
        }), _this.onResize = function () {
          _this.setState(_defineProperty({}, propName, {
            width: window.innerWidth,
            height: window.innerHeight
          }));
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      // TODO throttle, with delay as param?


      _createClass(WindowDimensionsEnhancer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          window.addEventListener('resize', this.onResize);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.onResize);
        }
      }, {
        key: 'render',
        value: function render() {
          return (0, _react.createElement)(WrappedComponent, _extends(_defineProperty({}, propName, this.state[propName]), this.props));
        }
      }]);

      return WindowDimensionsEnhancer;
    }(_react.Component);
  };
};