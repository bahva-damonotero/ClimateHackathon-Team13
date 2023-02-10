import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import navigation from '@uswds/uswds/js/usa-header';
import imgClose from '@uswds/uswds/img/usa-icons/close.svg';

import {
  createClassString,
  flattenChildren
} from '@boozallen-uip/uswds-react-utils';

export default function Header({ children, className, extended, ...props }) {
  const containerRef = useRef();

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    // call USWDS's `on` function to initialize the component
    navigation.on(containerEl);

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      navigation.off(containerEl);
    };
  }, []);

  // handle child components
  const childComponents = flattenChildren(React.Children.toArray(children));
  let navigationComponent;
  let searchComponent;
  let secondaryNavigationComponent;
  let titleComponent;

  for (const child of childComponents) {
    const componentType = child.type.displayName;

    switch (componentType) {
      case 'HeaderNavigation':
        navigationComponent = child;
        break;

      case 'HeaderSecondaryNavigation':
        secondaryNavigationComponent = child;
        break;

      case 'HeaderTitle':
        titleComponent = child;
        break;

      case 'Search':
        searchComponent = child;
        break;

      default:
        throw new Error(
          `Invalid child component '${componentType}' used in Header.`
        );
    }
  }

  const navNode = (
    <>
      <button className="usa-nav__close" type="button">
        <img src={imgClose} role="img" alt="close" />
      </button>

      {navigationComponent && React.cloneElement(navigationComponent)}

      {extended ? (
        <div className="usa-nav__secondary">
          {secondaryNavigationComponent &&
            React.cloneElement(secondaryNavigationComponent)}

          {searchComponent && React.cloneElement(searchComponent)}
        </div>
      ) : (
        searchComponent && React.cloneElement(searchComponent)
      )}
    </>
  );

  const headerNode = (
    <>
      <div className="usa-navbar">
        {titleComponent && React.cloneElement(titleComponent)}

        <button className="usa-menu-btn" type="button">
          Menu
        </button>
      </div>

      <nav aria-label="Primary navigation" className="usa-nav">
        {extended ? <div className="usa-nav__inner">{navNode}</div> : navNode}
      </nav>
    </>
  );

  return (
    <div
      className={createClassString(['bah-uswds-header', className])}
      ref={containerRef}
      {...props}
    >
      <div className="usa-overlay" />

      <header
        className={createClassString([
          'usa-header',
          extended ? 'usa-header--extended' : 'usa-header--basic'
        ])}
      >
        {extended ? (
          headerNode
        ) : (
          <div className="usa-nav-container">{headerNode}</div>
        )}
      </header>
    </div>
  );
}

Header.propTypes = {
  /**
   * `<HeaderTitle />`, `<HeaderNavigation />`, `<HeaderSecondaryNavigation />`,
   * and `<Search />` node(s)
   */
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** If `true`, use the extended header variant */
  extended: PropTypes.bool
};

Header.defaultProps = {
  extended: false
};
