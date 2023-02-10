import React from 'react';

import AccordionGroup from '.';
import { AccordionItem } from '..';

export default {
  title: 'AccordionGroup',
  component: AccordionGroup,
  subcomponents: {
    AccordionItem
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
};

const Template = (args) => <AccordionGroup {...args} />;

const defaultArgs = {
  children: (
    <>
      <AccordionItem expanded heading="Accordion Heading 1" id="accordion-1">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </AccordionItem>

      <AccordionItem heading="Accordion Heading 2" id="accordion-2">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </AccordionItem>

      <AccordionItem heading="Accordion Heading 3" id="accordion-3">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </AccordionItem>
    </>
  )
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

export const multiselectable = Template.bind({});
multiselectable.args = {
  ...defaultArgs,
  multiselect: true
};
