import React from 'react';
import { render } from '@testing-library/react';

import FooterLogo from '.';

describe('FooterLogo', () => {
  it('should throw an error when `logoSrc` is provided but `logoDesc` is not.', () => {
    expect(() => {
      render(
        <FooterLogo logoSrc="some-image.png">Booz Allen Hamilton</FooterLogo>
      );
    }).toThrow('`logoDesc` must be provided when using `logoSrc`.');
  });
});
