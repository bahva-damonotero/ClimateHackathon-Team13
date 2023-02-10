import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import skipNavigation from '@uswds/uswds/js/usa-skipnav';

import SkipNav from '.';

describe('SkipNav', () => {
  const href = '#main-content';
  const SKIPNAV_SELECTOR = '.usa-skipnav';

  const jsx = (
    <Router>
      <SkipNav href={href} />
    </Router>
  );

  function getSkipNav(container) {
    return container.querySelector(SKIPNAV_SELECTOR);
  }

  it('should render properly', () => {
    const { container } = render(jsx);

    expect(getSkipNav(container).getAttribute('href')).toBe(href);
    expect(getSkipNav(container)).toBeTruthy();
  });

  it('should call `skipNavigation.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(skipNavigation, 'on');

    render(jsx);

    expect(onSpy).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(jsx).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
