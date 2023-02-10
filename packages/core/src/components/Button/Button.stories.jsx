import React from 'react';

import Button from '.';

export default {
  title: 'Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

const defaultArgs = {
  children: 'Button'
};

export const primary = Template.bind({});
primary.args = {
  ...defaultArgs,
  primary: true
};

export const secondary = Template.bind({});
secondary.args = {
  ...defaultArgs,
  secondary: true
};

export const accentCool = Template.bind({});
accentCool.args = {
  ...defaultArgs,
  accentCool: true
};

export const base = Template.bind({});
base.args = {
  ...defaultArgs,
  base: true
};

export const outline = Template.bind({});
outline.args = {
  ...defaultArgs,
  outline: true
};

export const inverseOutline = Template.bind({});
inverseOutline.args = {
  ...defaultArgs,
  outline: true,
  inverse: true
};

export const disabled = Template.bind({});
disabled.args = {
  ...defaultArgs,
  disabled: true
};

export const big = Template.bind({});
big.args = {
  ...defaultArgs,
  big: true
};

export const unstyled = Template.bind({});
unstyled.args = {
  ...defaultArgs,
  unstyled: true
};

export const buttonAsALink = Template.bind({});
buttonAsALink.args = {
  ...defaultArgs,
  href: 'https://www.boozallen.com/'
};
