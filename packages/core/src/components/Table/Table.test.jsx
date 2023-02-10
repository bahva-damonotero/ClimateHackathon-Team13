import React from 'react';
import { render } from '@testing-library/react';

import Table from '.';

describe('Table', () => {
  const content = (
    <>
      <thead>
        <tr>
          <th scope="col">Document title</th>
          <th scope="col">Description</th>
          <th scope="col">Year</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">Declaration of Independence</th>
          <td>
            Statement adopted by the Continental Congress declaring independence
            from the British Empire.
          </td>
          <td>1776</td>
        </tr>

        <tr>
          <th scope="row">Bill of Rights</th>
          <td>
            The first ten amendments of the U.S. Constitution guaranteeing
            rights and freedoms.
          </td>
          <td>1791</td>
        </tr>

        <tr>
          <th scope="row">Declaration of Sentiments</th>
          <td>
            A document written during the Seneca Falls Convention outlining the
            rights that American women should be entitled to as citizens.
          </td>
          <td>1848</td>
        </tr>

        <tr>
          <th scope="row">Emancipation Proclamation</th>
          <td>
            An executive order granting freedom to slaves in designated southern
            states.
          </td>
          <td>1863</td>
        </tr>
      </tbody>
    </>
  );

  it('should render correctly', () => {
    const { container } = render(<Table>{content}</Table>);

    expect(container.querySelector('.usa-table')).toBeTruthy();
  });

  it('should render the "borderless" variant', () => {
    const { container } = render(<Table border={false}>{content}</Table>);

    expect(container.querySelector('.usa-table--borderless')).toBeTruthy();
  });

  it('should render the "compact" variant', () => {
    const { container } = render(<Table compact>{content}</Table>);

    expect(container.querySelector('.usa-table--compact')).toBeTruthy();
  });

  it('should render the "stacked" variant', () => {
    const { container } = render(<Table stacked>{content}</Table>);

    expect(container.querySelector('.usa-table--stacked')).toBeTruthy();
  });

  it('should render the "stackedHeader" variant', () => {
    const { container } = render(<Table stackedHeader>{content}</Table>);

    expect(container.querySelector('.usa-table--stacked-header')).toBeTruthy();
  });

  it('should render the "striped" variant', () => {
    const { container } = render(<Table striped>{content}</Table>);

    expect(container.querySelector('.usa-table--striped')).toBeTruthy();
  });

  it('should render the "scrollable" variant', () => {
    const { container } = render(<Table scrollable>{content}</Table>);

    expect(
      container.querySelector('.usa-table-container--scrollable > .usa-table')
    ).toBeTruthy();
  });
});
