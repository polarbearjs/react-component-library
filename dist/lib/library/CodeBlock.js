'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  title: _react.PropTypes.string.isRequired,
  code: _react.PropTypes.string.isRequired
};

var CodeBlock = function (_Component) {
  _inherits(CodeBlock, _Component);

  function CodeBlock(props) {
    _classCallCheck(this, CodeBlock);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CodeBlock).call(this, props));

    _this.state = { show: false };
    return _this;
  }

  _createClass(CodeBlock, [{
    key: 'toggle',
    value: function toggle() {
      var _this2 = this;

      return function () {
        _this2.setState({ show: !_this2.state.show });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var code = _props.code;
      var show = this.state.show;


      return _react2.default.createElement(
        'div',
        { className: 'library__code-block' },
        _react2.default.createElement(
          'div',
          { className: 'library__code-block__title' },
          _react2.default.createElement(
            'h3',
            null,
            title
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.toggle() },
            show ? 'Hide' : 'Show'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'library__code-block__content' },
          show ? _react2.default.createElement(
            _reactHighlight2.default,
            { className: 'javascript' },
            code.trim()
          ) : null
        )
      );
    }
  }]);

  return CodeBlock;
}(_react.Component);

CodeBlock.propTypes = propTypes;

exports.default = CodeBlock;