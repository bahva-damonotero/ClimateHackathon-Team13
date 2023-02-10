import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Table from './Table';

export default function AdvancedTable(props) {
  const tableComponent = useRef(null);

  const [data, setData] = useState(props.data);
  const [sort, setSort] = useState(props.sort);

  useEffect(() => {
    // this check is here to make sure the child Table component exists
    // this condition is hard to re-create in Jest, so we ignore it for coverage
    /* istanbul ignore else */
    if (tableComponent.current) {
      // table type has changed, reset the scroll and regenerate the cells
      tableComponent.current.reloadTable();
    }
  }, [props.tableInstance]);

  useEffect(() => {
    // data prop has changed, update the data state to match it
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    // sort prop has changed, update the sort state to match it
    setSort(props.sort);
  }, [props.sort]);

  useEffect(() => {
    // table data has changed, reset the scroll and regenerate the cells
    tableComponent.current.reloadTable();
  }, [data]);

  function sortColumn(field, direction) {
    if (props.localSort) {
      const column = props.columns.data[field];
      const comparitorMultiplier = direction === 'asc' ? 1 : -1;

      const sortedData = [...data].sort((a, b) => {
        const aSortValue = column.sortValue ? column.sortValue(a) : a[field];
        const bSortValue = column.sortValue ? column.sortValue(b) : b[field];

        if (aSortValue > bSortValue) {
          return 1 * comparitorMultiplier;
        }
        if (aSortValue < bSortValue) {
          return -1 * comparitorMultiplier;
        }
        return 0;
      });

      setData(sortedData);
      setSort({ direction, field });
    }

    props.loadNextPage({ direction, field });
    tableComponent.current.reloadTable();
  }

  function prepareTable() {
    let x = 0;

    for (const key of props.columns.visibleOrder) {
      const column = props.columns.data[key];
      column.x = x;
      x += column.width;
    }

    let totalWidth = 0;

    const columnOrder = props.columns.visibleOrder;
    const columns = columnOrder.map((columnTitle) => {
      const column = props.columns.data[columnTitle];
      const columnX = totalWidth;
      totalWidth += column.width;

      return {
        x: columnX,
        width: column.width
      };
    });

    return {
      columns,
      width: totalWidth
    };
  }

  /* render */
  const calculatedValues = prepareTable();

  return (
    <div className="bah-uswds-advanced-table">
      <Table
        rowCount={data.length}
        rowHeight={40}
        headerHeight={50}
        contentWidth={calculatedValues.width}
        bodyWidth={props.visibleWidth}
        bodyHeight={props.visibleHeight}
        data={data}
        columns={props.columns}
        columnCoords={calculatedValues.columns}
        currentSort={sort}
        sortFn={sortColumn}
        onReachedBottom={props.loadNextPage}
        ref={(table) => {
          tableComponent.current = table;
        }}
        borderless={props.borderless}
      />
    </div>
  );
}

function columnDataValidator(props, propName, componentName) {
  const columns = props[propName];
  const error = new Error(
    `Invalid prop \`${propName}\` supplied to` +
      ` \`${componentName}\`. Validation failed.`
  );

  if (!columns || !Object.keys(columns).length) return error;

  for (const key of Object.keys(columns)) {
    const { displayName, width } = columns[key];

    if (!displayName || !width) {
      return error;
    }
  }
}

AdvancedTable.propTypes = {
  borderless: PropTypes.bool,
  columns: PropTypes.shape({
    data: columnDataValidator,
    visibleOrder: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  data: PropTypes.array,
  loadNextPage: PropTypes.func,
  localSort: PropTypes.bool,
  sort: PropTypes.shape({
    direction: PropTypes.oneOf(['asc', 'desc']).isRequired,
    field: PropTypes.string
  }),
  tableInstance: PropTypes.string,
  visibleWidth: PropTypes.number,
  visibleHeight: PropTypes.number
};

AdvancedTable.defaultProps = {
  borderless: false,
  localSort: true,
  sort: {
    direction: 'asc',
    field: ''
  }
};
