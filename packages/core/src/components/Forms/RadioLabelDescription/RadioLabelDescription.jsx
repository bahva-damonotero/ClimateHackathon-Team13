import React from 'react';
import PropTypes from 'prop-types';

export default function RadioLabelDescription({ children }) {
  return <span className="usa-radio__label-description">{children}</span>;
}

RadioLabelDescription.propTypes = {
  children: PropTypes.node.isRequired
};
