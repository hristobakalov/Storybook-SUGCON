"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MegaHero = void 0;

var _react = _interopRequireDefault(require("react"));

var _sitecoreJssReact = require("@sitecore-jss/sitecore-jss-react");

var _reactstrap = require("reactstrap");

var TYPES = _interopRequireWildcard(require("../../types"));

require("./megahero.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Type defintitions
var MegaHero = function MegaHero(props) {
  var _props$model = props.model,
      model = _props$model === void 0 ? {} : _props$model;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "megahero"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Jumbotron, {
    style: {
      backgroundImage: "url(".concat(model.image.src, ")")
    }
  }, /*#__PURE__*/_react.default.createElement(_sitecoreJssReact.Text, {
    field: model.heading,
    className: "display-3 text-light",
    tag: "h1"
  }), /*#__PURE__*/_react.default.createElement(_sitecoreJssReact.Text, {
    field: model.lead,
    className: "lead text-light",
    tag: "p"
  }), /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      borderTop: '2px solid black'
    }
  }), /*#__PURE__*/_react.default.createElement(_sitecoreJssReact.Text, {
    field: model.text,
    className: "text-light",
    tag: "p"
  }), /*#__PURE__*/_react.default.createElement(_sitecoreJssReact.Link, {
    field: model.primaryLink,
    className: "btn btn-danger mr-3"
  }), /*#__PURE__*/_react.default.createElement(_sitecoreJssReact.Link, {
    field: model.secondaryLink,
    className: "btn btn-secondary"
  })));
};

exports.MegaHero = MegaHero;