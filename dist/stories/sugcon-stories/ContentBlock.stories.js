"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithImage = exports.EmptyContent = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ContentBlock = require("../../sugcon-components/ContentBlock");

var _default = {
  title: 'Sugcon/Content Block',
  component: _ContentBlock.ContentBlock
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_ContentBlock.ContentBlock, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  model: {
    heading: {
      value: (0, _addonKnobs.text)('Title', 'Title')
    },
    content: {
      value: (0, _addonKnobs.text)('Copy', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra est orci, in rutrum massa interdum sit amet. Quisque nunc sem, accumsan a imperdiet nec, mollis sit amet arcu. Suspendisse interdum ligula ac neque interdum, id facilisis magna ornare. Nam non rhoncus felis. Sed sed commodo sem. Morbi diam lorem, pharetra in elementum id, ullamcorper id tortor. Maecenas quis gravida nibh. Curabitur cursus libero et sem elementum, in scelerisque eros cursus. Nulla ultricies eros ipsum, a hendrerit ligula semper vitae. Integer lobortis vitae lectus eget porttitor.</p><p>In malesuada pretium diam, quis elementum nulla volutpat a. Suspendisse ac condimentum ex. Nullam elit purus, consectetur sed eros quis, mattis pretium velit. Vivamus in sapien turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>')
    }
  }
};
var EmptyContent = Template.bind({});
exports.EmptyContent = EmptyContent;
EmptyContent.args = {
  model: {
    heading: {
      value: (0, _addonKnobs.text)('Title', 'Title')
    },
    content: {
      value: (0, _addonKnobs.text)()
    }
  }
};
var WithImage = Template.bind({});
exports.WithImage = WithImage;
WithImage.args = {
  model: {
    heading: {
      value: (0, _addonKnobs.text)('Title', 'Title')
    },
    content: {
      value: (0, _addonKnobs.text)('WithImage', '<p>Lorem ipsum dolor sit amet, </br> <img src="https://picsum.photos/200/300"/> </br> consectetur adipiscing elit. Vestibulum viverra est orci, in rutrum massa interdum sit amet. Quisque nunc sem, accumsan a imperdiet nec, mollis sit amet arcu. Suspendisse interdum ligula ac neque interdum, id facilisis magna ornare. Nam non rhoncus felis. Sed sed commodo sem. Morbi diam lorem, pharetra in elementum id, ullamcorper id tortor. Maecenas quis gravida nibh. Curabitur cursus libero et sem elementum, in scelerisque eros cursus. Nulla ultricies eros ipsum, a hendrerit ligula semper vitae. Integer lobortis vitae lectus eget porttitor.</p><p>In malesuada pretium diam, quis elementum nulla volutpat a. Suspendisse ac condimentum ex. Nullam elit purus, consectetur sed eros quis, mattis pretium velit. Vivamus in sapien turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>')
    }
  }
};