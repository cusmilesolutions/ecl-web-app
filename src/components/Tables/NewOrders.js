import React, { useState } from 'react';
import Modal from 'react-modal';
import SearchPrint from '../SearchPrint';

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 600
  }
};

const NewOrders = ({ orders }) => {
  const [viewOrder, setviewOrder] = useState(false);
  const closeViewOrder = () => setviewOrder(false);
  const openViewOrder = () => {
    setviewOrder(true);
  };
  return (
    <div className="mt-2">
      <Modal
        isOpen={viewOrder}
        style={customStyles}
        onRequestClose={closeViewOrder}
      >
        <div>
          <h4>Order #12345</h4>
          <hr />
        </div>
        <div>
          <h6>
            Customer: <span></span>
          </h6>
          <h6>Item Name: </h6>
          <h6>Item Type: </h6>
          <h6>Item Count: </h6>
          <h6>Price: </h6>
          <h6>Starting point: </h6>
          <h6>Delivery point: </h6>
          <h6>Item description: </h6>
        </div>
        <hr />
        <div className="row col-md-12">
          <div className="col-md-6">
            <button className="btn btn-block btn-success">Approve</button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-block btn-danger">Reject</button>
          </div>
        </div>
      </Modal>
      <SearchPrint />
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">Order No.</th>
            <th scope="col">Customer</th>
            <th scope="col">Item type</th>
            <th scope="col">Item name</th>
            <th scope="col">Item count</th>
            <th scope="col">Price(GHC)</th>
            <th scope="col">Starting point</th>
            <th scope="col">Delivery point</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.orderNo}</td>
              <td>{order.customer.phone}</td>
              <td>{order.type}</td>
              <td>{order.itemName}</td>
              <td>{order.itemCount}</td>
              <td>{order.price}</td>
              <td>{order.startPt}</td>
              <td>{order.deliveryPt}</td>
              <td>
                <button
                  onClick={openViewOrder}
                  className="btn btn-primary btn-sm"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewOrders;
