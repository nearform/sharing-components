'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentButton = require('component-button');

var _componentButton2 = _interopRequireDefault(_componentButton);

var _componentInput = require('component-input');

var _componentInput2 = _interopRequireDefault(_componentInput);

var _styledLabel = require('./styles/styledLabel');

var _styledLabel2 = _interopRequireDefault(_styledLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginForm = function LoginForm(_ref) {
  var onSubmit = _ref.onSubmit;
  return _react2.default.createElement(
    'form',
    { onSubmit: onSubmit },
    _react2.default.createElement(
      _styledLabel2.default,
      null,
      'Username'
    ),
    _react2.default.createElement(_componentInput2.default, { name: 'username' }),
    _react2.default.createElement(
      _styledLabel2.default,
      null,
      'Password'
    ),
    _react2.default.createElement(_componentInput2.default, { name: 'password', type: 'password' }),
    _react2.default.createElement(
      _componentButton2.default,
      { type: 'submit' },
      'Login'
    )
  );
};

exports.default = LoginForm;