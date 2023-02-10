import React from 'react';
import { action } from '@storybook/addon-actions';

import SiteAlert from '.';

export default {
  title: 'SiteAlert',
  component: SiteAlert
};

const Template = (args) => <SiteAlert {...args} />;

const defaultArgs = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.',
  heading: 'Alert message'
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const emergency = Template.bind({});
emergency.args = {
  ...defaultArgs,
  emergency: true,
  heading: 'Emergency alert message'
};

export const closeButton = Template.bind({ args: {} });
closeButton.args = {
  ...defaultArgs,
  onClose: action('onClose')
};

export const noHeading = Template.bind({});
noHeading.args = {
  ...defaultArgs,
  heading: undefined
};

export const noIcon = Template.bind({});
noIcon.args = {
  ...defaultArgs,
  icon: false
};

export const slim = Template.bind({});
slim.args = {
  ...defaultArgs,
  heading: undefined,
  slim: true
};

export const withList = Template.bind({});
withList.args = {
  ...defaultArgs,
  children: (
    <ul className="usa-list">
      <li>Item one</li>
      <li>Item two</li>
    </ul>
  )
};
withList.argTypes = {
  children: {
    type: null
  }
};
