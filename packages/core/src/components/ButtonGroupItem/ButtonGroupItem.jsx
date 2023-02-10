import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonGroupItem({ children }) {
  return <li className="usa-button-group__item">{children}</li>;
}

ButtonGroupItem.propTypes = {
  children: PropTypes.node.isRequired
};
