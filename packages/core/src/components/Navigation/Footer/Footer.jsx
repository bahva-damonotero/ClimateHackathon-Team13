import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import footer from '@uswds/uswds/js/usa-footer';
import { HashLink } from 'react-router-hash-link';

import {
  createClassString,
  flattenChildren
} from '@boozallen-uip/uswds-react-utils';

import { GridCol, GridContainer, GridRow } from '../..';

export default function Footer({
  children,
  className,
  showReturnToTop,
  slim,
  ...props
}) {
  const containerRef = useRef();

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // call USWDS's `on` function to initialize the component
    footer.on(containerEl);

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      footer.off(containerEl);
    };
  }, []);

  // handle child components
  const childComponents = flattenChildren(React.Children.toArray(children));
  let linksComponent;
  let logoComponent;
  let primaryContentComponent;
  let socialsComponent;
  let contactInfoComponent;

  for (const child of childComponents) {
    const componentType = child.type.displayName;

    switch (componentType) {
      case 'FooterContactInfo':
        contactInfoComponent = child;
        break;

      case 'FooterLinks':
        linksComponent = child;
        break;

      case 'FooterLogo':
        logoComponent = child;
        break;

      case 'FooterPrimaryContent':
        primaryContentComponent = child;
        break;

      case 'FooterSocialLinks':
        socialsComponent = child;
        break;

      default:
        throw new Error(
          `Invalid child component '${componentType}' used in Footer.`
        );
    }
  }

  // create primary node
  const links = linksComponent ? linksComponent.props.links : undefined;
  const hasLinks = links && links.length;
  const big = hasLinks && links[0].header;

  let primaryNode;

  if (big) {
    primaryNode = (
      <GridContainer>
        <GridRow gaps>
          <GridCol tablet={primaryContentComponent ? 8 : undefined}>
            {React.cloneElement(linksComponent, {
              bigFooter: true
            })}
          </GridCol>

          {primaryContentComponent && (
            <GridCol tablet={4}>{primaryContentComponent}</GridCol>
          )}
        </GridRow>
      </GridContainer>
    );
  } else if (slim) {
    primaryNode = (
      <GridRow className="usa-footer__primary-container">
        <GridCol mobile={8}>{linksComponent}</GridCol>

        {contactInfoComponent && (
          <GridCol mobile={4}>
            {React.cloneElement(contactInfoComponent, {
              slimFooter: true
            })}
          </GridCol>
        )}
      </GridRow>
    );
  } else if (primaryContentComponent && hasLinks) {
    primaryNode = (
      <GridContainer>
        <GridRow gaps>
          <GridCol tablet={8}>{linksComponent}</GridCol>
          <GridCol tablet={4}>{primaryContentComponent}</GridCol>
        </GridRow>
      </GridContainer>
    );
  } else if (primaryContentComponent) {
    primaryNode = <GridContainer>{primaryContentComponent}</GridContainer>;
  } else {
    primaryNode = linksComponent;
  }

  return (
    <footer
      className={createClassString([
        'usa-footer',
        big ? 'usa-footer--big' : '',
        slim ? 'usa-footer--slim' : '',
        className
      ])}
      ref={containerRef}
      {...props}
    >
      {showReturnToTop && (
        <GridContainer className="usa-footer__return-to-top">
          <HashLink smooth to="#top">
            Return to top
          </HashLink>
        </GridContainer>
      )}

      {primaryNode && (
        <div className="usa-footer__primary-section">{primaryNode}</div>
      )}

      <div className="usa-footer__secondary-section">
        <GridContainer>
          {slim ? (
            <GridRow className="usa-footer__logo" gaps gapSize={2}>
              {logoComponent}
            </GridRow>
          ) : (
            <GridRow gaps>
              <GridCol
                className="usa-footer__logo grid-row mobile-lg:grid-gap-2"
                mobile={6}
              >
                {logoComponent}
              </GridCol>

              <GridCol className="usa-footer__contact-links" mobile={6}>
                {socialsComponent}

                {contactInfoComponent}
              </GridCol>
            </GridRow>
          )}
        </GridContainer>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  /**
   * Populate with `<FooterContactInfo />`, `<FooterLinks />`,
   * `<FooterLogo />`, `<FooterPrimaryContent />`, and `<FooterSocialLinks />`
   * nodes to build your footer.
   */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Should the "Return to Top" link be shown above the footer? */
  showReturnToTop: PropTypes.bool,
  /** If `true`, use the slim footer variant */
  slim: PropTypes.bool
};

Footer.defaultProps = {
  showReturnToTop: true,
  slim: false
};
