import React from 'react';
import PropTypes from 'prop-types';

export default function CheckboxLabelDescription({ children }) {
  return <span className="usa-checkbox__label-description">{children}</span>;
}

CheckboxLabelDescription.propTypes = {
  children: PropTypes.node.isRequired
};
