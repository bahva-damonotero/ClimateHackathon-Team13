import React from 'react';

import Tag from '.';

export default {
  title: 'Tag',
  component: Tag
};

const Template = (args) => <Tag {...args} />;

const defaultArgs = {
  children: 'New'
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const large = Template.bind({});
large.args = {
  ...defaultArgs,
  large: true
};
