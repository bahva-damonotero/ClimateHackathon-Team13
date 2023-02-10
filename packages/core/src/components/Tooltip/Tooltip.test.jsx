import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import tooltip from '@uswds/uswds/js/usa-tooltip';

import Tooltip from '.';
import { Button } from '..';

describe('Tooltip', () => {
  const content = 'Tooltip content';

  const jsx = (
    <Tooltip content={content}>
      <Button>Tooltip example</Button>
    </Tooltip>
  );

  it('should render correctly', () => {
    const { container } = render(jsx);

    const tooltipNode = container.querySelector(
      '.bah-uswds-tooltip .usa-tooltip'
    );

    expect(
      tooltipNode.querySelector('.usa-tooltip__trigger').dataset.position
    ).toBe('right');

    expect(tooltipNode.querySelector('.usa-tooltip__body').innerHTML).toBe(
      content
    );
  });

  it('should call `tooltip.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(tooltip, 'on');

    render(jsx);

    expect(onSpy).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(jsx).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
