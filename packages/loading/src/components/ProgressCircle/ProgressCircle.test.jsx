import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import ProgressCircle from '.';

describe('ProgressCircle', () => {
  const color = 'blue';
  const fontFamily = '';
  const fontWeight = 'normal';
  const size = 80;
  const strokeWidth = 10;
  const value = 10.5;
  const title = `Progress:${value}%`;

  const PROGRESS_SELECTOR =
    '.bah-uswds-progress-circle > .bah-uswds-loading--sr-text';
  const CIRCLE_SELECTOR = '.bah-uswds-progress-circle';

  const jsx = (
    <ProgressCircle
      color={color}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      size={size}
      strokeWidth={strokeWidth}
      value={value}
    />
  );

  function getProgressTitle(container) {
    return container.querySelector(PROGRESS_SELECTOR);
  }

  function getProgressCircle(container) {
    return container.querySelector(CIRCLE_SELECTOR);
  }

  it('should render properly', () => {
    const { container } = render(jsx);

    expect(getProgressCircle(container).children.length).toBe(2);
    expect(getProgressTitle(container).innerHTML).toBe(title);
    expect(
      getProgressCircle(container).querySelector('.bah-uswds-loading--sr-text')
    ).toBeTruthy();
    expect(getProgressCircle(container).getAttribute('aria-live')).toBe(
      'assertive'
    );
    expect(getProgressCircle(container).getAttribute('role')).toBe('alert');
    expect(getProgressCircle(container).getAttribute('style')).toBe(
      'width: 80px; height: 80px;'
    );
    expect(container.querySelector('text').getAttribute('y')).toBe(
      '38.857142857142854'
    );
    expect(container.querySelector('text').getAttribute('x')).toBe('40');
    expect(container.querySelector('path').getAttribute('stroke')).toBe('blue');
  });

  it('should render a decimal number when rounded is false', () => {
    const { container } = render(
      <ProgressCircle
        color={color}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        rounded={false}
        size={size}
        strokeWidth={strokeWidth}
        value={value}
      />
    );

    expect(getProgressTitle(container).innerHTML).toBe(title);
  });

  it('should render a rounded number when rounded variable is true', () => {
    const { container } = render(jsx);

    expect(container.querySelector('text').innerHTML).toBe('10%');
  });

  it('should match snapshot', () => {
    const tree = renderer.create(jsx).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
