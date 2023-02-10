import React from 'react';
import PropTypes from 'prop-types';
import { createClassString } from '@boozallen-uip/uswds-react-utils';

import ScrollManager from '../../managers/ScrollManager';

const watchedProps = [
  'rowCount',
  'rowHeight',
  'bodyHeight',
  'contentWidth',
  'bodyWidth'
];
const arrowKeys = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'];

export default class TableBody extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visibleRange: ''
    };

    this.lastX = 0;
    this.lastY = 0;
    this.blockPagination = false;

    this.cellCache = {};
    this.visibleCells = [];

    this.scrollListener = null;

    this.tableScrolled = this.tableScrolled.bind(this);

    // bindings for accessibility users
    this.keyPressed = this.keyPressed.bind(this);
  }

  componentDidMount() {
    this.scrollListener = ScrollManager.subscribe(this.tableScrolled);
    // because we can't reliably detect focus/blur events on table children, we'll just listen
    // to all keypress events and only handle it when a cell is active and an arrow key is also
    // pressed
    document.addEventListener('keydown', this.keyPressed);

    this.reloadTable();
  }

  componentDidUpdate(prevProps) {
    const { rowCount } = this.props;
    if (prevProps.rowCount > rowCount) {
      // the total number of rows has been reduced, do not allow pagination until
      // regeneration is complete
      this.blockPagination = true;
    }

    for (const prop of watchedProps) {
      if (prevProps[prop] !== this.props[prop]) {
        // if any of the watched props change values, regenerate all the cells
        this.generateAllCells();
        break;
      }
    }
  }

  componentWillUnmount() {
    // this check is here to make sure scrollListener exists
    // this condition is hard to re-create in Jest, so we ignore it for coverage
    /* istanbul ignore else */
    if (this.scrollListener) {
      ScrollManager.unsubscribe(this.scrollListener);
    }

    document.removeEventListener('keydown', this.keyPressed);
  }

  getActiveCellCoords() {
    const active = document.activeElement;

    const colIndex = parseInt(active.dataset.bahUswdsColIndex, 10);
    const rowIndex = parseInt(active.dataset.bahUswdsRowIndex, 10);

    return [colIndex, rowIndex];
  }

  findActiveCell(element) {
    const { tableId } = this.props;
    if (!element || !this.tableDiv.contains(element)) {
      // no element was provided to compare or the element that was provided is not a child
      // of the table container (this prevents us from unnecessarily iterating through
      // unreleated DOM elements)
      return null;
    }

    // validate that the element is a cell in this table
    /* istanbul ignore else */
    if (
      element.dataset.bahUswdsTableElement === 'cell' &&
      element.dataset.bahUswdsTableOwner === tableId
    ) {
      return element;
    }

    // it's not a cell, check its parent
    /* istanbul ignore next */
    return this.findActiveCell(element.parentElement);
  }

  reloadTable() {
    this.setState(
      {
        visibleRange: ''
      },
      () => {
        this.generateAllCells();
      }
    );
  }

  keyPressed(e) {
    // check if a cell or a child of a cell is currently focused
    const { activeElement } = document;
    const active = this.findActiveCell(activeElement);

    if (!active || arrowKeys.indexOf(e.key) === -1) {
      // no active cell is selected and/or a non-arrow key was pressed
      return;
    }

    // since an arrow key was pressed, override the default behavior
    e.preventDefault();

    let nextId;

    switch (e.key) {
      case 'ArrowDown':
        nextId = this.focusDown();
        break;

      case 'ArrowUp':
        nextId = this.focusUp();
        break;

      case 'ArrowLeft':
        nextId = this.focusLeft();
        break;

      case 'ArrowRight':
        nextId = this.focusRight();
        break;

      // no default
    }

    const nextCell = document.getElementById(nextId);
    /* istanbul ignore else */
    if (nextCell) nextCell.focus();
  }

  focusRight() {
    const { columns, rowCount, tableId } = this.props;
    const [colIndex, rowIndex] = this.getActiveCellCoords();

    // go to the next column
    let nextId = `${tableId}-cell-${colIndex + 1}-${rowIndex}`;
    if (colIndex + 1 >= columns.visibleOrder.length) {
      // this is the last column, go the first column of the next row
      if (rowIndex + 1 < rowCount) {
        nextId = `${tableId}-cell-0-${rowIndex + 1}`;
      } else {
        // this is also the last row, so do nothing
        return null;
      }
    }

    return nextId;
  }

  focusLeft() {
    const { columns, tableId } = this.props;
    const [colIndex, rowIndex] = this.getActiveCellCoords();

    // go to the previous column
    let nextId = `${tableId}-cell-${colIndex - 1}-${rowIndex}`;
    if (colIndex === 0) {
      // this is the first column, go the last column of the previous row
      if (rowIndex > 0) {
        nextId = `${tableId}-cell-${columns.visibleOrder.length -
          1}-${rowIndex - 1}`;
      } else {
        // this is also the first row, so do nothing
        return null;
      }
    }

    return nextId;
  }

  focusUp() {
    const { tableId } = this.props;
    const [colIndex, rowIndex] = this.getActiveCellCoords();

    // go to the previous row
    const nextId = `${tableId}-cell-${colIndex}-${rowIndex - 1}`;
    if (rowIndex === 0) {
      // this is also the first row, so do nothing
      return null;
    }

    return nextId;
  }

  focusDown() {
    const { rowCount, tableId } = this.props;
    const [colIndex, rowIndex] = this.getActiveCellCoords();

    // go to the next row
    const nextId = `${tableId}-cell-${colIndex}-${rowIndex + 1}`;
    if (rowIndex + 1 >= rowCount) {
      // this is also the last row, so do nothing
      return null;
    }

    return nextId;
  }

  tableScrolled(scroll) {
    const { onReachedBottom, rowCount } = this.props;
    const visibleCoords = this.calculateVisibleRows(scroll.x, scroll.y);
    if (!visibleCoords || visibleCoords.length === 0) {
      // there is no data so there's nothing to show
      return;
    }

    const visibleRange = visibleCoords.range;

    this.lastX = scroll.x;
    this.lastY = scroll.y;

    if (visibleRange !== this.state.visibleRange) {
      // cells changed
      this.visibleCells = visibleCoords.rows.reduce(
        (cells, rowCoords, index) => {
          const rowCells = rowCoords.map((coord) => this.cellCache[coord]);
          const row = (
            <div
              className="bah-uswds-table-row"
              key={visibleCoords.firstRow + index}
              aria-rowindex={visibleCoords.firstRow + index + 1}
              role="row"
            >
              {rowCells}
            </div>
          );
          cells.push(row);
          return cells;
        },
        []
      );

      // handle pagination scroll events separately from state changes (which in turn renders
      // the visible cells to DOM)
      // this is because state changes are batched and this batching process causes delayed
      // pagination checks
      if (onReachedBottom && this.isAtBottom() && this.props.rowCount > 0) {
        if (this.blockPagination) {
          this.blockPagination = false;
          return;
        }

        onReachedBottom();
      }

      this.setState({
        visibleRange
      });
    }
  }

  calculateVisibleRows(x, y) {
    const {
      bodyHeight,
      bodyWidth,
      columns,
      columnCoords,
      rowCount,
      rowHeight
    } = this.props;
    if (
      this.props.rowCount === 0 ||
      this.props.columns.visibleOrder.length === 0
    ) {
      // there's no data
      return null;
    }

    // allow a buffer of one out-of-view row above and below the visible area
    const mathematicalTopRow = Math.floor(y / rowHeight);
    const bottomY = y + bodyHeight;
    const mathematicalBottomRow = Math.ceil(bottomY / rowHeight);
    const topRow = Math.max(0, mathematicalTopRow - 1);
    const bottomRow = Math.min(rowCount - 1, mathematicalBottomRow + 1);

    // calculate the visible X range
    const leftX = x;
    const rightX = x + bodyWidth;

    const visibleColumns = [];
    let leadingColumn = null;
    let trailingColumn = null;

    for (let i = 0; i < columnCoords.length; i++) {
      const column = columnCoords[i];
      const columnStartX = column.x;
      const columnEndX = column.x + column.width;

      if (columnEndX < leftX) {
        // column is out of view and is to the left of the visible area
        // use it as a potential leading cell
        leadingColumn = i;
        continue;
      } else if (columnStartX > rightX) {
        // column is out of view and is to the right of the visible area
        // use it as a potential trailing cell and stop looping
        trailingColumn = i;
        break;
      }

      visibleColumns.push(i);
    }

    if (leadingColumn) {
      visibleColumns.unshift(leadingColumn);
    }
    if (trailingColumn) {
      visibleColumns.push(trailingColumn);
    }
    const visibleRows = [];

    for (let i = topRow; i <= bottomRow; i++) {
      const rowCells = [];

      for (let j = 0; j < columnCoords.length; j++) {
        rowCells.push(`${j},${i}`);
      }

      visibleRows.push(rowCells);
    }

    return {
      rows: visibleRows,
      firstRow: topRow,
      lastRow: bottomRow,
      range: `${visibleColumns[0]},${topRow}-${
        visibleColumns[visibleColumns.length - 1]
      },${bottomRow}`
    };
  }

  isAtBottom() {
    const { bodyHeigt, rowCount, rowHeight } = this.props;
    const visibleBottom = this.lastY + this.props.bodyHeight;
    // allow a half row buffer at the bottom
    const contentBottom = rowCount * rowHeight - rowHeight / 2;

    if (visibleBottom >= contentBottom) {
      return true;
    }
    return false;
  }

  bodyCellRender(columnIndex, rowIndex) {
    const { columns, data } = this.props;
    const columnId = columns.visibleOrder[columnIndex];
    const customRender = columns.data[columnId].render;
    const row = data[rowIndex];
    const value = row[columnId];

    return <div>{customRender ? customRender(row) : value}</div>;
  }

  generateAllCells() {
    // const { borderless, rowCount, tableId } = this.props;
    // pre-generate all the cells the table will have when the data is initially loaded in
    // we'll pull these from the cache on-the-fly as they come into view
    const cellCache = {};

    for (let rowIndex = 0; rowIndex < this.props.rowCount; rowIndex++) {
      this.props.columnCoords.forEach((column, columnIndex) => {
        const cellPositioning = {
          x: column.x,
          y: rowIndex * this.props.rowHeight,
          width: column.width,
          height: this.props.rowHeight
        };

        const cellContent = this.bodyCellRender(columnIndex, rowIndex);
        const coord = `${columnIndex},${rowIndex}`;

        const realCell = (
          <div
            key={coord}
            id={`${this.props.tableId}-cell-${columnIndex}-${rowIndex}`}
            className={createClassString([
              this.props.borderless
                ? 'bah-uswds-table-cell--borderless'
                : 'bah-uswds-table-cell',
              rowIndex % 2 !== 0 ? 'bah-uswds-table-cell__odd-row' : ''
            ])}
            role="gridcell"
            aria-colindex={columnIndex + 1}
            aria-rowindex={rowIndex + 1}
            data-bah-uswds-table-element="cell"
            data-bah-uswds-table-owner={this.props.tableId}
            data-bah-uswds-col-index={columnIndex}
            data-bah-uswds-row-index={rowIndex}
            // allow keyboard selection of the header cell
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            style={{
              top: cellPositioning.y,
              left: cellPositioning.x,
              height: cellPositioning.height,
              width: cellPositioning.width
            }}
          >
            {cellContent}
          </div>
        );

        cellCache[coord] = realCell;
      });
    }

    this.cellCache = null; // try to explicitly release the previous cache from memory
    this.cellCache = cellCache;

    this.tableScrolled({
      x: this.lastX,
      y: this.lastY
    });
  }

  render() {
    const { contentWidth, rowCount, rowHeight } = this.props;
    const style = {
      width: contentWidth,
      height: rowCount * rowHeight
    };

    return (
      <div
        className="bah-uswds-table-body-container"
        role="presentation"
        style={style}
      >
        <div
          className="bah-uswds-table-body"
          role="presentation"
          ref={(div) => {
            this.tableDiv = div;
          }}
        >
          {this.visibleCells}
        </div>
      </div>
    );
  }
}

TableBody.propTypes = {
  borderless: PropTypes.bool.isRequired,
  bodyCellRender: PropTypes.func,
  bodyHeight: PropTypes.number,
  bodyWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['100%'])]),
  columns: PropTypes.object.isRequired,
  columnCoords: PropTypes.array.isRequired,
  contentWidth: PropTypes.number,
  data: PropTypes.array.isRequired,
  onReachedBottom: PropTypes.func,
  rowCount: PropTypes.number,
  rowHeight: PropTypes.number,
  tableId: PropTypes.string
};
