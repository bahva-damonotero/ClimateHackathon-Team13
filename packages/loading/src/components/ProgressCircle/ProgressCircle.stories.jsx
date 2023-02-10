import React from 'react';

import ProgressCircle from '.';

export default {
  title: 'Loading Indicators/ProgressCircle',
  component: ProgressCircle
};

const Template = (args) => <ProgressCircle {...args} />;

export const differentColor = Template.bind({});
differentColor.args = {
  color: 'red',
  value: 100
};

export const noPercentage = Template.bind({});
noPercentage.args = {
  showPercentage: false,
  value: 75.5
};

export const noRounding = Template.bind({});
noRounding.args = {
  rounded: false,
  value: 75.5
};

export const differentStrokeWidth = Template.bind({});
differentStrokeWidth.args = {
  strokeWidth: 5,
  value: 75.5
};

export const fontOverrides = Template.bind({});
fontOverrides.args = {
  fontFamily: 'Verdana',
  fontSize: 12,
  fontWeight: 'bold',
  value: 45
};
