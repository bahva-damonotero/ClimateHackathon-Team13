import React from 'react';

import { AlertOutlet } from '..';

export default function ToastOutlet() {
  return (
    <div className="bah-uswds-toast-outlets">
      {/* top */}
      <div className="bah-uswds-toast-outlet__top bah-uswds-toast-outlet__hcenter">
        <AlertOutlet multiple name="toast-top" toastOutlet />
      </div>

      {/* bottom */}
      <div className="bah-uswds-toast-outlet__bottom bah-uswds-toast-outlet__hcenter">
        <AlertOutlet multiple name="toast-bottom" reverseOrder toastOutlet />
      </div>

      {/* left */}
      <div className="bah-uswds-toast-outlet__left bah-uswds-toast-outlet__vcenter">
        <AlertOutlet multiple name="toast-left" toastOutlet />
      </div>

      {/* right */}
      <div className="bah-uswds-toast-outlet__right bah-uswds-toast-outlet__vcenter">
        <AlertOutlet multiple name="toast-right" toastOutlet />
      </div>

      {/* top left */}
      <div className="bah-uswds-toast-outlet__top bah-uswds-toast-outlet__left">
        <AlertOutlet multiple name="toast-top-left" toastOutlet />
      </div>

      {/* top right */}
      <div className="bah-uswds-toast-outlet__top bah-uswds-toast-outlet__right">
        <AlertOutlet multiple name="toast-top-right" toastOutlet />
      </div>

      {/* bottom left */}
      <div className="bah-uswds-toast-outlet__bottom bah-uswds-toast-outlet__left">
        <AlertOutlet
          multiple
          name="toast-bottom-left"
          reverseOrder
          toastOutlet
        />
      </div>

      {/* bottom right */}
      <div className="bah-uswds-toast-outlet__bottom bah-uswds-toast-outlet__right">
        <AlertOutlet
          multiple
          name="toast-bottom-right"
          reverseOrder
          toastOutlet
        />
      </div>
    </div>
  );
}
