import React from 'react';
import { render } from '@testing-library/react';
import spriteSvg from '@uswds/uswds/img/sprite.svg';

import IconListIcon from '.';

describe('IconListIcon', () => {
  it('should throw an error if `children` and `sprite` are not provided', () => {
    expect(() => {
      render(<IconListIcon identifier="check_cirlce" />);
    }).toThrow(
      'If not using `children` to pass in a custom icon, you must provide `sprite` AND `identifier`.'
    );
  });

  it('should throw an error if `children` and `identifier` are not provided', () => {
    expect(() => {
      render(<IconListIcon sprite={spriteSvg} />);
    }).toThrow(
      'If not using `children` to pass in a custom icon, you must provide `sprite` AND `identifier`.'
    );
  });
});
