import React from 'react';
import { Table } from '@boozallen-uip/uswds-react-core';

export default function TableStripedExample() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th scope="col">Document title</th>
          <th scope="col">Description</th>
          <th scope="col">Year</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">Declaration of Independence</th>
          <td>
            Statement adopted by the Continental Congress declaring independence
            from the British Empire.
          </td>
          <td>1776</td>
        </tr>

        <tr>
          <th scope="row">Bill of Rights</th>
          <td>
            The first ten amendments of the U.S. Constitution guaranteeing
            rights and freedoms.
          </td>
          <td>1791</td>
        </tr>

        <tr>
          <th scope="row">Declaration of Sentiments</th>
          <td>
            A document written during the Seneca Falls Convention outlining the
            rights that American women should be entitled to as citizens.
          </td>
          <td>1848</td>
        </tr>

        <tr>
          <th scope="row">Emancipation Proclamation</th>
          <td>
            An executive order granting freedom to slaves in designated southern
            states.
          </td>
          <td>1863</td>
        </tr>
      </tbody>
    </Table>
  );
}
