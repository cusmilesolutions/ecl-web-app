import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Rider = ({ rider }) => {
  return (
    <div className="shadow p-3 mx-auto w-25">
      <div className="row col-md-12">
        <div className="col-md-3">
          <div className="avatar d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faUser} size="3x" />
          </div>
        </div>
        <div className="col-md-9 d-flex align-items-center">
          <h5>
            {rider.fname} {rider.lname}
          </h5>
        </div>
      </div>
      <hr />
      <div>
        <ul className="acc_data_ul">
          <li className="acc_data">{rider.gender}</li>
          <li className="acc_data">Address: {rider.address}</li>
          <li className="acc_data">Number of trips: {rider.numOfTrips}</li>
          <li className="acc_data">Date joined: {rider.dateJoined}</li>
          <li className="acc_data">Total revenue: GHc{rider.totalRevenue}</li>
        </ul>
      </div>
      <div>
        <button className="shadow-sm btn btn-block btn-primary">
          View Rider
        </button>
      </div>
    </div>
  );
};

export default Rider;
