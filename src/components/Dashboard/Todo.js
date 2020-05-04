import React from 'react';
import todo from './Todo.module.scss';

const Todo = () => {
  return (
    <div className="shadow-sm p-2 m-2 row bg-white">
      <div className="col-md-4">
        <div>
          <h4 className="text-primary">Add new task</h4>
          <hr />
        </div>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add Item To List"
              id="todoItem"
            />
          </div>
          <div className="form-group">
            <label>Due date:</label>
            <input type="date" className="form-control" id="taskDate" />
          </div>
          <div className="form-group">
            <label>Time:</label>
            <input type="time" className="form-control" id="taskTime" />
          </div>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm btn-block"
          >
            Add
          </button>
        </form>
      </div>
      <div className="col-md-8">
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
  );
};

export default Todo;
