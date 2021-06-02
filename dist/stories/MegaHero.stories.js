"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _MegaHero = require("../sugcon-components/MegaHero");

var _default = {
  title: 'Sugcon/MegaHero',
  component: _MegaHero.MegaHero
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_MegaHero.MegaHero, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  model: {
    heading: {
      value: (0, _addonKnobs.text)('Title', 'MegaHero title')
    },
    lead: {
      value: (0, _addonKnobs.text)('Lead', 'MegaHero Lead text')
    },
    text: {
      value: (0, _addonKnobs.text)('Text', 'Click on the mega hero buttons')
    },
    primaryLink: {
      href: 'https://google.com/',
      text: 'Go to Google'
    },
    secondaryLink: {
      href: 'https://jss.sitecore.com/',
      text: 'Go to JSS Docs'
    },
    image: {
      value: {
        src: 'https://picsum.photos/1800/400',
        alt: 'placeholder image'
      }
    }
  }
};