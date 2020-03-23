import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';

const Updates = () => {
  const updates = [
    {
      orderNo: '1142',
      status: 'new'
    },
    {
      orderNo: '1352',
      status: 'delivered'
    },
    {
      orderNo: '1342',
      status: 'in-progress'
    },
    {
      orderNo: '1042',
      status: 'new'
    }
  ];
  return (
    <div className="col-md-2 pt-2 pb-2 h-auto border border-black">
      <h6>Updates</h6>
      <div>
        {updates.map(order => (
          <div className="shadow-sm mb-2 rounded p-2 card_div text-primary">
            <FontAwesomeIcon icon={faShippingFast} />
            <span className="ml-2">Order #{order.orderNo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
