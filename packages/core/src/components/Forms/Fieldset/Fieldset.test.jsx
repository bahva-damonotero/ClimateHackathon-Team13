import React from 'react';
import { render } from '@testing-library/react';

import Fieldset from '.';

describe('Fieldset', () => {
  it('should render correctly', () => {
    const content = 'Fieldset content';

    const { container } = render(<Fieldset>{content}</Fieldset>);

    expect(container.querySelector('fieldset.usa-fieldset').innerHTML).toBe(
      content
    );
  });
});
