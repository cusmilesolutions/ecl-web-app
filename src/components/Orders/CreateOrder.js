import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_ORDER } from '../Queries/order';

const CreateOrder = ({ closeModal }) => {
  const [addOrder, { loading, error, data }] = useMutation(CREATE_ORDER, {
    errorPolicy: 'all',
    onError: (error) => console.log(error.graphQLErrors[0].message),
  });
  const [order, setorder] = useState({
    customerName: '',
    customerPhone: '',
    itemName: '',
    itemType: '',
    itemCount: '',
    price: '',
    startPt: '',
    deliveryPt: '',
    description: '',
  });
  const changeHandler = (e) => {
    const value = e.target.value;
    setorder({ ...order, [e.target.name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addOrder({
      variables: {
        customerName: order.customerName,
        customerPhone: order.customerPhone,
        itemName: order.itemName,
        itemType: order.itemType,
        itemCount: order.itemCount,
        price: order.price,
        startPt: order.startPt,
        deliveryPt: order.deliveryPt,
        description: order.description,
      },
    })
      .then((res) => {
        console.log(data);
        closeModal();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="badge badge-primary p-2">
        <span style={{ color: '#fff', fontSize: 15 }}>Create new order</span>
      </div>
      <hr />
      {loading ? (
        <div className="d-flex justify-content-center">
          <div
            style={{ width: 50, height: 50 }}
            className="spinner-border text-danger"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <form className="container" onSubmit={submitHandler}>
          <div className="row">
            <div className="form-group col-md-6">
              <label>Customer's name</label>
              <input
                onChange={changeHandler}
                name="customerName"
                className="form-control"
                autoFocus
              />
            </div>
            <div className="form-group col-md-6">
              <label>Customer's phone</label>
              <input
                onChange={changeHandler}
                name="customerPhone"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label>Item</label>
              <input
                onChange={changeHandler}
                name="itemName"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-3">
              <label>Item type</label>
              <input
                onChange={changeHandler}
                name="itemType"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-3">
              <label>Number of items</label>
              <input
                onChange={changeHandler}
                name="itemCount"
                type="number"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label>From</label>
              <input
                onChange={changeHandler}
                name="startPt"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-4">
              <label>To</label>
              <input
                onChange={changeHandler}
                name="deliveryPt"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-4">
              <label>Price</label>
              <input
                onChange={changeHandler}
                name="price"
                type="number"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              onChange={changeHandler}
              name="description"
              className="form-control"
            ></textarea>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button type="submit" className="btn btn-block btn-success">
                Create
              </button>
            </div>
            <div className="col-md-6">
              <button onClick={closeModal} className="btn btn-block btn-danger">
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateOrder;
