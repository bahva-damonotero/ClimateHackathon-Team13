import React from 'react';
import PropTypes from 'prop-types';

import HeaderCell from './HeaderCell';

import ScrollManager from '../../managers/ScrollManager';
import RenderQueue from '../../managers/RenderQueue';

export default class HeaderRow extends React.Component {
  constructor(props) {
    super(props);

    this.scrollListener = null;
    this.lastX = 0;
    this.headerDiv = null;

    this.tableScrolled = this.tableScrolled.bind(this);
  }

  componentDidMount() {
    this.scrollListener = ScrollManager.subscribe(this.tableScrolled);
  }

  componentWillUnmount() {
    // this check is here to make sure the scrollListener exists
    // this condition is hard to re-create in Jest, so we ignore it for coverage
    /* istanbul ignore else */
    if (this.scrollListener) {
      ScrollManager.unsubscribe(this.scrollListener);
    }
  }

  get currentX() {
    return this.lastX;
  }

  tableScrolled(scroll) {
    if (scroll.x !== this.lastX) {
      const headerOperation = {
        operation: () => {
          // this check is here to make sure the header container exists
          // this condition is hard to re-create in Jest, so we ignore it for coverage
          /* istanbul ignore else */
          if (this.headerDiv) {
            this.headerDiv.style.transform = `translate(${-1 *
              scroll.x}px, 0px)`;
          }
        },
        type: 'header'
      };

      RenderQueue.addWrite(headerOperation);

      this.lastX = scroll.x;
    }
  }

  headerCellRender(columnIndex) {
    const columnId = this.props.columns.visibleOrder[columnIndex];
    const column = this.props.columns.data[columnId];
    const isLast = columnIndex + 1 === this.props.columns.visibleOrder.length;
    const isActive = this.props.currentSort.field === columnId;

    return (
      <HeaderCell
        isLast={isLast}
        isActive={isActive}
        title={columnId}
        displayName={column.displayName}
        defaultDirection={column.defaultDirection || undefined}
        currentSort={this.props.currentSort}
        updateSort={this.props.sortFn}
      />
    );
  }

  render() {
    const style = {
      width: this.props.contentWidth,
      height: this.props.headerHeight,
      top: 0
    };

    const cells = this.props.columnCoords.map((column, index) => {
      const cellStyle = {
        width: column.width,
        height: this.props.headerHeight
      };

      const headerCell = this.headerCellRender(index);

      return (
        <div
          key={index}
          className={
            this.props.borderless
              ? 'bah-uswds-table-header-cell--borderless'
              : 'bah-uswds-table-header-cell'
          }
          role="columnheader"
          id={`${this.props.tableId}-header-${index}`}
          style={cellStyle}
        >
          {headerCell}
        </div>
      );
    });

    return (
      <div
        className="bah-uswds-table-header"
        role="presentation"
        style={style}
        ref={(div) => {
          this.headerDiv = div;
        }}
      >
        <div className="bah-uswds-table-header-row" role="row">
          {cells}
        </div>
      </div>
    );
  }
}

HeaderRow.propTypes = {
  borderless: PropTypes.bool.isRequired,
  columns: PropTypes.object.isRequired,
  columnCoords: PropTypes.array.isRequired,
  contentWidth: PropTypes.number,
  currentSort: PropTypes.object.isRequired,
  headerHeight: PropTypes.number,
  sortFn: PropTypes.func.isRequired,
  tableId: PropTypes.string
};
