import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';
import { GridRow, Link } from '../../..';

export default function NavigationDropdown({
  active,
  children,
  className,
  id,
  links,
  ...props
}) {
  const megaMenu = links && links.length && links[0].length;

  return (
    <li
      className={createClassString(['usa-nav__primary-item', className])}
      {...props}
    >
      <button
        className={createClassString([
          'usa-accordion__button',
          'usa-nav__link',
          active ? 'usa-current' : ''
        ])}
        type="button"
        aria-expanded="false"
        aria-controls={id}
      >
        <span>{children}</span>
      </button>

      {megaMenu ? (
        <div id={id} className="usa-nav__submenu usa-megamenu" hidden>
          <GridRow gaps gapSize={4}>
            {links.map((link, i) => (
              <div className="usa-col" key={`${id}--${i}`}>
                <ul className="usa-nav__submenu-list">
                  {link.map(({ current, href, text, target }, j) => (
                    <li
                      className={createClassString([
                        'usa-nav__submenu-item',
                        current ? 'usa-current' : ''
                      ])}
                      key={`${id}--${i}-${j}`}
                    >
                      <Link href={href} target={target}>
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </GridRow>
        </div>
      ) : (
        <ul id={id} className="usa-nav__submenu" hidden>
          {links.map(({ current, href, text, target }, index) => (
            <li
              className={createClassString([
                'usa-nav__submenu-item',
                current ? 'usa-current' : ''
              ])}
              key={`${id}--${index}`}
            >
              <Link href={href} target={target}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

const linkShape = PropTypes.shape({
  current: PropTypes.bool,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  target: PropTypes.string
});

NavigationDropdown.propTypes = {
  /**
   * If `true`, apply special styling denoting
   * this as the active or current page.
   */
  active: PropTypes.bool,
  /** Heading content for the dropdown */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** ID used for controlling the expansion and collapse of the dropdown */
  id: PropTypes.string.isRequired,
  /** Array of links or groups of links */
  links: PropTypes.oneOfType([
    PropTypes.arrayOf(linkShape),
    PropTypes.arrayOf(PropTypes.arrayOf(linkShape))
  ]).isRequired
};

NavigationDropdown.defaultProps = {
  active: false
};
