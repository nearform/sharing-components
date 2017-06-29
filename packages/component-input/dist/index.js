'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledInput = require('./styles/styledInput');

var _styledInput2 = _interopRequireDefault(_styledInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? 'text' : _ref$type,
      name = _ref.name,
      onChange = _ref.onChange;
  return _react2.default.createElement(_styledInput2.default, { type: type, className: 'input', name: name, onChange: onChange });
};

exports.default = Input;