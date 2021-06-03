import React from 'react';

import { SampleComponent } from '../../sugcon-components/SampleComponent';

export default {
  title: 'Sugcon/Sample Component',
  component: SampleComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    
  },
};

const Template = (args) => <SampleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: null,
  heading: 'This is a heading',
  content: 'Hi this should be a bunch of content'
};

export const BlueBackground = Template.bind({});
BlueBackground.args = {
  backgroundColor: 'aqua',
  heading: 'This is second heading',
  content: 'This is much longer content. I mean not really, but you can imagine'
};