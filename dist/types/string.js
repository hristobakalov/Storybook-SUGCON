"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scStringType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var scStringType = _propTypes.default.shape({
  value: _propTypes.default.string
});

exports.scStringType = scStringType;