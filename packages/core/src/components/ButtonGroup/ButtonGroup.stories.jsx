import React from 'react';

import ButtonGroup from '.';
import { Button, ButtonGroupItem } from '..';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
  subcomponents: {
    ButtonGroupItem
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
};

const defaultArgs = {
  children: (
    <>
      <ButtonGroupItem>
        <Button>Button 1</Button>
      </ButtonGroupItem>

      <ButtonGroupItem>
        <Button outline>Button 2</Button>
      </ButtonGroupItem>

      <ButtonGroupItem>
        <Button outline>Button 3</Button>
      </ButtonGroupItem>
    </>
  )
};

const Template = (args) => <ButtonGroup {...args} />;

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const segmented = Template.bind({});
segmented.args = {
  ...defaultArgs,
  segmented: true
};
