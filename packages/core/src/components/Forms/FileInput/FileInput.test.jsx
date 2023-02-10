import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import fileInput from '@uswds/uswds/js/usa-file-input';

import FileInput from '.';

describe('FileInput', () => {
  const id = 'file-input-example';
  const label = 'Select a file to upload';

  it('should call `fileInput.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(fileInput, 'on');

    render(<FileInput id={id}>{label}</FileInput>);

    expect(onSpy).toHaveBeenCalled();
  });

  it('changing the `disabled` prop to true should call `fileInput.disable()`', () => {
    const disableSpy = jest.spyOn(fileInput, 'disable');

    const { rerender } = render(<FileInput id={id}>{label}</FileInput>);

    rerender(
      <FileInput disabled id={id}>
        {label}
      </FileInput>
    );

    expect(disableSpy).toHaveBeenCalled();
  });

  it('changing the `disabled` prop to false should call `fileInput.enable()`', () => {
    const enableSpy = jest.spyOn(fileInput, 'enable');

    const { rerender } = render(
      <FileInput disabled id={id}>
        {label}
      </FileInput>
    );

    rerender(<FileInput id={id}>{label}</FileInput>);

    expect(enableSpy).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <FileInput
          accept="application/pdf,text/plain"
          hint="Select PDF or TXT files"
          id={id}
        >
          {label}
        </FileInput>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
