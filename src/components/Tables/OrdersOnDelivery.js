import React from 'react';
import SearchPrint from '../SearchPrint';

const OrdersOnDelivery = () => {
  const ordersOnDelivery = [
    {
      orderNo: '1234',
      pickUp: '12:33pm',
      startPt: 'Kasoa',
      destination: 'Accra',
      price: 125,
      rider: '012'
    },
    {
      orderNo: '1235',
      pickUp: '1:53pm',
      startPt: 'Kasoa',
      destination: 'Accra',
      price: 125,
      rider: '032'
    },
    {
      orderNo: '1236',
      pickUp: '8:13am',
      startPt: 'Kasoa',
      destination: 'Accra',
      price: 125,
      rider: '014'
    }
  ];
  return (
    <div>
      <SearchPrint />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order No.</th>
              <th scope="col">Pick up</th>
              <th scope="col">Starting point</th>
              <th scope="col">Destination</th>
              <th scope="col">Price(GHC)</th>
              <th scope="col">Rider</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {ordersOnDelivery.map(order => (
              <tr key={order._id}>
                <td>{order.orderNo}</td>
                <td>{order.pickUp}</td>
                <td>{order.startPt}</td>
                <td>{order.destination}</td>
                <td>{order.price}</td>
                <td>{order.rider}</td>
                <td>
                  <button className="btn btn-primary">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersOnDelivery;
