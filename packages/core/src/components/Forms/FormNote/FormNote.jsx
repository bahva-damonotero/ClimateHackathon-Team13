import React from 'react';
import PropTypes from 'prop-types';

export default function FormNote({ children }) {
  return <p className="usa-form__note">{children}</p>;
}

FormNote.propTypes = {
  children: PropTypes.node.isRequired
};
