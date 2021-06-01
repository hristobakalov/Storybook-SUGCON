"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = exports.bodyStyles = exports.fontUrl = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2;

//import { color, typography } from './styles';
var fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';
exports.fontUrl = fontUrl;
var bodyStyles = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  /* Same as before */\n"])));
exports.bodyStyles = bodyStyles;
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n body {\n   ", "\n }"])), bodyStyles);
exports.GlobalStyle = GlobalStyle;