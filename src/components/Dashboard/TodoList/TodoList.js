import React, { useState } from 'react';
import styles from './Todo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
const todo = [
  {
    id: 1,
    title: 'Meet with a client',
    date: '03/04/2020',
    time: '11:00 AM',
  },
  {
    id: 2,
    title: 'Have a cup of coffee',
    date: '13/04/2020',
    time: '2:00 PM',
  },
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
  return (
    <div>
      <div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="m-1">
            <button type="button" className="btn btn-info btn-sm btn-block">
              All
            </button>
          </div>
          <div className="m-1">
            <button type="button" className="btn btn-success btn-sm btn-block">
              Completed
            </button>
          </div>
          <div className="m-1">
            <button type="button" className="btn btn-warning btn-sm btn-block">
              Active
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <div>
          <ul className={styles.tasks}>
            {todo.map((item) => (
              <li key={item.id} className={styles.list}>
                <div>
                  <p className="m-0">
                    <strong>{item.title}</strong>
                  </p>
                  <p>{item.description}</p>
                  <div className="d-flex flex-row justify-content-between">
                    <span>
                      <span className="text-xs badge badge-secondary" id="date">
                        {item.date} {item.time}
                      </span>
                    </span>
                    <span>
                      <button className="btn rounded-pill btn-outline-success btn-sm mr-1">
                        <FontAwesomeIcon icon={faCheck} />
                      </button>
                      <button className="btn rounded-pill btn-outline-danger btn-sm">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
