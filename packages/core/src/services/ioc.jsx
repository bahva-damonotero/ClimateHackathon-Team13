import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import AlertService from './alert-service';

const alertService = new AlertService();

// provider
const ServiceContext = createContext({
  AlertService: undefined
});

export const ServiceProvider = ({ children, value }) => (
  <ServiceContext.Provider value={value || { AlertService: alertService }}>
    {children}
  </ServiceContext.Provider>
);
ServiceProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object
};

// injections
export function useService(identifier) {
  const context = useContext(ServiceContext);
  const service = context[identifier];
  if (!service) throw new Error('No service exists with that name.');
  return service;
}

export function useAlertService() {
  return useService('AlertService');
}
