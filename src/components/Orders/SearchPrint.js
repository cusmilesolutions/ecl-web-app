import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import GeneratePDF from "../../documents/PrintToPDF";
const SearchPrint = () => {
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
      <div>
        <button className="btn-primary m-2 btn btn-sm">Export to excel</button>
      </div>
      <div>
          <GeneratePDF />
      </div>
      <div>
        <button className="btn-primary m-2 btn btn-sm">Email</button>
      </div>
    </div>
  );
};

export default SearchPrint;
