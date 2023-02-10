import React, { useState } from 'react';
import { Pagination } from '@boozallen-uip/uswds-react-core';

export default function PaginationFewerThan8PagesExample() {
  const [page, setPage] = useState(4);

  return <Pagination page={page} totalPages={7} onChangePage={setPage} />;
}
