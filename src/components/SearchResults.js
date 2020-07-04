import React from "react";
import { Table } from 'reactstrap';

const SearchResults = () => {
  return <Table>
    <thead>
      <tr>
        <th>Heading 1</th>
        <th>Heading 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Row 1 Column 1</td>
        <td>Row 1 Column 2</td>
      </tr>
      <tr>
        <td>Row 2 Column 1</td>
        <td>Row 2 Column 2</td>
      </tr>
    </tbody>
  </Table>;
};

export default SearchResults;
