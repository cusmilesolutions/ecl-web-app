import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className="d-flex align-items-center">
      <div className="border d-flex align-items-center border-2 p-1 pl-2 pr-2 bg-blue m-2 rounded shadow-sm">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          name="search"
          placeholder="Search by order code or phone"
        />
      </div>
    </div>
  );
};

export default Search;
