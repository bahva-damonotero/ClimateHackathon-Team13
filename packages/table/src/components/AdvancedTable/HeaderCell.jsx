import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createClassString } from '@boozallen-uip/uswds-react-utils';

const Arrow = ({ active, direction }) => {
  const arrowSize = 15;
  const fillColor = active ? '#0050d8' : '#000000';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={arrowSize}
      height={arrowSize}
      viewBox="0 0 18 18"
    >
      {active && direction === 'desc' ? (
        <path
          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
          fill={fillColor}
        />
      ) : (
        <path
          d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
          fill={fillColor}
        />
      )}
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export default function TableHeaderCell({
  currentSort,
  displayName,
  defaultDirection,
  isLast,
  isActive,
  title,
  updateSort
}) {
  const nextSort = currentSort.direction === 'asc' ? 'desc' : 'asc';
  const nextSortFull =
    currentSort.direction === 'asc' ? 'descending' : 'ascending';

  const [hover, setHover] = useState(false);

  function clickedSort(e) {
    e.stopPropagation();
    if (isActive) {
      // toggle the sort direction
      updateSort(title, nextSort);
    } else {
      updateSort(title, defaultDirection);
    }
  }

  // keyboard accessible option
  function pressedKey(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      clickedSort(e);
    }
  }

  return (
    <div
      className={createClassString([
        'bah-uswds-table-header-cell-inner',
        isLast ? 'last-column' : ''
      ])}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label={displayName}
        className="bah-uswds-table-header-cell-content"
        onClick={clickedSort}
        onKeyDown={pressedKey}
        role="presentation"
        // allow keyboard selection of the header cell
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        <div className="bah-uswds-table-header-sort">
          <div className="bah-uswds-table-header-label">
            <span aria-hidden="true">{displayName}</span>
          </div>

          <div className="bah-uswds-table-header-sort-icon">
            <button
              type="button"
              aria-label={`Sort table by ${nextSortFull} ${displayName}`}
              onClick={clickedSort}
              title={`Sort table by ${nextSortFull} ${displayName}`}
            >
              {(hover || isActive) && (
                <Arrow active={isActive} direction={currentSort.direction} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

TableHeaderCell.propTypes = {
  currentSort: PropTypes.shape({
    direction: PropTypes.oneOf(['asc', 'desc']).isRequired,
    field: PropTypes.string.isRequired
  }),
  displayName: PropTypes.string,
  defaultDirection: PropTypes.oneOf(['asc', 'desc']),
  hover: PropTypes.bool,
  isActive: PropTypes.bool,
  isLast: PropTypes.bool,
  title: PropTypes.string,
  updateSort: PropTypes.func
};

TableHeaderCell.defaultProps = {
  defaultDirection: 'asc'
};
