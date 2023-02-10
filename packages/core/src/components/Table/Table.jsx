import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Table({
  border,
  children,
  className,
  compact,
  scrollable,
  stacked,
  stackedHeader,
  striped,
  ...props
}) {
  const table = (
    <table
      className={createClassString([
        'usa-table',
        !border ? 'usa-table--borderless' : '',
        compact ? 'usa-table--compact' : '',
        stacked ? 'usa-table--stacked' : '',
        stackedHeader ? 'usa-table--stacked-header' : '',
        striped ? 'usa-table--striped' : '',
        className
      ])}
      {...props}
    >
      {children}
    </table>
  );

  return scrollable ? (
    <div className="usa-table-container--scrollable">{table}</div>
  ) : (
    table
  );
}

Table.propTypes = {
  /** Should the table have a border? */
  border: PropTypes.bool,
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /**
   * If `true`,  row height and vertical spacing will be reduced to
   * display more table rows within a limited space.
   */
  compact: PropTypes.bool,
  /** Should the table have a horizontal scrollbar? */
  scrollable: PropTypes.bool,
  /** Should the table cells stack on narrow screens? */
  stacked: PropTypes.bool,
  /**
   * Should the table cells stack on narrow screens and visually
   * promote the first cell of every row into a "header" for that group?
   */
  stackedHeader: PropTypes.bool,
  /** Should the table apply alternating horizontal striping? */
  striped: PropTypes.bool
};

Table.defaultProps = {
  border: true,
  compact: false,
  scrollable: false,
  stacked: false,
  stackedHeader: false,
  striped: false
};
