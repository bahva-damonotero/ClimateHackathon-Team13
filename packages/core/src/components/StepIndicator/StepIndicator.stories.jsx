import React from 'react';

import StepIndicator from '.';
import { StepIndicatorSegment } from '..';

export default {
  title: 'StepIndicator',
  component: StepIndicator,
  subcomponents: {
    StepIndicatorSegment
  },
  argTypes: {
    counters: {
      control: {
        options: {
          false: false,
          true: true,
          small: 'small'
        }
      }
    }
  }
};

const Template = (args) => (
  <StepIndicator {...args}>
    <StepIndicatorSegment>Step 1</StepIndicatorSegment>
    <StepIndicatorSegment>Step 2</StepIndicatorSegment>
    <StepIndicatorSegment>Step 3</StepIndicatorSegment>
  </StepIndicator>
);

const defaultArgs = {
  current: 2
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const noLabels = Template.bind({});
noLabels.args = {
  ...defaultArgs,
  labels: false
};

export const centered = Template.bind({});
centered.args = {
  ...defaultArgs,
  centered: true
};

export const counters = Template.bind({});
counters.args = {
  ...defaultArgs,
  counters: true
};

export const smallCounters = Template.bind({});
smallCounters.args = {
  ...defaultArgs,
  counters: 'small'
};
