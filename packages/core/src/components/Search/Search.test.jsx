import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Search from '.';

describe('Search', () => {
  it('should render the "medium"/default variant', () => {
    const { container } = render(<Search />);

    expect(container.querySelector('.usa-search #search-field')).toBeTruthy();
  });

  it('should render the "small" variant', () => {
    const { container } = render(<Search size="small" />);

    expect(
      container.querySelector('.usa-search--small #search-field-small')
    ).toBeTruthy();
  });

  it('should render the "large" variant', () => {
    const { container } = render(<Search size="large" />);

    expect(
      container.querySelector('.usa-search--big #search-field-big')
    ).toBeTruthy();
  });

  it('should call `onSearch` with the search input when the search button is pressed', () => {
    const query = 'testing';
    const onSearch = jest.fn();

    const { container } = render(<Search onSearch={onSearch} />);

    fireEvent.change(container.querySelector('.usa-input'), {
      target: { value: query }
    });
    fireEvent.click(container.querySelector('.usa-button'));

    expect(onSearch).toHaveBeenCalledWith(query);
  });
});
