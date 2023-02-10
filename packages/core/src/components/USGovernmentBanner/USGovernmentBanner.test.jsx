import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import accordion from '@uswds/uswds/js/usa-accordion';

import USGovernmentBanner from '.';

describe('USGovernmentBanner', () => {
  it('should match snapshot (.gov)', () => {
    const tree = renderer.create(<USGovernmentBanner />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot (.mil)', () => {
    const tree = renderer.create(<USGovernmentBanner domain="mil" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call `accordion.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(accordion, 'on');

    render(<USGovernmentBanner />);

    expect(onSpy).toHaveBeenCalled();
  });
});
