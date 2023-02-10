import React from 'react';
import {
  StepIndicator,
  StepIndicatorSegment
} from '@boozallen-uip/uswds-react-core';

export default function StepIndicatorExample() {
  return (
    <StepIndicator current={2}>
      <StepIndicatorSegment>Step 1</StepIndicatorSegment>
      <StepIndicatorSegment>Step 2</StepIndicatorSegment>
      <StepIndicatorSegment>Step 3</StepIndicatorSegment>
    </StepIndicator>
  );
}
