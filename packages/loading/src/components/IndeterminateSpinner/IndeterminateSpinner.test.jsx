import React from 'react';
import { render, waitFor } from '@testing-library/react';

import IndeterminateSpinner from '.';

describe('IndeterminateSpinner', () => {
  const size = 42;

  it('should use the right size animation for the rotating-plane type', (done) => {
    const { container } = render(
      <IndeterminateSpinner size={size} type="rotating-plane" />
    );

    waitFor(() => {
      expect(
        container.querySelector('.bah-uswds-spinner--rotating-plane').style
          .cssText
      ).toEqual(
        `animation: bah-uswds-spinner-rotatePlane-${size} 1.2s infinite ease-in-out;`
      );

      done();
    });
  });

  it('should use the right size animation for the wandering-cubes type', (done) => {
    const { container } = render(
      <IndeterminateSpinner size={size} type="wandering-cubes" />
    );

    waitFor(() => {
      expect(
        container.querySelector(
          '.bah-uswds-spinner--wandering-cubes > *:first-child'
        ).style.cssText
      ).toEqual(
        `animation: bah-uswds-spinner-wanderingCube-${size} 1.8s ease-in-out -1.8s infinite both;`
      );

      done();
    });
  });
});
