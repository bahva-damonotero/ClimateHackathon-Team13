import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Alert } from '..';
import { useAlertService } from '../../services';

export default function AlertOutlet({
  multiple,
  name,
  reverseOrder,
  toastOutlet
}) {
  const alertService = useAlertService();

  const [alerts, setAlerts] = useState([]);
  const [subscription, setSubscription] = useState();

  function receiveAlerts(receivedAlerts) {
    const newAlerts = [...receivedAlerts];
    if (reverseOrder) newAlerts.reverse();
    setAlerts(newAlerts);
  }

  function onAlertClose(alertIndex) {
    alertService.closeAlert(
      name,
      reverseOrder ? alerts.length - 1 - alertIndex : alertIndex
    );
  }

  // on load
  useEffect(() => {
    setSubscription(
      alertService
        .registerOutlet(name, multiple, toastOutlet)
        .subscribe(receiveAlerts)
    );

    // on unload
    return () => {
      if (subscription) {
        subscription.unsubscribe();
        alertService.unregisterOutlet(name);
      }
    };
  }, []);

  return alerts.length ? (
    alerts.map(
      (
        { closable, content, fadeOut, heading, icon, role, slim, type, uuid },
        index
      ) => (
        <Alert
          key={uuid}
          fadeOut={fadeOut}
          heading={heading}
          icon={icon}
          role={role}
          slim={slim}
          type={type}
          onClose={closable ? () => onAlertClose(index) : undefined}
        >
          {content}
        </Alert>
      )
    )
  ) : (
    <></>
  );
}

AlertOutlet.propTypes = {
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  reverseOrder: PropTypes.bool,
  toastOutlet: PropTypes.bool
};

AlertOutlet.defaultProps = {
  multiple: false,
  reverseOrder: false,
  toastOutlet: false
};
