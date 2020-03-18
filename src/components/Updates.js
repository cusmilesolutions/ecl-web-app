import React from 'react';

const Updates = () => {
  return (
    <div className="col-md-2 pt-2 pb-2 h-auto border border-black">
      <h6>Updates</h6>
      <div>
        <div className="shadow-sm mb-2 rounded p-2 card_div">
          <p>Order #1342 </p>
          <p>Status: New</p>
        </div>
        <div className="shadow-sm mb-2 rounded p-2 card_div">
          <p>Order #1342 </p>
          <p>Status: Delivered</p>
        </div>
        <div className="shadow-sm mb-2 rounded p-2 card_div">
          <p>Order #1342 </p>
          <p>Status: Cancelled</p>
        </div>
        <div className="shadow-sm mb-2 rounded p-2 card_div">
          <p>Order #1342 </p>
          <p>Status: In-progress</p>
        </div>
      </div>
    </div>
  );
};

export default Updates;
