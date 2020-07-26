import React, { useState, Fragment } from 'react';
import Modal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBill,
  faUsers,
  faExchangeAlt,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import { Spinner } from '../../global/Spinner';
import AddRider from './AddRider';
import { GET_ALL_RIDERS } from '../../../services/queries/rider';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const Riders = () => {
  const {
    data: ridersData,
    loading: ridersLoading,
    error: riderError,
  } = useQuery(GET_ALL_RIDERS);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
        <AddRider closeNewRider={closeModal} />
      </Modal>
      <div style={{ minHeight: 500 }} className="p-3 shadow-sm bg-white">
        <div className="row">
          <h3 className="col-md-4">Riders</h3>
          <div className="col-md-8">
            <div className="d-flex flex-row">
              <div className="mr-3 p-2 rounded stats_card">
                <FontAwesomeIcon size="lg" icon={faUsers} />
                <span className="ml-2">
                  {ridersData ? ridersData.riders.length : null}
                </span>
              </div>
              <div className="mr-3 p-2 rounded stats_card">
                <FontAwesomeIcon size="lg" icon={faExchangeAlt} />
                <span className="ml-2">
                  {ridersData
                    ? ridersData.riders.reduce(
                        (acc, val) => acc + val.orders,
                        0,
                      )
                    : null}
                </span>
              </div>
              <div>
                <button className="btn btn-info btn-block" onClick={openModal}>
                  Add New Rider
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          {ridersLoading ? (
            <Spinner size={50} color="info" />
          ) : ridersData ? (
            <table className="table table-sm table-hover table-responsive-md">
              <thead className="bg-secondary text-white">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Trips</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {ridersData.riders.map((rider) => (
                  <tr key={rider._id}>
                    <td>{rider.riderId}</td>
                    <td>{rider.firstName}</td>
                    <td>{rider.phone}</td>
                    <td>{rider.orders.length}</td>
                    <td>
                      <button className="btn btn-info btn-sm mr-2">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : riderError ? (
            <div className="d-flex justify-content-center">
              <span>Data cannot be loaded</span>
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default Riders;
