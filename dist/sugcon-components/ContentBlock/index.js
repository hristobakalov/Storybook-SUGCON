"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentBlock = void 0;

var _react = _interopRequireDefault(require("react"));

var _sitecoreJssReact = require("@sitecore-jss/sitecore-jss-react");

var TYPES = _interopRequireWildcard(require("../../types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Type defintitions
var ContentBlock = function ContentBlock(props) {
  var _props$model = props.model,
      model = _props$model === void 0 ? {} : _props$model,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement(_sitecoreJssReact.Text, {
    tag: "h2",
    className: "display-4",
    field: model.heading
  }), /*#__PURE__*/_react.default.createElement(_sitecoreJssReact.RichText, {
    className: "contentDescription",
    field: model.content
  }));
};

exports.ContentBlock = ContentBlock;