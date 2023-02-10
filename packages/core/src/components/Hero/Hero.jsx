import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';
import { GridContainer } from '../Grid';

export default function Hero({
  align,
  background,
  children,
  className,
  heading,
  ...props
}) {
  const gridContainerClassName =
    align === 'right' ? 'grid-row flex-column flex-align-end' : '';
  return (
    <section
      className={createClassString(['usa-hero', className])}
      style={background ? { backgroundImage: `url(${background})` } : undefined}
      aria-label="Introduction"
      {...props}
    >
      <GridContainer className={gridContainerClassName}>
        <div className="usa-hero__callout">
          {heading && <h1 className="usa-hero__heading">{heading}</h1>}

          {children}
        </div>
      </GridContainer>
    </section>
  );
}

Hero.propTypes = {
  /** Should the hero content be left or right aligned? */
  align: PropTypes.oneOf(['left', 'right']),
  /** URL or path to an image used to override the default background */
  background: PropTypes.string,
  /** Body content for the hero */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Heading content of the hero banner */
  heading: PropTypes.node
};

Hero.defaultProps = {
  align: 'left'
};
