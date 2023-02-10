import React from 'react';
import PropTypes from 'prop-types';

export default function ModalBody({ children, id }) {
  return (
    <div className="usa-prose" id={id}>
      {children}
    </div>
  );
}

ModalBody.displayName = 'ModalBody';

ModalBody.propTypes = {
  /** Modal body content */
  children: PropTypes.node.isRequired,
  /** ID of the modal body */
  id: PropTypes.string
};
