import React from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Link from '.';

describe('Link', () => {
  const body = 'Link content';

  let testLocation;

  /* eslint-disable react/prop-types */
  function LinkTestComponent({ children, ...props }) {
    return (
      <Router>
        <Link {...props}>{children}</Link>

        <Route
          path="*"
          render={({ location }) => {
            testLocation = location;
            return null;
          }}
        />
      </Router>
    );
  }
  /* eslint-enable react/prop-types */

  function getLinkNode(container) {
    return container.querySelector('a');
  }

  function clickLink(container) {
    act(() => {
      fireEvent.click(getLinkNode(container));
    });
  }

  beforeAll(() => {
    /* eslint-disable no-unused-vars, no-useless-constructor, no-empty-function, lines-between-class-members, class-methods-use-this */
    global.MutationObserver = class {
      constructor(callback) {}
      disconnect() {}
      observe(element, initObject) {}
    };
    /* eslint-enable no-unused-vars, no-useless-constructor, no-empty-function, lines-between-class-members, class-methods-use-this */
  });

  afterAll(() => {
    // reset MutationObserver so it doesn't interfere with other test specs
    global.MutationObserver = undefined;
  });

  beforeEach(() => {
    testLocation = undefined;
  });

  it('should render an internal link', () => {
    const link = '/some-internal-page';

    const { container } = render(
      <LinkTestComponent href={link}>{body}</LinkTestComponent>
    );

    clickLink(container);

    expect(getLinkNode(container).onclick).toBeTruthy();
    expect(testLocation.hash).toBe('');
    expect(testLocation.pathname).toBe(link);
  });

  it('should render an internal anchor link', () => {
    const link = '#some-section';

    const { container } = render(
      <LinkTestComponent href={link}>{body}</LinkTestComponent>
    );

    clickLink(container);

    expect(getLinkNode(container).onclick).toBeTruthy();
    expect(testLocation.pathname).toBe('/');
    expect(testLocation.hash).toBe(link);
  });

  it('should render a telephone link', () => {
    const link = 'tel:123-456-7890';

    const { container } = render(
      <LinkTestComponent href={link}>{body}</LinkTestComponent>
    );

    clickLink(container);

    expect(getLinkNode(container).onclick).toBeFalsy();
    expect(testLocation.pathName).toBe(undefined);
    expect(testLocation.hash).toBe('');
  });

  it('should render an email link', () => {
    const link = 'mailto:email@domain.com';

    const { container } = render(
      <LinkTestComponent href={link}>{body}</LinkTestComponent>
    );

    clickLink(container);

    expect(getLinkNode(container).onclick).toBeFalsy();
    expect(testLocation.pathName).toBe(undefined);
    expect(testLocation.hash).toBe('');
  });

  it('should render an implicit external link', () => {
    const link = 'http://google.com';

    const { container } = render(
      <LinkTestComponent href={link}>{body}</LinkTestComponent>
    );

    clickLink(container);

    expect(getLinkNode(container).onclick).toBeFalsy();
    expect(testLocation.pathname).toBe('/');
    expect(testLocation.hash).toBe('');
  });

  it('should render an explicit external link', () => {
    const link = '/some-page-outside-of-the-react-app';

    const { container } = render(
      <LinkTestComponent external href={link}>
        {body}
      </LinkTestComponent>
    );

    clickLink(container);

    expect(getLinkNode(container).onclick).toBeFalsy();
    expect(testLocation.pathname).toBe('/');
    expect(testLocation.hash).toBe('');
  });
});
