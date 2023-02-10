import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import skipNav from '@uswds/uswds/js/usa-skipnav';

export default function SkipNav({ href }) {
  const linkRef = useRef();

  useEffect(() => {
    const linkEl = linkRef.current;
    if (!linkEl) return;

    // call USWDS's `on` function to initialize the component
    skipNav.on(linkEl);

    // on dismount, call USWDS's `off` function to cleanup the component
    return () => {
      skipNav.off(linkEl);
    };
  }, []);

  function handleClick(e) {
    // prevent router from redirecting - allow uswds js to execute
    e.preventDefault();
  }

  return (
    <a className="usa-skipnav" href={href} ref={linkRef} onClick={handleClick}>
      Skip to main content
    </a>
  );
}

SkipNav.propTypes = {
  /** Anchor link to go to when the Skip Nav link is triggered */
  href: PropTypes.string.isRequired
};
