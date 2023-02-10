import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import { createClassString } from '@boozallen-uip/uswds-react-utils';

import HeaderRow from './HeaderRow';
import TableBody from './TableBody';

import RenderQueue from '../../managers/RenderQueue';
import ScrollManager from '../../managers/ScrollManager';

const scrollbarHeight = 10;

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.restorePointerTimer = null;

    this.headerComponent = null;
    this.bodyComponent = null;

    this.tableWrapper = null;
    this.internalDiv = null;
    this.tableId = `${uniqueId()}`;

    this.scrolledTable = this.scrolledTable.bind(this);
    this.scrolledHeader = this.scrolledHeader.bind(this);
  }

  reloadTable() {
    if (this.tableWrapper) {
      // force the scroll back to the top of the page
      this.tableWrapper.scrollLeft = 0;
      this.tableWrapper.scrollTop = 0;
    }

    // wait for the scroll to complete before changing the row counts (to prevent false
    // pagination)
    /* istanbul ignore next */
    window.setTimeout(() => {
      if (this.bodyComponent) {
        this.bodyComponent.reloadTable();
      }
    }, 300);
  }

  scrollTo(x, y) {
    const scrollOperation = {
      operation: () => {
        // this check is here to make sure the table and header wrappers exist
        // this condition is hard to re-create in Jest, so we ignore it for coverage
        /* istanbul ignore if */
        if (!this.tableWrapper || !this.headerWrapper) {
          return;
        }

        this.tableWrapper.scrollLeft = x;
        this.tableWrapper.scrollTop = y;
        this.headerWrapper.scrollLeft = 0;
      },
      type: 'overrideScroll'
    };

    RenderQueue.addWrite(scrollOperation);
  }

  scrolledHeader() {
    // The header can only scroll through the use of accessibility hooks.
    // Because there are two scrolling elements (the transform offset + the scroll offset), we
    // need to combine them into a single scroll offset.
    const scrollOperation = {
      operation: () => {
        const headerX = this.headerComponent.currentX || 0;
        const realX = this.headerWrapper.scrollLeft + headerX;

        const x = realX;
        const y = this.tableWrapper.scrollTop;

        ScrollManager.update({
          x,
          y
        });

        // Scroll events in the table body will be applied as transforms while native
        // header scrolls via accessibility hooks, so we need to reset the header scrollLeft
        // to 0 and apply the full horizontal offset via transforms.
        // By calling the scrollTo function, we will apply the full horizontal offset to the
        // table body while simultaneously resetting the header scrollLeft to 0. The table
        // body's scrollLeft change will trigger the same scroll event that occurs from
        // native mouse scrolls in the table body (scrolledTable). scrolledTable will
        // synchronize the horizontal offset in the header entirely via transforms.
        this.scrollTo(x, y);
      },
      type: 'scroll'
    };

    RenderQueue.addRead(scrollOperation);
  }

  scrolledTable() {
    const scrollOperation = {
      operation: () => {
        const x = this.tableWrapper.scrollLeft;
        const y = this.tableWrapper.scrollTop;

        ScrollManager.update({
          x,
          y
        });
      },
      type: 'scroll'
    };

    const pointerOperation = {
      operation: () => {
        if (this.restorePointerTimer) {
          window.clearTimeout(this.restorePointer);
          this.restorePointerTimer = null;
        }
        this.internalDiv.style.pointerEvents = 'none';
        this.restorePointerTimer = window.setTimeout(() => {
          this.internalDiv.style.pointerEvents = 'auto';
        }, 150);
      },
      type: 'pointer'
    };

    RenderQueue.addRead(scrollOperation);
    RenderQueue.addWrite(pointerOperation);
  }

  render() {
    const tableHeight = this.props.bodyHeight
      ? this.props.bodyHeight
      : // setting the table height to a partial row clearly indicates when there's more data
        29.5 * this.props.rowHeight;

    const totalHeight = this.props.rowCount * this.props.rowHeight;
    const needsVerticalScroll = totalHeight > tableHeight;

    const visibleWidth = this.props.bodyWidth
      ? Math.min(this.props.bodyWidth, this.props.contentWidth)
      : '100%';
    const visibleHeight = Math.min(tableHeight, totalHeight);

    const headerStyle = {
      minWidth: visibleWidth,
      maxWidth: visibleWidth,
      maxHeight: this.props.headerHeight,
      minHeight: this.props.headerHeight
    };

    const style = {
      minWidth: visibleWidth,
      maxWidth: visibleWidth,
      minHeight: visibleHeight + this.props.headerHeight
    };

    const bodyStyle = {
      minWidth: visibleWidth,
      maxWidth: visibleWidth,
      height: needsVerticalScroll
        ? visibleHeight
        : visibleHeight + scrollbarHeight
    };

    if (needsVerticalScroll) {
      style.maxHeight = visibleHeight + this.props.headerHeight;
      bodyStyle.maxHeight = visibleHeight;
    }

    const contentStyle = {
      width: this.props.contentWidth,
      height: totalHeight
    };

    let accessibleDescription = `${this.props.columns.visibleOrder.length} column`;
    if (this.props.columns.visibleOrder.length !== 1) {
      accessibleDescription += 's';
    }
    accessibleDescription += ` and ${this.props.rowCount} row`;
    if (this.props.rowCount !== 1) {
      accessibleDescription += 's';
    }

    return (
      <div
        className="bah-uswds-table-container"
        role="grid"
        aria-rowcount={-1}
        aria-colcount={this.props.columns.visibleOrder.length}
        aria-label={`This is a table with ${accessibleDescription}. Use your arrow keys to navigate through cells.`}
        style={style}
      >
        <div
          className="bah-uswds-table-header-container"
          role="presentation"
          style={headerStyle}
          onScroll={this.scrolledHeader}
          ref={(div) => {
            this.headerWrapper = div;
          }}
        >
          <HeaderRow
            borderless={this.props.borderless}
            contentWidth={this.props.contentWidth}
            columns={this.props.columns}
            columnCoords={this.props.columnCoords}
            currentSort={this.props.currentSort}
            headerHeight={this.props.headerHeight}
            sortFn={this.props.sortFn}
            tableId={this.tableId}
            ref={(component) => {
              this.headerComponent = component;
            }}
          />
        </div>

        {this.props.rowCount > 0 ? (
          <div
            className={createClassString([
              'bah-uswds-table-body-section',
              needsVerticalScroll
                ? 'bah-uswds-table-body-section__scrollable'
                : ''
            ])}
            role="presentation"
            style={bodyStyle}
            onScroll={this.scrolledTable}
            ref={(div) => {
              this.tableWrapper = div;
            }}
          >
            <div
              className="bah-uswds-table-content"
              role="presentation"
              style={contentStyle}
              ref={(div) => {
                this.internalDiv = div;
              }}
            >
              <TableBody
                borderless={this.props.borderless}
                tableId={this.tableId}
                data={this.props.data}
                columns={this.props.columns}
                columnCoords={this.props.columnCoords}
                contentWidth={this.props.contentWidth}
                bodyWidth={visibleWidth}
                bodyHeight={visibleHeight}
                rowHeight={this.props.rowHeight}
                rowCount={this.props.rowCount}
                onReachedBottom={this.props.onReachedBottom}
                ref={(component) => {
                  this.bodyComponent = component;
                }}
              />
            </div>
          </div>
        ) : (
          <div
            className="bah-uswds-table-no-data"
            style={{ width: visibleWidth }}
          >
            <div>No data to display.</div>
          </div>
        )}
      </div>
    );
  }
}

Table.propTypes = {
  bodyHeight: PropTypes.number,
  bodyWidth: PropTypes.number,
  borderless: PropTypes.bool.isRequired,
  columns: PropTypes.object.isRequired,
  columnCoords: PropTypes.array.isRequired,
  contentWidth: PropTypes.number,
  currentSort: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  headerHeight: PropTypes.number,
  onReachedBottom: PropTypes.func,
  rowCount: PropTypes.number,
  rowHeight: PropTypes.number,
  sortFn: PropTypes.func.isRequired
};

Table.defaultProps = {
  columns: [],
  rowCount: 0
};
