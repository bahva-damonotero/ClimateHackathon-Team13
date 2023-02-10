import React from 'react';

declare module '@boozallen-uip/uswds-react-table' {
  export import AdvancedTable = __AdvancedTable.AdvancedTable;
  export import AdvancedTableProps = __AdvancedTable.AdvancedTableProps;
}

declare namespace __AdvancedTable {
  // TODO: add JSDOC comments describing these properties
  export interface AdvancedTableProps {
    borderless?: boolean;
    columns: {
      data: {
        [x: string]: {
          displayName: string;
          width: number;
        };
      };
      visibleOrder: string[];
    };
    data?: any[];
    loadNextPage: (sort?: { direction: 'asc' | 'desc'; field: string }) => void;
    localSort?: boolean;
    sort?: {
      direction: 'asc' | 'desc';
      field?: string;
    };
    tableInstance?: string;
    visibleWidth?: number;
    visibleHeight?: number;
  }
  export const AdvancedTable: React.FC<AdvancedTableProps>;
}
