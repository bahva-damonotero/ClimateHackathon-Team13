import React from 'react';
import spriteSvg from '@uswds/uswds/img/sprite.svg';

import Input from '.';
import { Form, InputPrefix, InputSuffix } from '..';

export default {
  title: 'Forms/Input',
  component: Input
};

const Template = (args) => (
  <Form>
    <Input {...args} />
  </Form>
);

const creditCardSvg = (
  <svg role="img" focusable="false" className="usa-icon">
    <use
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xlinkHref={`${spriteSvg}#credit_card`}
    />
  </svg>
);

const defaultArgs = {
  children: 'Label',
  id: 'input-example'
};

export const textInput = Template.bind({});
textInput.args = {
  ...defaultArgs
};

export const textArea = Template.bind({});
textArea.args = {
  ...defaultArgs,
  type: 'textarea'
};

export const passwordInput = Template.bind({});
passwordInput.args = {
  ...defaultArgs,
  type: 'password'
};

export const numberInput = Template.bind({});
numberInput.args = {
  ...defaultArgs,
  type: 'number'
};

export const disabled = Template.bind({});
disabled.args = {
  ...defaultArgs,
  disabled: true
};

export const error = Template.bind({});
error.args = {
  ...defaultArgs,
  error: 'Error with form field'
};

export const success = Template.bind({});
success.args = {
  ...defaultArgs,
  success: true
};

export const inputWidth = Template.bind({});
inputWidth.args = {
  ...defaultArgs,
  inputWidth: 'sm'
};

export const prefix = Template.bind({});
prefix.args = {
  ...defaultArgs,
  children: (
    <>
      <InputPrefix>{creditCardSvg}</InputPrefix>
      Cost
      <span className="usa-sr-only">Cost Input Prefixed with Dollar Sign</span>
    </>
  )
};

export const prefixWithError = Template.bind({});
prefixWithError.args = {
  ...defaultArgs,
  error: true,
  children: (
    <>
      <InputPrefix>{creditCardSvg}</InputPrefix>
      Cost
      <span className="usa-sr-only">Cost Input Prefixed with Dollar Sign</span>
    </>
  )
};

export const suffix = Template.bind({});
suffix.args = {
  ...defaultArgs,
  inputWidth: 'sm',
  children: (
    <>
      Weight, in pounds
      <InputSuffix>lbs.</InputSuffix>
    </>
  )
};

export const prefixAndSuffix = Template.bind({});
prefixAndSuffix.args = {
  ...defaultArgs,
  children: (
    <>
      <InputPrefix>$</InputPrefix>
      Total Cost
      <InputSuffix>.00</InputSuffix>
    </>
  )
};
