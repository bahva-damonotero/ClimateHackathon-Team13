import React from 'react';
import PropTypes from 'prop-types';

export default function FormError({ error }) {
  return error ? (
    <span className="usa-error-message" role="alert">
      {error}
    </span>
  ) : null;
}

FormError.propTypes = {
  /** Error message to display */
  error: PropTypes.string
};
