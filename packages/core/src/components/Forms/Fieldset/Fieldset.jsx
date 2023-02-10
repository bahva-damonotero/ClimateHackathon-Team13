import React from 'react';
import PropTypes from 'prop-types';

export default function Fieldset({ children }) {
  return <fieldset className="usa-fieldset">{children}</fieldset>;
}

Fieldset.propTypes = {
  children: PropTypes.node.isRequired
};
