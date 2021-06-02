"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scImageType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var scImageType = _propTypes.default.shape({
  value: _propTypes.default.shape({
    src: _propTypes.default.string.isRequired,
    alt: _propTypes.default.string.isRequired,
    width: _propTypes.default.string,
    height: _propTypes.default.string
  })
});

exports.scImageType = scImageType;