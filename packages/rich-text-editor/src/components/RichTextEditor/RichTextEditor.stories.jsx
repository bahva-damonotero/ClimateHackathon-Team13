import React from 'react';
import { action } from '@storybook/addon-actions';

import RichTextEditor from '.';

export default {
  title: 'RichTextEditor',
  component: RichTextEditor,
  argTypes: {
    children: { type: null }
  },
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
};

const Template = (args) => <RichTextEditor {...args} />;

const defaultArgs = {
  onChange: action('onChange')
};

export const empty = Template.bind({});
empty.args = {
  ...defaultArgs
};

export const existingContent = Template.bind({});
existingContent.args = {
  ...defaultArgs,
  children: (
    <>
      <p className="ql-align-center">
        <u className="ql-size-large">UIP Rich Text Editor</u>
      </p>

      <p className="ql-align-center">
        The UIP Rich Text Editor is a{' '}
        <a
          href="https://designsystem.digital.gov"
          rel="noopener noreferrer"
          target="_blank"
        >
          USWDS
        </a>{' '}
        themed WYSIWYG powered by{' '}
        <a href="http://quilljs.com" rel="noopener noreferrer" target="_blank">
          Quill
        </a>
        .
      </p>

      <p>
        <br />
      </p>

      <p>
        <strong>
          <u>Usage</u>
        </strong>
      </p>

      <pre className="ql-syntax" spellCheck="false">
        {`import { RichTextEditor } from '@boozallen-uip/uswds-react-rich-text-editor';

export default function RichTextEditorExample() {
  return (
    <RichTextEditor>
      <p>Existing content</p>
    </RichTextEditor>
  );
}`}
      </pre>
    </>
  )
};
