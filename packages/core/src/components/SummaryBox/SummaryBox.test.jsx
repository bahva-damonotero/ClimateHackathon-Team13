import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import SummaryBox from '.';

describe('SummaryBox', () => {
  const heading = 'Key information';

  const jsx = (
    <SummaryBox heading={heading}>
      <li>
        If you are under a winter storm warning,{' '}
        <a className="usa-summary-box__link" href="#usa-anchor-find-shelter">
          find shelter
        </a>{' '}
        right away.
      </li>

      <li>
        Sign up for{' '}
        <a className="usa-summary-box__link" href="#usa-anchor-warning-system">
          your community’s warning system
        </a>
        .
      </li>

      <li>
        Learn the signs of, and basic treatments for,{' '}
        <a className="usa-summary-box__link" href="#usa-anchor-frostbite">
          frostbite
        </a>{' '}
        and{' '}
        <a className="usa-summary-box__link" href="#usa-anchor-hypothermia">
          hypothermia
        </a>
        .
      </li>

      <li>
        Gather emergency supplies for your{' '}
        <a className="usa-summary-box__link" href="#usa-anchor-home">
          home
        </a>{' '}
        and your{' '}
        <a className="usa-summary-box__link" href="#usa-anchor-car">
          car
        </a>
        .
      </li>
    </SummaryBox>
  );

  it('should render correctly', () => {
    const { container } = render(jsx);

    expect(container.querySelector('.usa-summary-box')).toBeTruthy();
    expect(container.querySelector('.usa-summary-box__heading').innerHTML).toBe(
      heading
    );
  });

  it('should match snapshot', () => {
    const tree = renderer.create(jsx).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
