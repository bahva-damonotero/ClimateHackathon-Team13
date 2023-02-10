import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Card({
  children,
  className,
  exdent,
  flag,
  headerFirst
}) {
  return (
    <div
      className={createClassString([
        'usa-card',
        exdent ? 'usa-card--exdent' : '',
        flag ? 'usa-card--flag' : '',
        flag === 'right' ? 'usa-card--media-right' : '',
        headerFirst ? 'usa-card--header-first' : '',
        className
      ])}
    >
      <div className="usa-card__container">
        {exdent
          ? children.map((child, i) =>
              React.cloneElement(child, {
                exdent: true,
                // eslint-disable-next-line react/no-array-index-key
                key: i
              })
            )
          : children}
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additonal classes to apply */
  className: PropTypes.string,
  /** Should the Card be exdent? */
  exdent: PropTypes.bool,
  /** If `true` or `'right'` is passed in, a flag variant will be used */
  flag: PropTypes.oneOf([false, true, 'right']),
  /** If `true`, the header will show before the media */
  headerFirst: PropTypes.bool
};

Card.defaultProps = {
  exdent: false,
  flag: false,
  headerFirst: false
};
