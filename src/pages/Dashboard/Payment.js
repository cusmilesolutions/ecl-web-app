import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/AuthContext';
import {Redirect} from 'react-router';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function displayValue() {
    let filter_by_value = document.getElementById("filter_by");
    document.getElementById("filter_by_label").innerHTML = filter_by_value.options[filter_by_value.selectedIndex].text;
}
const Payments = () => {
  const { state } = useContext(AuthContext);
  return (
    <React.Fragment>
      {state.isAuth ? <div>
        <div className="row col-md-12">
          <h1 className="m-4"> PAYMENT HISTORY</h1>
        </div>
        <div className="row col-md-12 col-lg-12">
            <div className="col-md-3">
                <label id="filter_by_label" className="border">All Payment </label>
            </div>
            <div className="form-group col-md-4">
                  <select className="form-control" name="filter" defaultValue="Filter by" id="filter_by" onChange={displayValue}>
                    <option disabled value="Filter by">Filter by</option>
                    <option value="All Payment">All Payment</option>
                    <option value="Status">Status</option>
                    <option value="Date">Date</option>
                  </select>
            </div>
            <div className="col-md-3 border d-flex align-items-center border-2 p-1 pl-2 pr-2 bg-blue m-2 rounded shadow-sm">
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" name="search" placeholder="Search by name "/>
          </div>
        </div>

        <div className="row col-md-12 ml-2">
          <table className="table table-sm table-hover table-responsive-md table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">No. of trips</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-primary">Kwame</td>
                  <td>3</td>
                  <td>02/05/20</td>
                  <td>Ghc 15.00</td>
                  <td>Paid</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td className="text-primary">Samuel</td>
                  <td>2</td>
                  <td>03/05/20</td>
                  <td>Ghc 13.00</td>
                  <td>Pending</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td className="text-primary">Appaw</td>
                  <td>5</td>
                  <td>04/05/20</td>
                  <td>Ghc 15.00</td>
                  <td>Paid</td>
                  <td>13</td>
                </tr>
              </tbody>
          </table>
            <div className="row col">
            <button type="button" className="btn btn-primary btn-sm mr-2">Print</button>
           <button type="button" className="btn btn-primary btn-sm mr-5">Export</button>
            <ul className="pagination ml-5">
                <li className="page-item mr-4"><a className="page-link" href="#">Prev</a></li>
                <li className="page-item mr-4"><a className="page-link" href="#">1 of 3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </div>
        </div>
      </div> : <Redirect to="/login" />}{' '}
    </React.Fragment>
  );
};

export default Payments;
