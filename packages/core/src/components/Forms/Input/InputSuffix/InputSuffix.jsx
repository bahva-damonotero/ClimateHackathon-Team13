import React from 'react';
import PropTypes from 'prop-types';

export default function InputSuffix({ children }) {
  return (
    <div className="usa-input-suffix" aria-hidden="true">
      {children}
    </div>
  );
}

InputSuffix.displayName = 'InputSuffix';

InputSuffix.propTypes = {
  children: PropTypes.node.isRequired
};
