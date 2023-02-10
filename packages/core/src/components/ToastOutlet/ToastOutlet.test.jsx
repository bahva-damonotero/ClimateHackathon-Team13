import React from 'react';
import { render } from '@testing-library/react';

import AlertOutlet from '.';
import { AlertService, ServiceProvider } from '../../services';

describe('ToastOutlet', () => {
  it('should register 8 outlets', () => {
    const services = { AlertService: new AlertService() };

    render(
      <ServiceProvider value={services}>
        <AlertOutlet name />
      </ServiceProvider>
    );

    expect(services.AlertService.outlets.size).toEqual(8);
  });
});
