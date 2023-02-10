import React from 'react';
import { render } from '@testing-library/react';

import StepIndicator from '.';
import { StepIndicatorSegment } from '..';

describe('StepIndicator', () => {
  it('should render correctly', () => {
    const { container } = render(
      <StepIndicator current={1}>
        <StepIndicatorSegment>Step 1</StepIndicatorSegment>
        <StepIndicatorSegment>Step 2</StepIndicatorSegment>
        <StepIndicatorSegment>Step 3</StepIndicatorSegment>
      </StepIndicator>
    );

    expect(
      container.querySelector(
        '.usa-step-indicator__segment--current .usa-step-indicator__segment-label'
      ).innerHTML
    ).toBe('Step 1');
  });

  it('previous steps should be marked as completed', () => {
    const { container } = render(
      <StepIndicator current={3}>
        <StepIndicatorSegment>Step 1</StepIndicatorSegment>
        <StepIndicatorSegment>Step 2</StepIndicatorSegment>
        <StepIndicatorSegment>Step 3</StepIndicatorSegment>
      </StepIndicator>
    );

    expect(
      container.querySelectorAll('.usa-step-indicator__segment--complete')
        .length
    ).toBe(2);
  });

  it('should render steps with centered labels', () => {
    const { container } = render(
      <StepIndicator centered current={2}>
        <StepIndicatorSegment>Step 1</StepIndicatorSegment>
        <StepIndicatorSegment>Step 2</StepIndicatorSegment>
        <StepIndicatorSegment>Step 3</StepIndicatorSegment>
      </StepIndicator>
    );

    expect(container.querySelector('.usa-step-indicator--center')).toBeTruthy();
  });

  it('should render steps without labels', () => {
    const { container } = render(
      <StepIndicator current={2} labels={false}>
        <StepIndicatorSegment>Step 1</StepIndicatorSegment>
        <StepIndicatorSegment>Step 2</StepIndicatorSegment>
        <StepIndicatorSegment>Step 3</StepIndicatorSegment>
      </StepIndicator>
    );

    expect(
      container.querySelector('.usa-step-indicator--no-labels')
    ).toBeTruthy();
  });

  it('should render the "counters" variant', () => {
    const { container } = render(
      <StepIndicator counters current={2}>
        <StepIndicatorSegment>Step 1</StepIndicatorSegment>
        <StepIndicatorSegment>Step 2</StepIndicatorSegment>
        <StepIndicatorSegment>Step 3</StepIndicatorSegment>
      </StepIndicator>
    );

    expect(
      container.querySelector('.usa-step-indicator--counters')
    ).toBeTruthy();
  });

  it('should render the small "counters" variant', () => {
    const { container } = render(
      <StepIndicator counters="small" current={2}>
        <StepIndicatorSegment>Step 1</StepIndicatorSegment>
        <StepIndicatorSegment>Step 2</StepIndicatorSegment>
        <StepIndicatorSegment>Step 3</StepIndicatorSegment>
      </StepIndicator>
    );

    expect(
      container.querySelector('.usa-step-indicator--counters-sm')
    ).toBeTruthy();
  });
});
