import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../../services/queries/order';
import { Spinner } from '../global/Spinner';

const CreateOrder = ({ closeModal }) => {
  const [addOrder, { loading, data }] = useMutation(CREATE_ORDER, {
    errorPolicy: 'all',
    onError: (error) => console.log(error.graphQLErrors[0].message),
  });
  const [order, setorder] = useState({
    senderName: '',
    senderPhone: '',
    recipientName: '',
    recipientPhone: '',
    itemName: '',
    itemType: '',
    itemCount: '',
    price: '',
    method: '',
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
        senderName: order.senderName,
        senderPhone: order.senderPhone,
        recipientName: order.recipientName,
        recipientPhone: order.recipientPhone,
        itemName: order.itemName,
        itemType: order.itemType,
        itemCount: order.itemCount,
        price: order.price,
        method: order.method,
        startPt: order.startPt,
        deliveryPt: order.deliveryPt,
        description: order.description,
      },
    })
      .then(() => {
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
        <Spinner size={50} color="primary" />
      ) : (
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="form-group col-md-6">
              <label>Sender's name</label>
              <input
                onChange={changeHandler}
                name="senderName"
                className="form-control"
                autoFocus
              />
            </div>
            <div className="form-group col-md-6">
              <label>Sender's phone</label>
              <input
                onChange={changeHandler}
                name="senderPhone"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label>Recipient's name</label>
              <input
                onChange={changeHandler}
                name="recipientName"
                className="form-control"
                autoFocus
              />
            </div>
            <div className="form-group col-md-6">
              <label>Recipient's phone</label>
              <input
                onChange={changeHandler}
                name="recipientPhone"
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
            <div className="form-group col-md-3">
              <label>From</label>
              <input
                onChange={changeHandler}
                name="startPt"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-3">
              <label>To</label>
              <input
                onChange={changeHandler}
                name="deliveryPt"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-3">
              <label>Price</label>
              <input
                onChange={changeHandler}
                name="price"
                type="number"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-3">
              <label>Payment method</label>
              <select
                onChange={changeHandler}
                name="method"
                className="form-control"
              >
                <option defaultValue disabled>
                  Select payment
                </option>
                <option value="momo">Cash</option>
                <option value="momo">MOMO</option>
              </select>
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
