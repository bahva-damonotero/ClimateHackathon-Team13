import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Range from '.';

describe('Range', () => {
  const id = 'range-example';
  const label = 'Range label';

  const RANGE_SELECTOR = `#${id}.usa-range`;
  const LABEL_SELECTOR = '.usa-label';

  const jsx = (
    <Range id={id} max={100} min={0}>
      {label}
    </Range>
  );

  it('should render correctly', () => {
    const { container } = render(jsx);

    expect(container.querySelector(RANGE_SELECTOR)).toBeTruthy();

    const labelNode = container.querySelector(LABEL_SELECTOR);
    expect(labelNode.innerHTML).toBe(label);
    expect(labelNode.getAttribute('for')).toBe(id);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(jsx).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
