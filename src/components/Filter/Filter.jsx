import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div className='filter'>
      <label htmlFor="filter">Filter contacts: </label>
      <input className='filter-input'
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
