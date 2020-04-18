import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Shipping = () => {
const { state } = useContext(AuthContext);

  return (
    <React.Fragment>
      {state.isAuth ?
      <div>
        <div className="row col-md-12 ml-auto">
            <div className="col-md-4">
              <h2> Map </h2>
              <div className="row shadow pd-5">
               <h2>Google Map Api Link</h2>
              </div>
              <br/>
              <div className="row">
                <div className="col-md-6">
                  <button type="button" className="btn btn-danger pd-5 mg-5"> Edit </button>
                </div>
                <div className="col-md-6">
                  <button type="button" className="btn btn-danger pd-5">Cancel</button>
                </div>
              </div>
            </div>
          <div className="col-8 form-group">
            <h2 >Shipping Details</h2>
            <div className="row col-md-12">
              <div className="col-md-4">
                <label for="customerName">Customer Name:</label>
                <input type="text" className="form-control" id="customerName"></input>
                <label for="itemNo">Number of Items:</label>
                <input type="text" className="form-control" id="itemNo"></input>
              </div>
              <div className="col-md-4">
                <label for="phone">Phone:</label>
                <input type="text" className="form-control" id="phone"></input>
                <label for="cost">Cost:</label>
                <input type="text" className="form-control" id="cost"></input>
              </div>
              <div className="col-md-4">
                <label for="cusEmail">Email:</label>
                <input type="email" className="form-control" id="cusEmail"></input>
                <label for="riders">Rider:</label>
                <select className="form-control" id="riders">
                  <option>Select Rider</option>
                  <option>Rider 2</option>
                  <option>Rider 3</option>
                  <option>Load rider data from rider component</option>
                </select>
              </div>
            </div>
            <h4 className="pt-5">Order Details</h4>
            <div className="row col-md-12">
              <div className="col-md-4">
                <label for="bookedDate">Date Booked:</label>
                <input type="date" className="form-control" id="bookedDate"></input>
                <label for="shipStatus">Shipping Status:</label>
                <input type="text" className="form-control" id="shipStatus"></input>
              </div>
              <div className="col-md-4">
                <label for="bookedTime">Time Booked:</label>
                <input type="time" className="form-control" id="bookedTime"></input>
                <label for="paymentMethod">Payment Type/Method:</label>
                <select className="form-control" id="paymentMethod">
                  <option>Select Method</option>
                  <option>Mobile Money</option>
                  <option>Cash on Delivery</option>
                  <option>Add payment methods</option>
                </select>
              </div>
              <div className="col-md-4">
                <label for="paymentStatus">Payment Status:</label>
                <select className="form-control" id="paymentStatus">
                  <option>Select Status</option>
                  <option>Rider 2</option>
                  <option>Rider 3</option>
                  <option>Add payment values</option>
                </select>
                <label for="statusRange">Payment Status:</label>
                <input type="range" className="form-control-range" id="statusRange"></input>
              </div>
            </div>
            <div className="row col-md-12">
              <div className="col-md-4 mt-5">
                <strong><label for="comment">Comment:</label></strong>
                <textarea className="form-control" rows="5" id="comment"></textarea>
              </div>
            </div>
          </div> 
        </div>
      </div>
     : <Redirect to="/login" />}
    </React.Fragment>
  );
};

export default Shipping;
