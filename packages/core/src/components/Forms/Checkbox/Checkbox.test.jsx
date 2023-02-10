import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Checkbox from '.';
import { CheckboxLabelDescription } from '..';

describe('Checkbox', () => {
  const id = 'checkbox-example';
  const label = 'Checkbox label';

  const CHECKBOX_SELECTOR = `#${id}.usa-checkbox__input`;
  const LABEL_SELECTOR = '.usa-checkbox__label';

  it('should render correctly', () => {
    const { container } = render(
      <Checkbox id={id} readOnly>
        {label}
      </Checkbox>
    );

    expect(container.querySelector(CHECKBOX_SELECTOR)).toBeTruthy();

    const labelNode = container.querySelector(LABEL_SELECTOR);
    expect(labelNode.innerHTML).toBe(label);
    expect(labelNode.getAttribute('for')).toBe(id);
  });

  it('should render the "tile" variant', () => {
    const labelExtra =
      'This is optional text that can be used to describe the label in more detail.';

    const { container } = render(
      <Checkbox id={id} readOnly tile>
        {label}

        <CheckboxLabelDescription>{labelExtra}</CheckboxLabelDescription>
      </Checkbox>
    );

    expect(
      container.querySelector(`#${id}.usa-checkbox__input--tile`)
    ).toBeTruthy();

    const labelNode = container.querySelector(LABEL_SELECTOR);
    const labelDescriptionNode = labelNode.querySelector(
      '.usa-checkbox__label-description'
    );

    expect(labelNode.innerHTML).toBe(label + labelDescriptionNode.outerHTML);
  });

  it('should call `onChange` when the checkbox is checked', () => {
    const onChange = jest.fn();

    const { container } = render(
      <Checkbox id={id} onChange={onChange}>
        {label}
      </Checkbox>
    );

    fireEvent.click(container.querySelector(CHECKBOX_SELECTOR));

    expect(onChange).toHaveBeenCalled();
  });
});
