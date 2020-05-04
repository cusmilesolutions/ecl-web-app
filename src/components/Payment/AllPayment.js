import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";



const AllPayment = ()=>{
    return(
        <div>
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
          <div className="row col-md-12">
            <div className="col-md-4  p-2">
              <button className="btn btn-outline-primary mr-2">
                  <span>Print</span>
              </button>
              <button className="btn btn-outline-primary">
                  <span>Export</span>
              </button>
            </div>
            <div className="col-md-8  p-2">
                <ul className="pagination ml-5">
                <li className="page-item mr-4"><button className="btn btn-outline-primary" ><FontAwesomeIcon icon={faAngleLeft} /> Prev</button></li>
                <li className="page-item mr-4"><button className="btn btn-outline-primary disabled">1 of 3</button></li>
                <li className="page-item"><button className="btn btn-outline-primary">Next <FontAwesomeIcon icon={faAngleRight} /></button></li>
            </ul>
            </div>
        </div>
        </div>
        </div>
    )
};

export default AllPayment;