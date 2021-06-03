"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlueBackground = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SampleComponent = require("../../sugcon-components/SampleComponent");

var _default = {
  title: 'Sugcon/Sample Component',
  component: _SampleComponent.SampleComponent,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_SampleComponent.SampleComponent, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  backgroundColor: null,
  heading: 'This is a heading',
  content: 'Hi this should be a bunch of content'
};
var BlueBackground = Template.bind({});
exports.BlueBackground = BlueBackground;
BlueBackground.args = {
  backgroundColor: 'aqua',
  heading: 'This is second heading',
  content: 'This is much longer content. I mean not really, but you can imagine'
};