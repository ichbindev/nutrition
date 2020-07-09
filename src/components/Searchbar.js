import React, { useState } from 'react';

const Searchbar = ({ onSearch = () => {}}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <div className="searchbar">
      <form>
        <label className="food-search-input-label" htmlFor="food-search-input">
          Search for a food:&nbsp;
        </label>
        <input
          className="food-search-input"
          name="food-search-input"
          placeholder="Banana"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />{' '}
        <button className="food-search-submit" 
          type="submit"
          onClick={event => onSubmit(event)}
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default Searchbar;
