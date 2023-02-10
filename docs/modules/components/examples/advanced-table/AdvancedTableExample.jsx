import React from 'react';
import { AdvancedTable } from '@boozallen-uip/uswds-react-table';

export default function AdvancedTableExample() {
  const advancedTableColumns = {
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

  const documents = [
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
    }
  ];

  return (
    <AdvancedTable
      columns={advancedTableColumns}
      data={documents}
      loadNextPage={() => {}}
      tableInstance="test"
    />
  );
}
