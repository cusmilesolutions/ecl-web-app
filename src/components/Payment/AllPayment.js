import React from 'react';
import { pdf } from '../../constants/PrintToPDF';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const printPaymentPDF = () => {
  pdf('#table_all_payment');
};

const date = new Date().toUTCString();

const AllPayment = () => {
  return (
    <div>
      <div>
        <table
          className="table table-sm table-hover table-responsive-md table-striped"
          id="table_all_payment"
        >
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
        <div className="row">
          <div className="col-md-4  p-2">
            <button
              className="btn btn-outline-primary mr-2"
              onClick={printPaymentPDF}
            >
              <span>Print</span>
            </button>
            <ReactHTMLTableToExcel
              table="table_all_payment"
              filename={`${date}`}
              sheet="sheet"
              buttonText="Export"
              className="btn btn-outline-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPayment;
