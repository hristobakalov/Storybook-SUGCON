"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleComponent = void 0;

var _react = _interopRequireDefault(require("react"));

require("./sample.css");

var SampleComponent = function SampleComponent(_ref) {
  var backgroundColor = _ref.backgroundColor,
      className = _ref.className,
      heading = _ref.heading,
      content = _ref.content;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "display-4"
  }, heading), /*#__PURE__*/_react.default.createElement("p", {
    className: "contentDescription"
  }, content));
};

exports.SampleComponent = SampleComponent;
SampleComponent.defaultProps = {
  className: 'sample-component'
};