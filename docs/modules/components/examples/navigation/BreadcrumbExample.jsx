import React from 'react';
import { Breadcrumb } from '@boozallen-uip/uswds-react-core';

export default function BreadcrumbExample() {
  const links = [
    { text: 'Home', href: '/' },
    { text: 'Federal Contracting', href: '/federalcontracting' },
    { text: 'Contract assistance programs', href: '/contract' },
    {
      text: 'Women-owned small business federal contracting program',
      href: '/women-owned'
    }
  ];

  return <Breadcrumb links={links} />;
}
