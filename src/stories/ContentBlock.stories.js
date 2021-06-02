import React from 'react';
import { text } from '@storybook/addon-knobs';

import ContentBlock  from '../sugcon-components/ContentBlock';

export default {
  title: 'Sugcon/ContentBlock',
  component: ContentBlock,
};

const Template = (args) => <ContentBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
    model:{
        heading: {
            value: text('Title', 'Title')
        },
        content: {
            value: text('Copy', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra est orci, in rutrum massa interdum sit amet. Quisque nunc sem, accumsan a imperdiet nec, mollis sit amet arcu. Suspendisse interdum ligula ac neque interdum, id facilisis magna ornare. Nam non rhoncus felis. Sed sed commodo sem. Morbi diam lorem, pharetra in elementum id, ullamcorper id tortor. Maecenas quis gravida nibh. Curabitur cursus libero et sem elementum, in scelerisque eros cursus. Nulla ultricies eros ipsum, a hendrerit ligula semper vitae. Integer lobortis vitae lectus eget porttitor.</p><p>In malesuada pretium diam, quis elementum nulla volutpat a. Suspendisse ac condimentum ex. Nullam elit purus, consectetur sed eros quis, mattis pretium velit. Vivamus in sapien turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>')
        }
    }
}

export const EmptyContent = Template.bind({});
EmptyContent.args = {
    model:{
        heading: {
            value: text('Title', 'Title')
        },
        content: {
            value: text()
        }
    }
}

export const WithImage = Template.bind({});
WithImage.args = {
    model:{
        heading: {
            value: text('Title', 'Title')
        },
        content: {
            value: text('WithImage', '<p>Lorem ipsum dolor sit amet, </br> <img src="https://picsum.photos/200/300"/> </br> consectetur adipiscing elit. Vestibulum viverra est orci, in rutrum massa interdum sit amet. Quisque nunc sem, accumsan a imperdiet nec, mollis sit amet arcu. Suspendisse interdum ligula ac neque interdum, id facilisis magna ornare. Nam non rhoncus felis. Sed sed commodo sem. Morbi diam lorem, pharetra in elementum id, ullamcorper id tortor. Maecenas quis gravida nibh. Curabitur cursus libero et sem elementum, in scelerisque eros cursus. Nulla ultricies eros ipsum, a hendrerit ligula semper vitae. Integer lobortis vitae lectus eget porttitor.</p><p>In malesuada pretium diam, quis elementum nulla volutpat a. Suspendisse ac condimentum ex. Nullam elit purus, consectetur sed eros quis, mattis pretium velit. Vivamus in sapien turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>')
        }
    }
}