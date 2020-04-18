import React from 'react';

const Todo = () => {
  
    return (
     <div className="row col-md-12">
        <div className="col-md-4">
            <div className="card-header py-3">
                <h6 className="text-primary font-weight-bold m-0">Add A New Item</h6>
            </div>
            <div className="form">
                <div className="form-group">
                <   input type="email" className="form-control" placeholder="Add Item To List" id="todoItem"/>
                </div>
                <div className="form-group">
                    <label for="taskDate">Due date:</label>
                    <input type="date" className="form-control" id="taskDate"/>
                    <label for="taskTime">Time:</label>
                    <input type="time" className="form-control" id="taskTime"/>
                </div>
                <div className="col p-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm btn-block"
                    >
                      Add
                    </button>
                  </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="card-header py-3">
                <h6 className="text-primary font-weight-bold m-0">To do List</h6>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="row align-items-center no-gutters">
                        <div className="col mr-2">
                            <p className="mb-0">
                                <strong>General Meeting With Riders</strong>
                            </p>
                            <span className="text-xs mr-5">10:30 AM</span>
                            <span className="text-xs ml-5" id="date">08/05/2020</span>
                        </div>
                         <div className="col-auto">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="task-1"/>
                                <label className="custom-control-label" for="task-1"></label>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row align-items-center no-gutters">
                        <div className="col mr-2">
                            <p className="mb-0">
                                <strong>Call a customer with id # 0101012</strong>
                            </p>
                            <span className="text-xs mr-5" id="time">11:30 AM</span>
                            <span className="text-xs ml-5" id="date">18/04/2020</span>
                        </div>
                        <div className="col-auto">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="task-2"/>
                                <label className="custom-control-label" for="task-2"></label>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row align-items-center no-gutters">
                        <div className="col mr-2">
                            <p className="mb-0">
                                <strong>Meet a new client for a contract</strong>
                            </p>
                            <span className="text-xs mr-5">2:30 PM</span>
                            <span className="text-xs ml-5" id="date">15/04/2020</span>
                        </div>
                         <div className="col-auto">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="task-3"/>
                                <label className="custom-control-label" for="task-3"></label>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </div>
  );
};

export default Todo;
