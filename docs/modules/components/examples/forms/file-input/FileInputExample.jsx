import React from 'react';
import { FileInput, Form } from '@boozallen-uip/uswds-react-core';

export default function FileInputExample() {
  return (
    <Form>
      <FileInput id="fileinput-single-example">Select a File</FileInput>

      <FileInput id="fileinput-multiple-example" multiple>
        Select Files
      </FileInput>

      <FileInput
        accept=".jpg,.png,.pdf"
        hint="Choose one or more image files"
        id="fileinput-image-example"
        multiple
      >
        Select Images
      </FileInput>
    </Form>
  );
}
