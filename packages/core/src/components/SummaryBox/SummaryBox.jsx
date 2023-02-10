import React from 'react';
import PropTypes from 'prop-types';

export default function SummaryBox({ children, heading }) {
  return (
    <div className="usa-summary-box" role="complementary">
      <div className="usa-summary-box__body">
        <h3 className="usa-summary-box__heading">{heading}</h3>

        <div className="usa-summary-box__text">
          <ul className="usa-list">{children}</ul>
        </div>
      </div>
    </div>
  );
}

SummaryBox.propTypes = {
  /** `<li>` node(s) */
  children: PropTypes.node.isRequired,
  /** Heading content for the SummaryBox */
  heading: PropTypes.node.isRequired
};
