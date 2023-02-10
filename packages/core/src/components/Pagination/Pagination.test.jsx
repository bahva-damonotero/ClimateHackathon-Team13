import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Pagination from '.';

describe('Pagination', () => {
  const previous = ' Previous ';
  const next = ' Next ';
  const overflow = ' … ';

  function validateSlots(container, slots) {
    const lis = container.querySelectorAll('li');
    for (let i = 0; i < lis.length; i++) {
      expect(lis[i].textContent).toBe(slots[i]);
    }
  }

  function validateCurrent(container, current) {
    expect(container.querySelector('.usa-current').textContent).toBe(
      current.toString()
    );
  }

  describe('onChangePage', () => {
    let onChangePage;

    beforeEach(() => {
      onChangePage = jest.fn();
    });

    it('should call onChangePage with the previous page', () => {
      const page = 4;
      const { container } = render(
        <Pagination page={page} totalPages={8} onChangePage={onChangePage} />
      );

      const previousLink = container.querySelector(
        '.usa-pagination__previous-page'
      );
      fireEvent.click(previousLink);

      expect(onChangePage).toHaveBeenCalledWith(3);
    });

    it('should call onChangePage with the next page', () => {
      const page = 4;
      const { container } = render(
        <Pagination page={page} totalPages={8} onChangePage={onChangePage} />
      );

      const nextLink = container.querySelector('.usa-pagination__next-page');
      fireEvent.click(nextLink);

      expect(onChangePage).toHaveBeenCalledWith(5);
    });

    it('should call onChangePage with the first page', () => {
      const page = 4;
      const { container } = render(
        <Pagination page={page} totalPages={8} onChangePage={onChangePage} />
      );

      const firstPageLink = container.querySelectorAll(
        '.usa-pagination__button'
      )[0];
      fireEvent.click(firstPageLink);

      expect(onChangePage).toHaveBeenCalledWith(1);
    });

    it('should call onChangePage with the last page', () => {
      const page = 4;
      const { container } = render(
        <Pagination page={page} totalPages={8} onChangePage={onChangePage} />
      );

      const lastPageLink = container.querySelectorAll(
        '.usa-pagination__button'
      )[4];
      fireEvent.click(lastPageLink);

      expect(onChangePage).toHaveBeenCalledWith(8);
    });
  });

  describe('Bounded', () => {
    // less than 8 pages, 1st page is current
    it('should render 7 pages, with the current page being 1, properly', () => {
      const page = 1;
      const { container } = render(<Pagination page={page} totalPages={7} />);

      const slots = ['1', '2', '3', '4', '5', '6', '7', next];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    // less than 8 pages, last page is current
    it('should render 7 pages, with the current page being 7, properly', () => {
      const page = 7;
      const { container } = render(<Pagination page={page} totalPages={7} />);

      const slots = [previous, '1', '2', '3', '4', '5', '6', '7'];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    /* more than 7 pages, 1st through last page */
    it('should render 8 pages, with the current page being 1, properly', () => {
      const page = 1;
      const { container } = render(<Pagination page={page} totalPages={8} />);

      const slots = ['1', '2', '3', '4', '5', ' … ', '8', next];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    it('should render 8 pages, with the current page being 2, properly', () => {
      const page = 2;
      const { container } = render(<Pagination page={page} totalPages={8} />);

      const slots = [previous, '1', '2', '3', '4', '5', overflow, '8', next];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    it('should render 8 pages, with the current page being 3, properly', () => {
      const page = 3;
      const { container } = render(<Pagination page={page} totalPages={8} />);

      const slots = [previous, '1', '2', '3', '4', '5', overflow, '8', next];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    it('should render 8 pages, with the current page being 4, properly', () => {
      const page = 4;
      const { container } = render(<Pagination page={page} totalPages={8} />);

      const slots = [
        previous,
        '1',
        overflow,
        '3',
        '4',
        '5',
        overflow,
        '8',
        next
      ];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    it('should render 8 pages, with the current page being 5, properly', () => {
      const page = 5;
      const { container } = render(<Pagination page={page} totalPages={8} />);

      const slots = [
        previous,
        '1',
        overflow,
        '4',
        '5',
        '6',
        overflow,
        '8',
        next
      ];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    it('should render 8 pages, with the current page being 6, properly', () => {
      const page = 6;
      const { container } = render(<Pagination page={page} totalPages={8} />);

      const slots = [previous, '1', overflow, '4', '5', '6', '7', '8', next];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    it('should render 8 pages, with the current page being 7, properly', () => {
      const page = 7;
      const { container } = render(<Pagination page={page} totalPages={8} />);

      const slots = [previous, '1', overflow, '4', '5', '6', '7', '8', next];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    it('should render 8 pages, with the current page being 8, properly', () => {
      const page = 8;
      const { container } = render(<Pagination page={page} totalPages={8} />);

      const slots = [previous, '1', overflow, '4', '5', '6', '7', '8'];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });
  });

  describe('Unbounded', () => {
    /* less than 8 pages, 1st through 5th */
    it('should render an unknown amount of total pages, with the current page being 1, properly', () => {
      const page = 1;
      const { container } = render(<Pagination page={page} />);

      const slots = ['1', '2', '3', '4', '5', '6', overflow, next];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    it('should render an unknown amount of total pages, with the current page being 2, properly', () => {
      const page = 2;
      const { container } = render(<Pagination page={page} />);

      const slots = [previous, '1', '2', '3', '4', '5', '6', overflow, next];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    it('should render an unknown amount of total pages, with the current page being 3, properly', () => {
      const page = 3;
      const { container } = render(<Pagination page={page} />);

      const slots = [previous, '1', '2', '3', '4', '5', '6', overflow, next];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    it('should render an unknown amount of total pages, with the current page being 4, properly', () => {
      const page = 4;
      const { container } = render(<Pagination page={page} />);

      const slots = [
        previous,
        '1',
        overflow,
        '3',
        '4',
        '5',
        '6',
        overflow,
        next
      ];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });

    it('should render an unknown amount of total pages, with the current page being 5, properly', () => {
      const page = 5;
      const { container } = render(<Pagination page={page} />);

      const slots = [
        previous,
        '1',
        overflow,
        '4',
        '5',
        '6',
        '7',
        overflow,
        next
      ];

      validateSlots(container, slots);
      validateCurrent(container, page);
    });
  });
});
