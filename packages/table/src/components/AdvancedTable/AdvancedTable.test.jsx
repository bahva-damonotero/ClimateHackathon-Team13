import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import AdvancedTable from '.';

describe('AdvancedTable', () => {
  const columns = {
    data: {
      document: {
        displayName: 'Document',
        width: 200
      },
      description: {
        displayName: 'Description',
        width: 800
      },
      year: {
        displayName: 'Year',
        width: 100
      }
    },
    visibleOrder: ['document', 'description', 'year']
  };

  const withCustomColumn = {
    data: {
      ...columns.data,
      during1700s: {
        displayName: '1700s?',
        sortValue: (row) => row.year >= 1700 && row.year < 1800,
        render: (row) => (row.year >= 1700 && row.year < 1800 ? '✓' : 'X'),
        width: 100
      }
    },
    visibleOrder: ['during1700s', ...columns.visibleOrder]
  };

  const data = [
    {
      document: 'Declaration of Independence',
      description:
        'Statement adopted by the Continental Congress declaring independence from the British Empire.',
      year: 1776
    },
    {
      document: 'Bill of Rights',
      description:
        'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
      year: 1791
    },
    {
      document: 'Declaration of Sentiments',
      description:
        'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
      year: 1848
    },
    {
      document: 'Emancipation Proclamation',
      description:
        'An executive order granting freedom to slaves in designated southern states.',
      year: 1863
    },
    // duplicate for testing sorting
    {
      document: 'Emancipation Proclamation',
      description:
        'An executive order granting freedom to slaves in designated southern states.',
      year: 1863
    }
  ];

  let eventMap;
  const minWait = 1;
  const preventDefault = () => {};

  let div;
  let loadNextPage;
  let props;

  function getCell(column, row) {
    return div.querySelector(
      `div[aria-colindex="${column + 1}"][aria-rowindex="${row + 1}"]`
    );
  }

  function getCellContent(column, row) {
    return getCell(column, row).querySelector('div').innerHTML;
  }

  beforeEach(() => {
    loadNextPage = jest.fn();

    // mock window.requestAnimationFrame
    jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((callback) => {
        setTimeout(() => {
          // execute the callback with a truthy number value
          // after the current call stack has completed
          callback(1);
        });
        // return a truthy number value
        return 1;
      });

    // mock document.addEventListener
    eventMap = {};
    jest
      .spyOn(document, 'addEventListener')
      .mockImplementation((event, callback) => {
        eventMap[event] = callback;
      });

    // mock document.getElementById
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
      return div.querySelector(`[id="${id}"]`);
    });

    props = {
      columns,
      data,
      loadNextPage,
      tableInstance: 'test',
      visibleWidth: 600
    };

    div = document.createElement('div');
    document.body.appendChild(div);
  });

  afterEach(() => {
    document.body.removeChild(div);

    window.requestAnimationFrame.mockRestore();
    document.addEventListener.mockRestore();
    document.getElementById.mockRestore();
  });

  /* render conditions */

  it('should render the table', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    expect(div.querySelector('.bah-uswds-advanced-table')).toBeTruthy();
  });

  it('should render a table with no data', () => {
    ReactDOM.render(<AdvancedTable {...props} data={[]} />, div);

    expect(div.querySelector('.bah-uswds-table-no-data')).toBeTruthy();
  });

  it('should render bordered table cells when borderless prop is false', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    expect(div.querySelector('.bah-uswds-table-cell')).toBeTruthy();
    expect(div.querySelector('.bah-uswds-table-header-cell')).toBeTruthy();
  });

  it('should render a borderless table cells when borderless prop is true', () => {
    ReactDOM.render(<AdvancedTable borderless {...props} />, div);

    expect(div.querySelector('.bah-uswds-table-cell--borderless')).toBeTruthy();
    expect(
      div.querySelector('.bah-uswds-table-header-cell--borderless')
    ).toBeTruthy();
  });

  it('should use the singular form of "column" and "row" in the table\'s aria-label', () => {
    const oneColumn = {
      data: {
        document: columns.data.document
      },
      visibleOrder: [columns.visibleOrder[0]]
    };
    ReactDOM.render(
      <AdvancedTable {...props} columns={oneColumn} data={[data[0]]} />,
      div
    );

    expect(
      div.querySelector('.bah-uswds-table-container').getAttribute('aria-label')
    ).toEqual(
      'This is a table with 1 column and 1 row. Use your arrow keys to navigate through cells.'
    );
  });

  it('should use the plural form of "column" and "row" in the table\'s aria-label', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    expect(
      div.querySelector('.bah-uswds-table-container').getAttribute('aria-label')
    ).toEqual(
      'This is a table with 3 columns and 5 rows. Use your arrow keys to navigate through cells.'
    );
  });

  it('should set the min-width and max-width to 100% if the visibleWidth prop is not provided', () => {
    ReactDOM.render(<AdvancedTable {...props} visibleWidth={undefined} />, div);

    expect(
      div.querySelector('.bah-uswds-table-container').getAttribute('style')
    ).toEqual('min-width: 100%; max-width: 100%; min-height: 250px;');
  });

  it("should use a vertical scrollbar if there is at least 30 rows and props.visibleHeight isn't provided", () => {
    const moreData = [];
    for (let i = 0; i < data.length * 6; i++) {
      moreData.push(...data);
    }

    ReactDOM.render(<AdvancedTable {...props} data={moreData} />, div);

    expect(
      div.querySelector('.bah-uswds-table-container').getAttribute('style')
    ).toEqual(
      'min-width: 600px; max-width: 600px; min-height: 1230px; max-height: 1230px;'
    );
  });

  it('should use a vertical scrollbar if props.visibleHeight is provided and the height of the rows exceeds it', () => {
    ReactDOM.render(<AdvancedTable {...props} visibleHeight={150} />, div);

    expect(
      div.querySelector('.bah-uswds-table-container').getAttribute('style')
    ).toEqual(
      'min-width: 600px; max-width: 600px; min-height: 200px; max-height: 200px;'
    );
  });

  it('should render body cells with the right x and y coordinates', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    expect(getCell(0, 0).getAttribute('style')).toEqual(
      'top: 0px; left: 0px; height: 40px; width: 200px;'
    );
    expect(getCell(1, 0).getAttribute('style')).toEqual(
      'top: 0px; left: 200px; height: 40px; width: 800px;'
    );
    expect(getCell(2, 0).getAttribute('style')).toEqual(
      'top: 0px; left: 1000px; height: 40px; width: 100px;'
    );

    expect(getCell(0, 1).getAttribute('style')).toEqual(
      'top: 40px; left: 0px; height: 40px; width: 200px;'
    );
    expect(getCell(1, 1).getAttribute('style')).toEqual(
      'top: 40px; left: 200px; height: 40px; width: 800px;'
    );
    expect(getCell(2, 1).getAttribute('style')).toEqual(
      'top: 40px; left: 1000px; height: 40px; width: 100px;'
    );
  });

  /* columnDataValidator() */

  it('should throw an error if the columns.data prop is not provided', () => {
    expect(() => {
      ReactDOM.render(
        <AdvancedTable
          {...props}
          columns={{ visibleOrder: props.columns.visibleOrder }}
        />,
        div
      );
    }).toThrow();
  });

  it('should throw an error if the columns.data prop is empty', () => {
    expect(() => {
      ReactDOM.render(
        <AdvancedTable
          {...props}
          columns={{ data: {}, visibleOrder: props.columns.visibleOrder }}
        />,
        div
      );
    }).toThrow();
  });

  it('should throw an error if the columns.data.columnName prop is missing any required keys', () => {
    expect(() => {
      ReactDOM.render(
        <AdvancedTable
          {...props}
          columns={{
            ...columns,
            data: {
              ...data,
              document: {}
            }
          }}
        />,
        div
      );
    }).toThrow();
  });

  /* sorting */

  it('should sort the column ascending on the first click of a header cell', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    const headerCells = div.querySelectorAll(
      '.bah-uswds-table-header-cell .bah-uswds-table-header-cell-content'
    );

    ReactTestUtils.Simulate.click(headerCells[0]);
    // the aria-label should show the opposite of the current sorting direction
    expect(
      headerCells[0].querySelector('button').getAttribute('aria-label')
    ).toEqual('Sort table by descending Document');
  });

  it('should sort the column descending on the second click of a header cell', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    const headerCells = div.querySelectorAll(
      '.bah-uswds-table-header-cell .bah-uswds-table-header-cell-content'
    );

    ReactTestUtils.Simulate.click(headerCells[0]);
    ReactTestUtils.Simulate.click(headerCells[0]);
    // the aria-label should show the opposite of the current sorting direction
    expect(
      headerCells[0].querySelector('button').getAttribute('aria-label')
    ).toEqual('Sort table by ascending Document');
  });

  it('should sort the column ascending when space is pressed on a header cell', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    const headerCells = div.querySelectorAll(
      '.bah-uswds-table-header-cell .bah-uswds-table-header-cell-content'
    );

    ReactTestUtils.Simulate.keyDown(headerCells[0], { key: ' ' });
    // the aria-label should show the opposite of the current sorting direction
    expect(
      headerCells[0].querySelector('button').getAttribute('aria-label')
    ).toEqual('Sort table by descending Document');
  });

  it('should sort the column ascending when enter is pressed on a header cell', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    const headerCells = div.querySelectorAll(
      '.bah-uswds-table-header-cell .bah-uswds-table-header-cell-content'
    );

    ReactTestUtils.Simulate.keyDown(headerCells[0], { key: 'Enter' });
    // the aria-label should show the opposite of the current sorting direction
    expect(
      headerCells[0].querySelector('button').getAttribute('aria-label')
    ).toEqual('Sort table by descending Document');
  });

  it('should sort the column ascending when space is pressed on a header cell', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    const headerCells = div.querySelectorAll(
      '.bah-uswds-table-header-cell .bah-uswds-table-header-cell-content'
    );

    ReactTestUtils.Simulate.keyDown(headerCells[0], { key: ' ' });
    // the aria-label should show the opposite of the current sorting direction
    expect(
      headerCells[0].querySelector('button').getAttribute('aria-label')
    ).toEqual('Sort table by descending Document');
  });

  it('should not sort the column ascending when a key other than space or enter is pressed on a header cell', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    const headerCells = div.querySelectorAll(
      '.bah-uswds-table-header-cell .bah-uswds-table-header-cell-content'
    );

    // the aria-label should show the opposite of the current sorting direction
    expect(
      headerCells[0].querySelector('button').getAttribute('aria-label')
    ).toEqual('Sort table by descending Document');
    ReactTestUtils.Simulate.keyDown(headerCells[0], { key: 'A' });
    expect(
      headerCells[0].querySelector('button').getAttribute('aria-label')
    ).toEqual('Sort table by descending Document');
  });

  it(
    'should call `props.loadNextPage` with the field and sort direction ' +
      'when a header cell is clicked and props.localSort is false',
    () => {
      ReactDOM.render(<AdvancedTable {...props} localSort={false} />, div);

      const headerCells = div.querySelectorAll(
        '.bah-uswds-table-header-cell .bah-uswds-table-header-cell-content'
      );

      ReactTestUtils.Simulate.keyDown(headerCells[0], { key: 'Enter' });
      expect(loadNextPage).toHaveBeenCalledWith({
        direction: 'asc',
        field: 'document'
      });
    }
  );

  it('should sort by a column with a custom render and sort value', () => {
    ReactDOM.render(
      <AdvancedTable {...props} columns={withCustomColumn} />,
      div
    );

    const headerCells = div.querySelectorAll(
      '.bah-uswds-table-header-cell .bah-uswds-table-header-cell-content'
    );

    ReactTestUtils.Simulate.keyDown(headerCells[0], { key: 'Enter' });

    expect(getCellContent(0, 0)).toEqual('✓');
    expect(getCellContent(0, 1)).toEqual('✓');
    expect(getCellContent(0, 2)).toEqual('X');
    expect(getCellContent(0, 3)).toEqual('X');
    expect(getCellContent(0, 4)).toEqual('X');
  });

  /* scrolling */
  it('should ignore horizontal scrolling when trying to scroll inside the header', (done) => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    const header = div.querySelector('.bah-uswds-table-header-container');
    header.scrollLeft = 10;
    header.scrollTop = 10;

    ReactTestUtils.Simulate.scroll(header);

    setTimeout(() => {
      expect(header.scrollLeft).toEqual(0);
      expect(header.scrollTop).toEqual(10);
      done();
    }, minWait);
  });

  it("should ignore the scroll event if the position hasn't changed", (done) => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    const body = div.querySelector('.bah-uswds-table-body-section');

    ReactTestUtils.Simulate.scroll(body);
    body.scrollLeft = 0;
    body.scrollTop = 0;

    setTimeout(() => {
      expect(body.scrollLeft).toEqual(0);
      expect(body.scrollTop).toEqual(0);
      done();
    }, minWait);
  });

  it('should scroll inside the table body', (done) => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    const body = div.querySelector('.bah-uswds-table-body-section');

    ReactTestUtils.Simulate.scroll(body);
    body.scrollLeft = 10;
    body.scrollTop = 10;

    setTimeout(() => {
      expect(body.scrollLeft).toEqual(10);
      expect(body.scrollTop).toEqual(10);
      done();
    }, minWait);
  });

  /* arrow keys */
  it('should go to the right adjacent cell', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    getCell(1, 1).focus();
    eventMap.keydown({ key: 'ArrowRight', preventDefault });

    expect(document.activeElement).toEqual(getCell(2, 1));
  });

  it('should go to the left adjacent cell', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    getCell(1, 1).focus();
    eventMap.keydown({ key: 'ArrowLeft', preventDefault });

    expect(document.activeElement).toEqual(getCell(0, 1));
  });

  it('should go to the up adjacent cell', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    getCell(1, 1).focus();
    eventMap.keydown({ key: 'ArrowUp', preventDefault });

    expect(document.activeElement).toEqual(getCell(1, 0));
  });

  it('should go to the down adjacent cell', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    getCell(1, 1).focus();
    eventMap.keydown({ key: 'ArrowDown', preventDefault });

    expect(document.activeElement).toEqual(getCell(1, 2));
  });

  it('should stay on the current cell if trying to go left from the top-left cell', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    getCell(0, 0).focus();
    eventMap.keydown({ key: 'ArrowLeft', preventDefault });

    expect(document.activeElement).toEqual(getCell(0, 0));
  });

  it('should stay on the current cell if trying to go right from the bottom-right cell', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    getCell(2, 4).focus();
    eventMap.keydown({ key: 'ArrowRight', preventDefault });

    expect(document.activeElement).toEqual(getCell(2, 4));
  });

  it('should stay on the current cell if trying to go up from the first row', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    getCell(0, 0).focus();
    eventMap.keydown({ key: 'ArrowUp', preventDefault });

    expect(document.activeElement).toEqual(getCell(0, 0));
  });

  it('should stay on the current cell if trying to go down from the last row', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    getCell(0, 4).focus();
    eventMap.keydown({ key: 'ArrowDown', preventDefault });

    expect(document.activeElement).toEqual(getCell(0, 4));
  });

  it('should go to the last element of the previous row when going left from the first cell of a row', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    getCell(0, 1).focus();
    eventMap.keydown({ key: 'ArrowLeft', preventDefault });

    expect(document.activeElement).toEqual(getCell(2, 0));
  });

  it('should go to the first element of the next row when going right from the last cell of a row', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    getCell(2, 0).focus();
    eventMap.keydown({ key: 'ArrowRight', preventDefault });

    expect(document.activeElement).toEqual(getCell(0, 1));
  });

  it('should do nothing if something other than an arrow key is pressed', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    getCell(0, 0).focus();
    eventMap.keydown({ key: 'Enter', preventDefault });

    expect(document.activeElement).toEqual(getCell(0, 0));
  });

  it('should do nothing if an arrow key is pressed but the focus is not in the table body', () => {
    ReactDOM.render(<AdvancedTable {...props} />, div);

    eventMap.keydown({ key: 'ArrowRight', preventDefault });

    expect(document.activeElement).toEqual(document.querySelector('body'));
  });
});
