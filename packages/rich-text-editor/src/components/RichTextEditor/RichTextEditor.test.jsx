import React from 'react';
import { render } from '@testing-library/react';

import RichTextEditor from '.';

describe('RichTextEditor', () => {
  it('should render properly', () => {
    const { container } = render(<RichTextEditor id="rich-text-editor" />);

    expect(container.querySelector('.ql-editor')).toBeTruthy();
  });
});
