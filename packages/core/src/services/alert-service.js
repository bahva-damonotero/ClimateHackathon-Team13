import { Subject } from 'rxjs';

export default class AlertService {
  constructor() {
    this.outlets = new Map();
  }

  registerOutlet(name, multiple = false, toastOutlet = false) {
    if (this.outlets.has(name)) {
      throw new Error('An outlet with that name already exists.');
    }

    const subject = new Subject();
    this.outlets.set(name, {
      alerts: [],
      multiple,
      subject,
      toastOutlet
    });
    return subject.asObservable();
  }

  unregisterOutlet(name) {
    if (!this.outlets.has(name)) {
      throw new Error('No outlet exists with that name.');
    }

    this.outlets.delete(name);
  }

  async showAlert(outletName, alert) {
    // wait for the stack to clear
    await new Promise((resolve) => setTimeout(resolve));

    // get the outlet
    const outlet = this.getOutlet(outletName);

    // clone the alert
    const alertCopy = { ...alert };

    // toasts should be closable and have the 'alert' role
    if (outlet.toastOutlet) {
      alertCopy.closable = true;
      alertCopy.role = 'alert';
    }

    // if the outlet doesn't support multiple alerts,
    // clear the alerts array
    if (!outlet.multiple) outlet.alerts = [];

    // add the alert and send the new list to the outlet
    outlet.alerts.push(alertCopy);
    outlet.subject.next(outlet.alerts);

    // set timeout (if provided)
    const { timeout } = alertCopy;

    if (timeout) {
      const alertUuid = alertCopy.uuid;

      setTimeout(() => {
        outlet.alerts.find(({ uuid }) => uuid === alertUuid).fadeOut = true;
        outlet.subject.next(outlet.alerts);
      }, timeout);
    }
  }

  closeAlert(outletName, alertIndex) {
    const outlet = this.getOutlet(outletName);

    // remove the alert and send the new list to the outlet
    outlet.alerts.splice(alertIndex, 1);
    outlet.subject.next(outlet.alerts);
  }

  getOutlet(name) {
    const outlet = this.outlets.get(name);
    if (!outlet) {
      throw new Error('No outlet exists with that name.');
    }
    return outlet;
  }
}
