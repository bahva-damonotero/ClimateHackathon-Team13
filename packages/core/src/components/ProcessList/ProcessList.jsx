import React from 'react';
import PropTypes from 'prop-types';

export default function ProcessList({ children }) {
  return <ol className="usa-process-list">{children}</ol>;
}

ProcessList.propTypes = {
  children: PropTypes.node.isRequired
};
