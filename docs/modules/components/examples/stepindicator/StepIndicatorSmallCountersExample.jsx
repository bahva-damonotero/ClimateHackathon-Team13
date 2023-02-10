import React from 'react';
import {
  StepIndicator,
  StepIndicatorSegment
} from '@boozallen-uip/uswds-react-core';

export default function StepIndicatorSmallCountersExample() {
  return (
    <StepIndicator counters="small" current={2}>
      <StepIndicatorSegment>Step 1</StepIndicatorSegment>
      <StepIndicatorSegment>Step 2</StepIndicatorSegment>
      <StepIndicatorSegment>Step 3</StepIndicatorSegment>
    </StepIndicator>
  );
}
