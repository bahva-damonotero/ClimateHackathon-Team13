import React from 'react';
import { action } from '@storybook/addon-actions';

import FileInput from '.';
import { Form } from '..';

export default {
  title: 'Forms/FileInput',
  component: FileInput
};

const Template = (args) => (
  <Form>
    <FileInput {...args} />
  </Form>
);

const defaultArgs = {
  children: 'Label',
  id: 'fileinput-example',
  onChange: action('onChange')
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const fileTypesRestriction = Template.bind({});
fileTypesRestriction.args = {
  ...defaultArgs,
  accept: 'application/pdf,text/plain',
  hint: 'Select PDF or TXT files'
};

export const multipleFiles = Template.bind({});
multipleFiles.args = {
  ...defaultArgs,
  multiple: true
};
