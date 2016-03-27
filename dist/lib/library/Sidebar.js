'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  components: _react.PropTypes.array.isRequired
};

var Sidebar = function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sidebar).call(this, props));

    _this.state = { components: props.components, filter: '' };
    return _this;
  }

  _createClass(Sidebar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.state = { components: props.components, filter: '' };
    }
  }, {
    key: 'search',
    value: function search() {
      var _this2 = this;

      return function (e) {
        var filter = e.target.value;
        var components = _this2.props.components;

        _this2.setState({
          filter: filter,
          components: components.filter(function (component) {
            return component.name.match(new RegExp(filter, 'i'));
          })
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var components = _state.components;
      var filter = _state.filter;


      return _react2.default.createElement(
        'div',
        { className: 'library__sidebar' },
        _react2.default.createElement(
          'div',
          { className: 'library__sidebar__item' },
          _react2.default.createElement(
            'div',
            { className: 'library__sidebar__filter' },
            _react2.default.createElement('input', {
              className: 'library__sidebar_filter__input',
              onChange: this.search(),
              value: filter,
              placeholder: 'Search...'
            })
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'library__sidebar__items' },
          components.map(function (component, i) {
            return _react2.default.createElement(
              'li',
              {
                className: 'library__sidebar__item',
                key: 'component-' + i + '-' + component.name
              },
              _react2.default.createElement(
                'a',
                { href: '#' + component.name },
                component.name
              )
            );
          }),
          components.length === 0 ? _react2.default.createElement(
            'li',
            {
              className: 'library__sidebar__item'
            },
            'No components...'
          ) : null
        )
      );
    }
  }]);

  return Sidebar;
}(_react.Component);

Sidebar.propTypes = propTypes;

exports.default = Sidebar;