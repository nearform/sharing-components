'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tfont-size: 1em;\n\tmargin: 1em;\n\tpadding: 0.25em 1em;\n\tborder-radius: 3px;\n  background: none;\n\tcolor: ', ';\n\tborder: 2px solid ', ';\n'], ['\n\tfont-size: 1em;\n\tmargin: 1em;\n\tpadding: 0.25em 1em;\n\tborder-radius: 3px;\n  background: none;\n\tcolor: ', ';\n\tborder: 2px solid ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.input(_templateObject, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
});