import React from 'react';
import PropTypes from 'prop-types';
import { createClassString } from '@boozallen-uip/uswds-react-utils';
import { Link } from '../..';

export default function Breadcrumb({ links, meta, wrap }) {
  const lastIndex = links.length - 1;

  return (
    <nav
      className={createClassString([
        'usa-breadcrumb',
        wrap ? 'usa-breadcrumb--wrap' : ''
      ])}
      aria-label="Breadcrumbs"
    >
      <ol
        className="usa-breadcrumb__list"
        vocab={meta ? 'http://schema.org/' : undefined}
        typeof={meta ? 'BreadcrumbList' : undefined}
      >
        {links.map((link, index) => {
          const current = index >= lastIndex;

          const content = (
            <>
              <span property={meta ? 'name' : undefined}>{link.text}</span>

              {meta ? <meta property="position" content={index + 1} /> : <></>}
            </>
          );

          return (
            <li
              key={`breadcrumb_item${index}`}
              aria-current={current ? 'page' : undefined}
              className={createClassString([
                'usa-breadcrumb__list-item',
                current ? 'usa-current' : ''
              ])}
              property={meta ? 'itemListElement' : undefined}
              typeof={meta ? 'ListItem' : undefined}
            >
              {!current ? (
                <Link
                  className="usa-breadcrumb__link"
                  property={meta ? 'item' : undefined}
                  typeof={meta ? 'WebPage' : undefined}
                  href={link.href}
                >
                  {content}
                </Link>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

const linkShape = PropTypes.shape({
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
});

Breadcrumb.propTypes = {
  /** Array of breadcrumb titles and links that are displayed */
  links: PropTypes.arrayOf(linkShape).isRequired,
  /** Determines whether or not the RDFa metadata is added */
  meta: PropTypes.bool,
  /** Determines whether or not the breadcrumb titles should wrap */
  wrap: PropTypes.bool
};

Breadcrumb.defaultProps = {
  meta: false,
  wrap: false
};
