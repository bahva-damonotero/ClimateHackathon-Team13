import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function IconListIcon({
  children,
  className,
  color,
  identifier,
  sprite,
  ...props
}) {
  if (!children && (!sprite || !identifier)) {
    throw new Error(
      'If not using `children` to pass in a custom icon, you must provide `sprite` AND `identifier`.'
    );
  }

  return (
    <div
      className={createClassString([
        'usa-icon-list__icon',
        color ? `text-${color}` : '',
        className
      ])}
      aria-hidden="true"
      {...props}
    >
      {children || (
        <svg className="usa-icon" role="img">
          <use xlinkHref={`${sprite}#${identifier}`} />
        </svg>
      )}
    </div>
  );
}

IconListIcon.propTypes = {
  children: PropTypes.node,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Color for the icon. For options, see here: https://designsystem.digital.gov/utilities/color/ */
  color: PropTypes.string,
  /** The icon to use. For options, see here: https://designsystem.digital.gov/components/icon/ */
  identifier: PropTypes.string,
  /** The path to USWDS's `sprite.svg` or another SVG sprite */
  sprite: PropTypes.string
};
