import React from "react";
import { Table } from "reactstrap";

const sample = [
  ["Header 1", "Header 2", "Header 3"],
  ["Row 1 Item 1", "Row 1 Item 2", "Row 1 Item 3"],
  ["Row 2 Item 1", "Row 2 Item 2", "Row 2 Item 3"],
];

const FancyTable = ({ tableContents = sample }) => {
  // tableContents is 2D array with R elements of length C inc header

  const header = tableContents[0];
  const contents = tableContents.splice(1);
  console.log(contents);
  return (
    <Table className="fancy-table">
      <thead>
        <tr>
          {header.map((element) => (
            <th className="table-header">{element}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Map each remaining row, then match eatch element to a cell */}
        {contents.map((row) => (
          <tr>
            {row.map((element) => (
              <th className="table-body">{element}</th>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FancyTable;
