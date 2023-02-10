import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import showPassword from '@uswds/uswds/js/_usa-password';

import ShowPassword from '.';
import { Form, FormNote, Input } from '..';

describe('ShowPassword', () => {
  const singleFieldJsx = (
    <Form>
      <Input id="password" type="password">
        Password
      </Input>

      <FormNote>
        <ShowPassword target="password" />
      </FormNote>
    </Form>
  );

  it('should call `showPassword.on()` to initialize the component', () => {
    const onSpy = jest.spyOn(showPassword, 'on');

    render(singleFieldJsx);

    expect(onSpy).toHaveBeenCalled();
  });

  it('should match snapshot (single field)', () => {
    const tree = renderer.create(singleFieldJsx).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot (two fields)', () => {
    const tree = renderer
      .create(
        <Form>
          <Input id="newPass" type="password">
            New Password
          </Input>

          <Input id="confirmPass" type="password">
            Confirm Password
          </Input>

          <FormNote>
            <ShowPassword target={['newPass', 'confirmPass']} />
          </FormNote>
        </Form>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
