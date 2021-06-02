import React from 'react';
import { text } from '@storybook/addon-knobs';

import {MegaHero}  from '../sugcon-components/MegaHero';

export default {
  title: 'Sugcon/MegaHero',
  component: MegaHero,
};

const Template = (args) => <MegaHero {...args} />;

export const Default = Template.bind({});
Default.args = {
    model:{
        heading: {
            value: text('Title', 'MegaHero title')
        },
        lead: {
            value: text('Lead', 'MegaHero Lead text')
        },
        text: {
            value: text('Text', 'Click on the mega hero buttons')
        },
        primaryLink: {
            href: 'https://google.com/',
            text: 'Go to Google'
        },
        secondaryLink:{
            href: 'https://jss.sitecore.com/',
            text: 'Go to JSS Docs'
        },
        image:{
            src: 'https://picsum.photos/1800/400',
            alt: 'placeholder image'
        }
    }
}
