import React from 'react';
import { action } from '@storybook/addon-actions';

import Search from '.';

export default {
  title: 'Search',
  component: Search
};

const Template = (args) => <Search onSearch={action('onSearch')} {...args} />;

export const medium = Template.bind({});
medium.storyName = 'Default (Medium)';

export const small = Template.bind({});
small.args = {
  size: 'small'
};

export const large = Template.bind({});
large.args = {
  size: 'large'
};

export const placeholder = Template.bind({});
placeholder.args = {
  placeholder: 'Placeholder text'
};
