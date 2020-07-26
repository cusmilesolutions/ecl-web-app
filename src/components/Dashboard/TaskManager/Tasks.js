import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './Todo.module.scss';

import { Spinner } from '../../global/Spinner';

const Tasks = ({ todo, tasksLoading, tasksError }) => {
  return (
    <div className="shadow-sm p-3 bg-white">
      <div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="m-1">
            <button type="button" className="btn btn-info btn-sm btn-block">
              All {todo ? todo.tasks.tasks.length : null}
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
        <div style={{ maxHeight: 250, height: 250 }} className="overflow-auto">
          {tasksLoading ? (
            <Spinner />
          ) : tasksError ? (
            <div>
              <p className="text-center">Error loading tasks</p>
            </div>
          ) : todo ? (
            <ul className={styles.tasks}>
              {todo.tasks.tasks.map((item) => (
                <li key={item._id} className={styles.list}>
                  <div>
                    <p className="m-0">
                      <strong>{item.title}</strong>
                    </p>
                    <div className="d-flex flex-row justify-content-between">
                      <span>
                        <span
                          className="text-xs badge badge-secondary"
                          id="date"
                        >
                          {item.deadline}
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
          ) : todo.tasks.tasks.length < 1 ? (
            <div>
              <p className="text-center">Task manager is empty</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
