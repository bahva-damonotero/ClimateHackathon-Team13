import React from 'react';
import { action } from '@storybook/addon-actions';

import Alert from '.';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    role: {
      control: {
        type: 'select',
        options: {
          undefined,
          alert: 'alert',
          alertdialog: 'alertdialog'
        }
      },
      defaultValue: undefined
    }
  }
};

const Template = (args) => <Alert {...args} />;

const defaultArgs = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.',
  heading: 'Alert heading',
  type: 'info'
};

export const info = Template.bind({});
info.args = {
  ...defaultArgs,
  heading: 'Info status'
};

export const success = Template.bind({});
success.args = {
  ...defaultArgs,
  heading: 'Success status',
  type: 'success'
};

export const warning = Template.bind({});
warning.args = {
  ...defaultArgs,
  heading: 'Warning status',
  type: 'warning'
};

export const error = Template.bind({});
error.args = {
  ...defaultArgs,
  heading: 'Error status',
  type: 'error'
};

export const closeButton = Template.bind({ args: {} });
closeButton.args = {
  ...defaultArgs,
  onClose: action('onClose')
};

export const noHeader = Template.bind({});
noHeader.args = {
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
