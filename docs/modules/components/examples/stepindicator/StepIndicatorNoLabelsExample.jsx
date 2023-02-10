import React from 'react';
import {
  StepIndicator,
  StepIndicatorSegment
} from '@boozallen-uip/uswds-react-core';

export default function StepIndicatorNoLabelsExample() {
  return (
    <StepIndicator current={2} labels={false}>
      <StepIndicatorSegment>Step 1</StepIndicatorSegment>
      <StepIndicatorSegment>Step 2</StepIndicatorSegment>
      <StepIndicatorSegment>Step 3</StepIndicatorSegment>
    </StepIndicator>
  );
}
