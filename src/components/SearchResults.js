import React from "react";
import { Table } from 'reactstrap';

const SearchResults = () => {
  return <Table className="search-results">
    <thead>
      <tr>
        <th>Food</th>
        <th>Brand</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="search-result-food-name">Food Name 1</td>
        <td className="search-result-food-brand">Brand 1</td>
        <td className="search-result-food-calories">Calories 1</td>
      </tr>
      <tr>
        <td>Food Name 2</td>
        <td>Brand 2</td>
        <td>Calories 2</td>
      </tr>
      <tr>
        <td>Food Name 3</td>
        <td>Brand 2</td>
        <td>Calories 3</td>
      </tr>
    </tbody>
  </Table>;
};

export default SearchResults;
