'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import memoize from 'fast-memoize'


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _reactCtx = require('react-ctx');

var _utils = require('../utils');

var _constants = require('../constants');

var _resolveFunctions = require('../transformations/resolveFunctions');

var _resolveFunctions2 = _interopRequireDefault(_resolveFunctions);

var _flattenArrays = require('../transformations/flattenArrays');

var _flattenArrays2 = _interopRequireDefault(_flattenArrays);

var _replaceReferences = require('../transformations/replaceReferences');

var _replaceReferences2 = _interopRequireDefault(_replaceReferences);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultOptions = {
  withRef: false,
  transformations: [_resolveFunctions2.default, _replaceReferences2.default, _flattenArrays2.default]
};

exports.default = function (stylesCreator, options) {

  options = options ? _extends({}, defaultOptions, options, {
    transformations: [].concat(_toConsumableArray(defaultOptions.transformations), _toConsumableArray(options.transformations))
  }) : defaultOptions;

  return function (WrappedComponent) {
    var StylesEnhancer = function (_Component) {
      _inherits(StylesEnhancer, _Component);

      function StylesEnhancer(props) {
        _classCallCheck(this, StylesEnhancer);

        var _this = _possibleConstructorReturn(this, (StylesEnhancer.__proto__ || Object.getPrototypeOf(StylesEnhancer)).call(this));

        _this.state = _this.buildState(props);
        return _this;
      }

      _createClass(StylesEnhancer, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextContext) {
          if (!(0, _shallowequal2.default)(nextProps, this.props)) {
            this.setState(this.buildState(nextProps, nextContext));
          }

          // Update all styles on HMR
          if (module.hot) {
            this.setState(this.buildState(nextProps, nextContext));
          }
        }
      }, {
        key: 'buildState',
        value: function buildState(props) {
          var getStyles = this.buildStyles.bind(this, props);

          return { styles: getStyles(), getStyles: getStyles };
        }
      }, {
        key: 'buildStyles',
        value: function buildStyles(props) {
          var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


          // TODO Handle getDefaultProps() for classic React?
          var defaultProps = WrappedComponent.defaultProps;
          var mergedProps = _extends({}, defaultProps, props);

          // Merge style params from context with anything passed via getStyles
          var mergedCustom = _extends({}, mergedProps.customStyleParams, custom);

          // Delete customStyleParams, which came from context
          delete mergedProps.customStyleParams;

          // console.log('stylesCreator', stylesCreator)

          var result = (0, _utils.applyTransformations)(options.transformations, stylesCreator, mergedProps, mergedCustom);

          // console.log('resulting styles', result)

          return result;
        }
      }, {
        key: 'getWrappedInstance',
        value: function getWrappedInstance() {
          return this.refs.wrappedInstance;
        }
      }, {
        key: 'render',
        value: function render() {
          var _state = this.state,
              styles = _state.styles,
              getStyles = _state.getStyles;


          var element = _react2.default.createElement(WrappedComponent, _extends({
            styles: styles,
            getStyles: getStyles
          }, (0, _utils.omit)(this.props, ['customStyleParams'])));

          if (options.withRef) {
            return _react2.default.cloneElement(element, { ref: 'wrappedInstance' });
          }

          return element;
        }
      }]);

      return StylesEnhancer;
    }(_react.Component);

    return (0, _reactCtx.context)(_constants.contextTypes, _constants.contextNamespace)(StylesEnhancer);
  };
};