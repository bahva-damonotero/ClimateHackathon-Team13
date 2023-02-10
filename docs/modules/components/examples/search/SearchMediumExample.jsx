import React from 'react';
import { Search } from '@boozallen-uip/uswds-react-core';

export default function SearchMediumExample() {
  function onSearch(query) {
    // eslint-disable-next-line no-console
    console.log(`Search query: ${query}`);
  }

  return <Search onSearch={onSearch} size="medium" />;
}
