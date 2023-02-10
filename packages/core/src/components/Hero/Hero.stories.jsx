/* eslint-disable react/prop-types */
import React from 'react';

import Hero from '.';

export default {
  title: 'Hero',
  component: Hero
};

const Template = ({ children, ...args }) => (
  <Hero {...args}>
    <p>{children}</p>
  </Hero>
);

const defaultArgs = {
  heading: 'Hero Heading',
  children:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.'
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const rightAlign = Template.bind({});
rightAlign.args = {
  ...defaultArgs,
  align: 'right'
};

export const noHeading = Template.bind({});
noHeading.args = {
  ...defaultArgs,
  heading: undefined
};

export const differentBackground = Template.bind({});
differentBackground.args = {
  ...defaultArgs,
  background:
    'https://pbs.twimg.com/profile_banners/17375116/1556652886/1500x500'
};
