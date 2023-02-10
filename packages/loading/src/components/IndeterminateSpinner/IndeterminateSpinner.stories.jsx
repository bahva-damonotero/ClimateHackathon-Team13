import React from 'react';

import IndeterminateSpinner from '.';

export default {
  title: 'Loading Indicators/IndeterminateSpinner',
  component: IndeterminateSpinner
};

const Template = (args) => <IndeterminateSpinner {...args} />;

export const spinner = Template.bind({});
