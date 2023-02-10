import React, { useState } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '@uswds/uswds/img/usa-icons-bg/search--white.svg';

import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function Search({
  className,
  onSearch,
  size,
  placeholder,
  ...props
}) {
  const inputId = ((s) => {
    switch (s) {
      case 'small':
        return 'search-field-small';

      case 'large':
        return 'search-field-big';

      case 'medium':
      default:
        return 'search-field';
    }
  })(size);

  const sizeClassForm = ((s) => {
    switch (s) {
      case 'small':
        return 'usa-search--small';

      case 'large':
        return 'usa-search--big';

      case 'medium':
      default:
        return undefined;
    }
  })(size);

  const [searchInput, setSearchInput] = useState('');

  function onChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  function search(e) {
    // Prevent the form from reloading the page
    e.preventDefault();
    onSearch(searchInput);
  }

  return (
    <form
      className={createClassString(['usa-search', sizeClassForm, className])}
      onSubmit={search}
      role="search"
      {...props}
    >
      <label className="usa-sr-only" htmlFor={inputId}>
        Search
      </label>

      <input
        className="usa-input"
        id={inputId}
        name="search"
        onChange={onChange}
        type="search"
        placeholder={placeholder}
      />

      <button className="usa-button" type="submit">
        {size === 'small' ? (
          <img
            src={searchIcon}
            className="usa-search__submit-icon"
            alt="Search"
          />
        ) : (
          <span className="usa-search__submit-text">Search</span>
        )}
      </button>
    </form>
  );
}

Search.displayName = 'Search';

Search.propTypes = {
  /** Any additional classes to apply */
  className: PropTypes.string,
  /**
   * Function called when the Search button is pressed
   * (or when the user presses the Enter key in the text field).
   * The function is called with the search query.
   */
  onSearch: PropTypes.func,
  /** Text to show when the search field is empty */
  placeholder: PropTypes.string,
  /** Size of the search bar */
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Search.defaultProps = {
  size: 'medium'
};
