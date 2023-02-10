import React, { useState } from 'react';
import { Pagination } from '@boozallen-uip/uswds-react-core';

export default function PaginationMoreThan7PagesExample() {
  const [page, setPage] = useState(4);

  return <Pagination page={page} totalPages={8} onChangePage={setPage} />;
}
