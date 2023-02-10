import React, { useEffect, useRef, useState } from 'react';
import {
  GridContainer,
  GridCol,
  GridRow
} from '@boozallen-uip/uswds-react-core';
import { RichTextEditor } from '@boozallen-uip/uswds-react-rich-text-editor';

export default function TextEditorExample() {
  const editorContainerRef = useRef();

  const [content, setContent] = useState();

  // set content to the original innerHTML state of the editor
  useEffect(() => {
    if (!editorContainerRef.current) return;

    const editorDiv = editorContainerRef.current.querySelector('.ql-editor');
    setContent(editorDiv.innerHTML);
  }, [editorContainerRef]);

  return (
    <GridContainer>
      <GridRow>
        <GridCol>
          <h1>Rich Text Editor Example</h1>
        </GridCol>
      </GridRow>

      <GridRow>
        <GridCol>
          <div ref={editorContainerRef}>
            <RichTextEditor onChange={setContent}>
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
                <a
                  href="http://quilljs.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Quill
                </a>
                .
              </p>
            </RichTextEditor>
          </div>
        </GridCol>
      </GridRow>

      <GridRow>
        <GridCol>
          <h2>Content Preview</h2>
        </GridCol>
      </GridRow>

      <GridRow>
        <GridCol>
          <div
            className="ql-editor"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </GridCol>
      </GridRow>
    </GridContainer>
  );
}
