import React from 'react';

export default function NavigateBeforeIcon(props) {
  // NOTE: this SVG code was pulled from the USWDS `navigate_before` icon
  // and may need to be updated in the future if USWDS updates this icon
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
}
