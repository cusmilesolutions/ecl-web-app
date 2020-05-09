import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {pdf} from "../../constants/PrintToPDF";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import data from "./MOCK_DATA";


const printPaymentPDF = ()=>{
      pdf('#table_pending')
    };

const date = new Date().toUTCString();

const PendingPayment = ()=>{
    return(
        <div>
            <div className="row col-md-12 ml-2">
          <table className="table table-sm table-hover table-responsive-md table-striped" id="table_pending">
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
                {data.filter(status=>{ return status.status==="Pending"}).map(el => {
                    return(
                    <tr key={el.id}>
                      <td>{el.name}</td>
                      <td>{el.id}</td>
                      <td>{el.date}</td>
                      <td>$ {el.amount}</td>
                      <td>{el.status}</td>
                      <td>{el.trips}</td>
                    </tr>
                        );
                    })}
              </tbody>
          </table>
          <div className="row col-md-12">
            <div className="col-md-4  p-2">
              <button className="btn btn-outline-primary mr-2" onClick={printPaymentPDF}>
                  <span>Print</span>
              </button>
              <ReactHTMLTableToExcel table="table_pending" filename={`${date}`} sheet="sheet" buttonText="Export" className="btn btn-outline-primary" />
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

export default PendingPayment;