import AlertService from './alert-service';
import { AlertInstance } from '../types';

describe('AlertService', () => {
  let service;

  beforeEach(() => {
    service = new AlertService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('registerOutlet', () => {
    it('should throw an error when trying to register an outlet name that is already in use', () => {
      const outletName = 'test-outlet';

      expect(() => {
        service.registerOutlet(outletName);
      }).not.toThrow();

      expect(() => {
        service.registerOutlet(outletName);
      }).toThrowErrorMatchingInlineSnapshot(
        `"An outlet with that name already exists."`
      );
    });
  });

  describe('unregisterOutlet', () => {
    it('should throw an error when trying to unregister an outlet that does not exist', () => {
      expect(() => {
        service.unregisterOutlet('outlet-that-does-not-exist');
      }).toThrowErrorMatchingInlineSnapshot(
        `"No outlet exists with that name."`
      );
    });
  });

  describe('showAlert', () => {
    const alert = new AlertInstance({
      content: 'content',
      type: 'info'
    });

    it('should throw an error when given an outlet that does not exist', async () => {
      await expect(
        service.showAlert('outlet-that-does-not-exist', alert)
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `"No outlet exists with that name."`
      );
    });

    it('should set closable to true and role to "alert" for toast alerts', (done) => {
      const outletName = 'test-outlet';
      service.registerOutlet(outletName, true, true).subscribe((alerts) => {
        expect(alerts.length).toEqual(1);
        expect(alerts[0].closable).toEqual(true);
        expect(alerts[0].role).toEqual('alert');

        done();
      });
      done();
      service.showAlert(outletName, alert);
    });
  });

  describe('closeAlert', () => {
    it('should throw an error when given an outlet that does not exist', () => {
      expect(() => {
        service.closeAlert('outlet-that-does-not-exist', 0);
      }).toThrowErrorMatchingInlineSnapshot(
        `"No outlet exists with that name."`
      );
    });
  });
});
