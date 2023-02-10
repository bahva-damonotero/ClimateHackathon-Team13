import React from 'react';
import PropTypes from 'prop-types';

export default function ModalFooter({ children }) {
  return <div className="usa-modal__footer">{children}</div>;
}

ModalFooter.propTypes = {
  /** Modal footer content */
  children: PropTypes.node.isRequired
};
