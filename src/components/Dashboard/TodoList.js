import React, { useState } from 'react';

const todo = [
    { 
      id: 1, 
      title: 'Meet with a client', 
      date: '03/04/2020', 
      time: '11:00 AM' },
    { 
      id: 2, 
      title: 'Have a cup of coffee', 
      date: '13/04/2020', 
      time: '2:00 PM' },
    {
      id: 3,
      title: 'Plan the monthly budget',
      date: '25/04/2020',
      time: '5:00 PM',
    },
    {
      id: 4,
      title: 'Pay monthlly allowance and bills',
      date: '29/04/2020',
      time: '11:30 AM',
    },
  ];


const TodoList = () => {
    return(
        <div>
            <div>
                <div className="card-header py-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="text-primary font-weight-bold m-0">
                            To do List
                            </h6>
                        </div>
                        <div className="col-sm-3">
                            <button
                             type="button"
                            className="btn btn-outline-primary btn-sm btn-block">
                            All
                             </button>
                        </div>
                        <div className="col-sm-3">
                            <button
                            type="button"
                            className="btn btn-outline-success btn-sm btn-block"
                            >
                            Completed
                            </button>
                        </div>
                        <div className="col-sm-3">
                            <button
                            type="button"
                            className="btn btn-outline-warning btn-sm btn-block"
                            >
                            Active
                            </button>
                        </div>
                    </div>
                </div>
            <div>
            <div>
                <h4 className="text-primary">Tasks</h4>
                <hr />
            </div>
            <div>
                <ul className={todo.tasks}>
                <li className={todo.list}>
                    <div>
                    <p className="m-0">
                        <strong>General Meeting With Riders</strong>
                    </p>
                    <div className="d-flex flex-row justify-content-between">
                        <span className="text-xs">10:30 AM</span>
                        <span className="text-xs" id="date">
                        08/05/2020
                        </span>
                    </div>
                    </div>
                </li>
                <li className={todo.list}>
                    <div>
                    <p className="m-0">
                        <strong>Call a customer with id # 0101012</strong>
                    </p>
                    <div className="d-flex flex-row justify-content-between">
                        <span className="text-xs">11:30 AM</span>
                        <span className="text-xs">18/04/2020</span>
                    </div>
                    </div>
                </li>
                <li className={todo.list}>
                    <div>
                    <p className="m-0">
                        <strong>Meet a new client for a contract</strong>
                    </p>
                    <div className="d-flex flex-row justify-content-between">
                        <span className="text-xs">2:30 PM</span>
                        <span className="text-xs">15/04/2020</span>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    )
}

export default TodoList;