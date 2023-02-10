import React from 'react';
import PropTypes from 'prop-types';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

import NavigateBeforeIcon from './NavigateBeforeIcon';
import NavigateNextIcon from './NavigateNextIcon';

export default function Pagination({ onChangePage, page, totalPages }) {
  function changePage(event, newPage) {
    event.preventDefault();

    if (onChangePage) {
      onChangePage(newPage);
    }
  }

  // eslint-disable-next-line react/prop-types
  const Page = ({ current, number }) => (
    <li
      className="usa-pagination__item usa-pagination__page-no"
      key={`page-${page}`}
    >
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        onClick={(e) => changePage(e, number)}
        className={createClassString([
          'usa-pagination__button',
          current ? 'usa-current' : ''
        ])}
        aria-label={`${
          number === totalPages ? 'last page, ' : ''
        }page ${number}`}
        aria-current={current ? 'page' : undefined}
      >
        {number}
      </a>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </li>
  );

  const Overflow = () => (
    <li
      className="usa-pagination__item usa-pagination__overflow"
      role="presentation"
    >
      <span> … </span>
    </li>
  );

  const slots = [];
  const unbounded = totalPages === undefined || totalPages === null;

  let midPagesToShow = unbounded ? 4 : 3;
  if (!unbounded && totalPages <= 7) {
    midPagesToShow = 0;
  }

  if (midPagesToShow) {
    slots.push(<Page current={page === 1} number={1} key="page-1" />);

    let midStart = page - 1;

    if (midStart > 2) slots.push(<Overflow key="first-page-gap" />);
    else {
      slots.push(<Page current={page === 2} number={2} key="page-2" />);
      midStart = 3;
    }

    let endOverflow = true;

    if (!unbounded) {
      const tillEnd = totalPages - page + 1;

      if (tillEnd < 4) {
        midStart = totalPages - 4;
        midPagesToShow = 4;
        endOverflow = false;
      }
    }

    for (let i = 0; i < midPagesToShow; i++) {
      const pageNum = midStart + i;
      slots.push(
        <Page
          current={page === pageNum}
          number={pageNum}
          key={`page-${pageNum}`}
        />
      );
    }

    if (endOverflow) slots.push(<Overflow key="second-page-gap" />);

    if (!unbounded) {
      slots.push(
        <Page
          current={page === totalPages}
          number={totalPages}
          key={`page-${totalPages}`}
        />
      );
    }
  } else {
    for (let i = 1; i <= totalPages; i++) {
      slots.push(<Page current={page === i} number={i} key={`page=${i}`} />);
    }
  }

  return (
    <nav aria-label="Pagination" className="usa-pagination">
      <ul className="usa-pagination__list">
        {page > 1 && (
          <li className="usa-pagination__item usa-pagination__arrow">
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              onClick={(e) => changePage(e, page - 1)}
              className="usa-pagination__link usa-pagination__previous-page"
              aria-label="Previous page"
            >
              <NavigateBeforeIcon
                className="usa-icon"
                role="img"
                aria-hidden="true"
              />

              <span className="usa-pagination__link-text"> Previous </span>
            </a>
            {/* eslint-enable jsx-a11y/anchor-is-valid */}
          </li>
        )}

        {slots.map((slot) => slot)}

        {(page < totalPages || unbounded) && (
          <li className="usa-pagination__item usa-pagination__arrow">
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              onClick={(e) => changePage(e, page + 1)}
              className="usa-pagination__link usa-pagination__next-page"
              aria-label="Next page"
            >
              <span className="usa-pagination__link-text"> Next </span>

              <NavigateNextIcon
                className="usa-icon"
                role="img"
                aria-hidden="true"
              />
            </a>
            {/* eslint-enable jsx-a11y/anchor-is-valid */}
          </li>
        )}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  /** Function called when the page is changed */
  onChangePage: PropTypes.func,
  /** The current, 1-indexed page number */
  page: PropTypes.number.isRequired,
  /** The total number of pages */
  totalPages: PropTypes.number
};
