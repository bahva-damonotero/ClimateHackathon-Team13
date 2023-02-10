import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Radio from '.';
import { RadioLabelDescription } from '..';

describe('Radio', () => {
  const label = 'Radio label';

  const groupId = 'radio-group-example';
  const groupIndex = 0;
  const radioId = `${groupId}--${groupIndex}`;

  const RADIO_SELECTOR = `.usa-radio__input`;
  const LABEL_SELECTOR = '.usa-radio__label';

  it('should render correctly', () => {
    const { container } = render(
      <Radio groupId={groupId} groupIndex={groupIndex} readOnly>
        {label}
      </Radio>
    );

    expect(container.querySelector(RADIO_SELECTOR)).toBeTruthy();

    const labelNode = container.querySelector(LABEL_SELECTOR);
    expect(labelNode.innerHTML).toBe(label);
    expect(labelNode.getAttribute('for')).toBe(radioId);
  });

  it('should render the "tile" variant', () => {
    const labelExtra =
      'This is optional text that can be used to describe the label in more detail.';

    const { container } = render(
      <Radio groupId={groupId} groupIndex={groupIndex} readOnly tile>
        {label}

        <RadioLabelDescription>{labelExtra}</RadioLabelDescription>
      </Radio>
    );

    const labelNode = container.querySelector(LABEL_SELECTOR);
    const labelDescriptionNode = labelNode.querySelector(
      '.usa-radio__label-description'
    );

    expect(labelNode.innerHTML).toBe(label + labelDescriptionNode.outerHTML);
  });

  it('calls `onChange` with the label', () => {
    const onChange = jest.fn();

    const { container } = render(<Radio onChange={onChange}>{label}</Radio>);

    fireEvent.click(container.querySelector('.usa-radio__input'));

    expect(onChange).toHaveBeenCalledWith(label);
  });

  it('calls `onChange` with the value', () => {
    const value = { some: 'object', with: 'keys & values' };
    const onChange = jest.fn();

    const { container } = render(
      <Radio onChange={onChange} value={value}>
        {label}
      </Radio>
    );

    fireEvent.click(container.querySelector('.usa-radio__input'));

    expect(onChange).toHaveBeenCalledWith(value);
  });
});
