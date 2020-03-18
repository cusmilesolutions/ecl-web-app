import React from 'react';
import Rider from './Rider';

const RiderList = () => {
  const riders = [
    {
      riderId: 'R001',
      fname: 'Issah',
      lname: 'Mohammed',
      gender: 'Male',
      address: 'House 2, Kasoa',
      dateJoined: '23/04/2019',
      numOfTrips: 27,
      totalRevenue: 1020
    },
    {
      riderId: 'R002',
      fname: 'James',
      lname: 'Hudson',
      gender: 'Male',
      address: 'House 2, Bawaleshie',
      dateJoined: '25/05/2019',
      numOfTrips: 49,
      totalRevenue: 3420
    },
    {
      riderId: 'R003',
      fname: 'Eric',
      lname: 'Osei',
      gender: 'Male',
      address: 'House 4, East Legon',
      dateJoined: '21/05/2019',
      numOfTrips: 19,
      totalRevenue: 3420
    }
  ];
  return (
    <div className="container-fluid">
      <div className="row mt-2 mb-2 col-md-12">
        <div className="col-md-9">
          <h5>Number of Riders: {riders.length}</h5>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary">Add new rider</button>
        </div>
      </div>
      <div className="d-flex">
        {riders.map(rider => (
          <Rider rider={rider} />
        ))}
      </div>
    </div>
  );
};

export default RiderList;
