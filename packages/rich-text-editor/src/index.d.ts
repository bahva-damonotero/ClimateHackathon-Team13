import React from 'react';

declare module '@boozallen-uip/uswds-react-rich-text-editor' {
  export import RichTextEditor = __RichTextEditor.RichTextEditor;
  export import RichTextEditorProps = __RichTextEditor.RichTextEditorProps;
}

declare namespace __RichTextEditor {
  export interface RichTextEditorProps {
    /** Used to set the initial content for the editor */
    children?: JSX.Element;
    /** Function called with the new content whenever the editor's content changes */
    onChange?: (newContent: string) => void;
  }
  export const RichTextEditor: React.FC<RichTextEditorProps>;
}
