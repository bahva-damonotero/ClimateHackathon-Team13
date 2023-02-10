/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faCode,
  faFont,
  faImage,
  faLink,
  faListOl,
  faListUl,
  faRemoveFormat
} from '@fortawesome/free-solid-svg-icons';
import Quill from 'quill';
import { v4 as uuid } from 'uuid';

import {
  Button,
  Form,
  Input,
  Modal,
  ModalHeading,
  ModalBody,
  ModalFooter
} from '@boozallen-uip/uswds-react-core';

export default function RichTextEditor({ children, onChange }) {
  const editorRef = useRef();

  const ImageBlot = Quill.import('formats/image');
  const Parchment = Quill.import('parchment');
  const Delta = Quill.import('delta');

  const [id] = useState(process.env.NODE_ENV === 'test' ? 'testing' : uuid());
  const [editor, setEditor] = useState();
  const [selection, setSelection] = useState();
  const [formatAtSelection, setFormatAtSelection] = useState({});
  const [ready, setReady] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageSelected, setImageSelected] = useState(false);
  const [linkSelected, setLinkSelected] = useState(false);

  // IDs and classes
  const editorClass = 'bah-uswds-editor';

  const toolbarClass = `${editorClass}--toolbar`;
  const toolbarId = `${toolbarClass}--${id}`;

  const inputClass = `${editorClass}--input`;
  const inputId = `${inputClass}--${id}`;

  const buttonClassPrefix = `${editorClass}--button-`;

  // inputs aren't ready to be focused without a small timeout for the modal to "do its thing"
  function handleFocus(elId) {
    setTimeout(() => document.getElementById(elId).focus(), 200);
  }

  function setUpLinkModal() {
    const format = editor.getFormat();
    setLinkSelected(!!format.link);
    setLinkUrl(format.link ? format.link : '');
    setSelection(editor.getSelection(true));
    handleFocus('link-input');
  }

  function formatLink(e) {
    e.preventDefault();
    // focus editor so that editor.hasFocus() is true in the editor-change function
    editor.focus();
    editor.formatText(
      selection.index,
      selection.length,
      'link',
      linkUrl,
      Quill.sources.USER
    );
  }

  function setUpImageModal() {
    setSelection(editor.getSelection(true));
    handleFocus('image-input');
  }

  // handles removing old copy of image and inserting image into quill
  function formatImage(e) {
    e.preventDefault();
    // focus editor so that editor.hasFocus() is true in the editor-change function
    editor.focus();

    // if has origImageUrl, needs deletion of previous image
    if (imageSelected) {
      editor.updateContents(new Delta().retain(selection.index).delete(1));
    }

    editor.insertEmbed(selection.index, 'image', imageUrl, Quill.sources.USER);
    setImageUrl('');
    setImageSelected(false);
  }

  // initialize Quill
  useEffect(() => {
    if (!editorRef.current) return;
    const q = new Quill(`#${inputId}`, {
      modules: { toolbar: `#${toolbarId}` }
    });

    // event listener handles editor image highlighting
    q.root.addEventListener('click', (e) => {
      const image = Parchment.find(e.target);
      if (image instanceof ImageBlot) {
        q.setSelection(image.offset(q.scroll), 1, 'user');
        setImageUrl(image.domNode.src);
        // need this so we know that this was an edit, not a new entry
        setImageSelected(true);
      } else {
        setImageUrl('');
        setImageSelected(false);
      }
    });
    setEditor(q);

    setReady(true);
  }, [editorRef]);

  // update formatAtSelection state whenever the selection changes
  // or a toolbar button is clicked

  function updateFormatAtSelection() {
    setFormatAtSelection(editor.getFormat());
  }

  useEffect(() => {
    if (!ready) return;

    // watch editor changes
    editor.on('editor-change', (event) => {
      if (editor.hasFocus()) {
        updateFormatAtSelection();
        if (onChange && event === 'text-change') {
          const editorDiv = editorRef.current.querySelector('.ql-editor');
          onChange(editorDiv.innerHTML);
        }
      } else setFormatAtSelection({});
    });
  }, [ready]);

  return (
    <div className={editorClass}>
      {/* Toolbar */}
      <div id={toolbarId} className={toolbarClass}>
        <span className="ql-formats text-formatting">
          {/* Font Size */}
          <FontAwesomeIcon icon={faFont} fixedWidth />

          <select
            className="usa-select ql-size"
            defaultValue=""
            title="Font Size"
            aria-label="Font Size"
          >
            <option value="small">Small</option>
            <option value="">Normal</option>
            <option value="large">Large</option>
            <option value="huge">Huge</option>
          </select>

          {/* Text Alignment */}
          <FontAwesomeIcon
            icon={
              formatAtSelection.align
                ? {
                    center: faAlignCenter,
                    justify: faAlignJustify,
                    right: faAlignRight
                  }[formatAtSelection.align]
                : faAlignLeft
            }
            fixedWidth
          />

          <select
            className="usa-select ql-align"
            defaultValue=""
            title="Text Align"
            aria-label="Text Align"
          >
            <option value="">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
            <option value="justify">Justify</option>
          </select>
        </span>

        <span className="ql-formats">
          {/* Bold */}
          <Button
            outline={!formatAtSelection.bold}
            className="ql-bold"
            title="Bold"
            aria-label="Bold"
            onClick={updateFormatAtSelection}
          >
            B
          </Button>

          {/* Italic */}
          <Button
            outline={!formatAtSelection.italic}
            className="ql-italic"
            title="Italic"
            aria-label="Italic"
            onClick={updateFormatAtSelection}
          >
            I
          </Button>

          {/* Underline */}
          <Button
            outline={!formatAtSelection.underline}
            className="ql-underline"
            title="Underline"
            aria-label="Underline"
            onClick={updateFormatAtSelection}
          >
            U
          </Button>
        </span>

        <span className="ql-formats">
          {/* Ordered List */}
          <Button
            outline={formatAtSelection.list !== 'ordered'}
            className="ql-list"
            value="ordered"
            title="Ordered List"
            aria-label="Ordered List"
            onClick={updateFormatAtSelection}
          >
            <FontAwesomeIcon icon={faListOl} fixedWidth />
          </Button>

          {/* Bullets/Unordered List */}
          <Button
            outline={formatAtSelection.list !== 'bullet'}
            className="ql-list"
            value="bullet"
            title="Bullets"
            aria-label="Bullets"
            onClick={updateFormatAtSelection}
          >
            <FontAwesomeIcon icon={faListUl} fixedWidth />
          </Button>
        </span>

        <span className="ql-formats">
          {/* Link */}
          <Button
            outline={!formatAtSelection.link}
            className={buttonClassPrefix}
            title="Link"
            aria-label="Link"
            data-open-modal
            aria-controls="link-modal"
            onClick={setUpLinkModal}
          >
            <FontAwesomeIcon icon={faLink} fixedWidth />
          </Button>

          {/* Image */}
          <Button
            outline={!imageSelected}
            className={buttonClassPrefix}
            title="Image"
            aria-label="Image"
            data-open-modal
            aria-controls="image-modal"
            onClick={setUpImageModal}
          >
            <FontAwesomeIcon icon={faImage} fixedWidth />
          </Button>

          {/* Code Block */}
          <Button
            outline={!formatAtSelection['code-block']}
            className="ql-code-block"
            title="Code Block"
            aria-label="Code Block"
            onClick={updateFormatAtSelection}
          >
            <FontAwesomeIcon icon={faCode} fixedWidth />
          </Button>
        </span>

        <span className="ql-formats">
          {/* Remove Formatting */}
          <Button
            outline
            className="ql-clean"
            title="Remove Formatting"
            aria-label="Code Block"
            onClick={updateFormatAtSelection}
          >
            <FontAwesomeIcon icon={faRemoveFormat} fixedWidth />
          </Button>
        </span>
      </div>

      {/* Link Modal */}
      <Modal
        id="link-modal"
        describedBy="link-modal-description"
        labelledBy="link-modal-label"
        forceAction
      >
        <ModalHeading id="image-modal-heading">
          {linkSelected ? 'Update' : 'Insert'} Link
        </ModalHeading>
        <Form onSubmit={formatLink} autoComplete="off">
          <ModalBody id="link-modal-description">
            <Input
              id="link-input"
              onChange={(e) => setLinkUrl(e.target.value)}
              value={linkUrl}
            >
              Link URL
            </Input>
          </ModalBody>
          <ModalFooter>
            <Button data-close-modal type="submit">
              {linkSelected ? 'Update' : 'Insert'}
            </Button>
            <Button
              unstyled
              data-close-modal
              className="padding-105 text-center"
            >
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>

      {/* Image Modal */}
      <Modal
        id="image-modal"
        describedBy="image-modal-description"
        labelledBy="image-modal-label"
        forceAction
      >
        <ModalHeading id="image-modal-heading">
          {imageSelected ? 'Update' : 'Insert'} Image
        </ModalHeading>
        <Form onSubmit={formatImage} autoComplete="off">
          <ModalBody id="image-modal-description">
            <Input
              id="image-input"
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
            >
              Image URL
            </Input>
          </ModalBody>
          <ModalFooter>
            <Button data-close-modal type="submit">
              {imageSelected ? 'Update' : 'Insert'}
            </Button>
            <Button
              unstyled
              data-close-modal
              onClick={() => setImageUrl('')}
              className="padding-105 text-center"
            >
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>

      {/* Editor */}
      <div id={inputId} className={inputClass} ref={editorRef}>
        {children}
      </div>
    </div>
  );
}

RichTextEditor.propTypes = {
  /** Used to set the initial content for the editor */
  children: PropTypes.node,
  /** Function called with the new content whenever the editor's content changes */
  onChange: PropTypes.func
};
