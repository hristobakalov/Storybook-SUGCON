"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scLinkType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var scLinkType = _propTypes.default.shape({
  value: _propTypes.default.shape({
    href: _propTypes.default.string.isRequired,
    text: _propTypes.default.string,
    linktype: _propTypes.default.string,
    class: _propTypes.default.string,
    title: _propTypes.default.string,
    querystring: _propTypes.default.string,
    id: _propTypes.default.string
  })
});

exports.scLinkType = scLinkType;