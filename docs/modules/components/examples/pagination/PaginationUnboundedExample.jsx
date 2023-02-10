import React, { useState } from 'react';
import { Pagination } from '@boozallen-uip/uswds-react-core';

export default function PaginationUnboundedExample() {
  const [page, setPage] = useState(4);

  return <Pagination page={page} onChangePage={setPage} />;
}
