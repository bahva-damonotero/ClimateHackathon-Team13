import React from 'react';
import PropTypes from 'prop-types';

export default function ModalHeading({ children, id }) {
  return (
    <h2 className="usa-modal__heading" id={id}>
      {children}
    </h2>
  );
}

ModalHeading.displayName = 'ModalHeading';

ModalHeading.propTypes = {
  /** Modal heading content */
  children: PropTypes.node.isRequired,
  /** ID of the modal heading */
  id: PropTypes.string
};
