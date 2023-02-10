import React from 'react';
import { createRoot } from 'react-dom/client';
import { act, Simulate } from 'react-dom/test-utils';

import AlertOutlet from '.';
import { AlertService, ServiceProvider } from '../../services';
import { AlertInstance } from '../../types';

describe('AlertOutlet', () => {
  const name = 'test-outlet';
  let div;
  let root;
  let services;

  const alert1 = new AlertInstance({
    content: 'test 1',
    type: 'info'
  });
  const alert2 = new AlertInstance({
    content: 'test 2',
    type: 'warning'
  });
  const closableAlert = new AlertInstance({
    closable: true,
    content: 'test content',
    type: 'info'
  });

  function getAlerts() {
    return div.querySelectorAll('.usa-alert');
  }

  beforeEach(() => {
    div = document.createElement('div');
    root = createRoot(div);
    services = { AlertService: new AlertService() };
  });

  afterEach(() => {
    root.unmount();
  });

  describe('single', () => {
    beforeEach(() => {
      act(() => {
        root.render(
          <ServiceProvider value={services}>
            <AlertOutlet name={name} />
          </ServiceProvider>
        );
      });
    });

    it('should receive an alert', async () => {
      await act(async () => {
        await services.AlertService.showAlert(name, alert1);
      });
      expect(getAlerts().length).toEqual(1);
    });

    it('a second alert should replace the first', async () => {
      await act(async () => {
        await services.AlertService.showAlert(name, alert1);
        await services.AlertService.showAlert(name, alert2);
      });
      expect(getAlerts().length).toEqual(1);
    });

    it('should be able to close an alert', async () => {
      await act(async () => {
        await services.AlertService.showAlert(name, closableAlert);
      });

      const closeButton = div.querySelector('.bah-uswds-alert__close-button');
      expect(closeButton).toBeTruthy();

      await act(async () => {
        Simulate.click(closeButton);
      });
      expect(getAlerts().length).toEqual(0);
    });
  });

  describe('multiple', () => {
    beforeEach(() => {
      act(() => {
        root.render(
          <ServiceProvider value={services}>
            <AlertOutlet name={name} multiple />
          </ServiceProvider>
        );
      });
    });

    it('should receive alerts in the normal order', async () => {
      await act(async () => {
        await services.AlertService.showAlert(name, alert1);
      });
      const firstAlert = getAlerts()[0];

      await act(async () => {
        await services.AlertService.showAlert(name, alert2);
      });
      expect(getAlerts()[0]).toEqual(firstAlert);
    });

    it('should be able to close an alert', async () => {
      await act(async () => {
        await services.AlertService.showAlert(name, alert1);
        await services.AlertService.showAlert(name, closableAlert);
      });
      const firstAlert = getAlerts()[0];

      const closeButton = div.querySelector('.bah-uswds-alert__close-button');
      expect(closeButton).toBeTruthy();

      await act(async () => {
        Simulate.click(closeButton);
      });
      const alerts = getAlerts();
      expect(alerts.length).toEqual(1);
      expect(alerts[0]).toEqual(firstAlert);
    });
  });

  describe('multiple & reverse order', () => {
    beforeEach(() => {
      act(() => {
        root.render(
          <ServiceProvider value={services}>
            <AlertOutlet name={name} multiple reverseOrder />
          </ServiceProvider>
        );
      });
    });

    it('should receive alerts in reverse order', async () => {
      await act(async () => {
        await services.AlertService.showAlert(name, alert1);
      });
      const firstAlert = getAlerts()[0];

      await act(async () => {
        await services.AlertService.showAlert(name, alert2);
      });
      expect(getAlerts()[1]).toEqual(firstAlert);
    });

    it('should be able to close an alert', async () => {
      await act(async () => {
        await services.AlertService.showAlert(name, alert1);
        await services.AlertService.showAlert(name, closableAlert);
      });
      const firstAlert = getAlerts()[1];

      const closeButton = div.querySelector('.bah-uswds-alert__close-button');
      expect(closeButton).toBeTruthy();

      await act(async () => {
        Simulate.click(closeButton);
      });
      const alerts = getAlerts();
      expect(alerts.length).toEqual(1);
      expect(alerts[0]).toEqual(firstAlert);
    });
  });
});
