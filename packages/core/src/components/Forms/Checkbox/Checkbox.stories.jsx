import React from 'react';
import { useState } from '@storybook/addons';
import { action } from '@storybook/addon-actions';

import Checkbox from '.';
import { CheckboxLabelDescription, Form } from '..';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  subcomponents: [CheckboxLabelDescription],
  argTypes: {
    checked: {
      control: {
        type: null
      }
    },
    groupIndex: {
      control: {
        type: null
      }
    }
  }
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <Form>
      <Checkbox
        checked={checked}
        onChange={(e) => {
          action('onChange')(e);
          setChecked(e.target.checked);
        }}
        {...args}
      />
    </Form>
  );
};

const defaultArgs = {
  children: 'Label',
  id: 'checkbox-example'
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const checked = Template.bind({});
checked.args = {
  ...defaultArgs,
  checked: true,
  readOnly: true
};

export const tile = Template.bind({});
tile.args = {
  ...defaultArgs,
  tile: true
};

export const tileWithOptionalText = Template.bind({});
tileWithOptionalText.args = {
  ...defaultArgs,
  tile: true,
  children: (
    <>
      {defaultArgs.children}

      <CheckboxLabelDescription>
        This is optional text that can be used to describe the label in more
        detail.
      </CheckboxLabelDescription>
    </>
  )
};
