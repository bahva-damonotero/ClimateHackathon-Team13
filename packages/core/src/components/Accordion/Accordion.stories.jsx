import React from 'react';

import Accordion from '.';

export default {
  title: 'Accordion',
  component: Accordion
};

const Template = (args) => <Accordion expanded {...args} />;

const defaultArgs = {
  heading: 'Accordion Heading',
  children:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.',
  id: 'accordion-example'
};

export const borderless = Template.bind({});
borderless.args = {
  ...defaultArgs
};

export const bordered = Template.bind({});
bordered.args = {
  ...defaultArgs,
  border: true
};
