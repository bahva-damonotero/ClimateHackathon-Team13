import React from 'react';
import PropTypes from 'prop-types';

export default function InputPrefix({ children }) {
  return (
    <div className="usa-input-prefix" aria-hidden="true">
      {children}
    </div>
  );
}

InputPrefix.displayName = 'InputPrefix';

InputPrefix.propTypes = {
  children: PropTypes.node.isRequired
};
