import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './Todo.module.scss';
import { useQuery, useMutation } from '@apollo/client';
import {
  GET_TASKS,
  GET_COMPLETED_TASKS,
  GET_UNCOMPLETED_TASKS,
  DELETE_TASK,
  COMPLETE_TASK,
} from '../../../services/queries/todo';

import { Spinner } from '../../global/Spinner';

const AllTasks = () => {
  // Query to get all tasks
  const { data: todo } = useQuery(GET_TASKS, {
    pollInterval: 500,
  });
  // Mutation to delete a task
  const [deleteTask] = useMutation(DELETE_TASK);
  // Mutation to complete a task
  const [completeTask] = useMutation(COMPLETE_TASK);
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todo.tasks.tasks.map((item) => (
        <li key={item._id} className={styles.list}>
          <div>
            <p className="m-0">
              <strong>{item.title}</strong>
            </p>
            <div className="d-flex flex-row justify-content-between">
              <span>
                <span
                  className={
                    item.status === 'completed'
                      ? 'text-xs badge badge-success mr-1'
                      : 'text-xs badge badge-warning mr-1'
                  }
                  id="date"
                >
                  {item.status}
                </span>
                <span className="text-xs badge badge-secondary" id="date">
                  {item.deadline}
                </span>
              </span>
              <span>
                <button
                  onClick={() => completeTask({ variables: { id: item._id } })}
                  className="btn rounded-pill btn-outline-success btn-sm mr-1"
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button
                  onClick={() => deleteTask({ variables: { id: item._id } })}
                  className="btn rounded-pill btn-outline-danger btn-sm"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const CompletedTasks = () => {
  // Query to get completed tasks
  const { data: todo } = useQuery(GET_COMPLETED_TASKS, {
    pollInterval: 500,
  });
  // Mutation to delete a task
  const [deleteTask] = useMutation(DELETE_TASK);

  return (
    <ul className={styles.tasks}>
      {todo.subTasks.tasks.map((item) => (
        <li key={item._id} className={styles.list}>
          <div>
            <p className="m-0">
              <strong>{item.title}</strong>
            </p>
            <div className="d-flex flex-row justify-content-between">
              <span>
                <span className="text-xs badge badge-secondary" id="date">
                  {item.deadline}
                </span>
              </span>
              <span>
                <button
                  onClick={() => deleteTask({ variables: { id: item._id } })}
                  className="btn rounded-pill btn-outline-danger btn-sm"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const UncompletedTasks = () => {
  // Query to get uncompleted tasks
  const { data: todo } = useQuery(GET_UNCOMPLETED_TASKS, {
    pollInterval: 500,
  });
  // Mutation to delete a task
  const [deleteTask] = useMutation(DELETE_TASK);
  // Mutation to complete a task
  const [completeTask] = useMutation(COMPLETE_TASK);

  return (
    <ul className={styles.tasks}>
      {todo.subTasks.tasks.map((item) => (
        <li key={item._id} className={styles.list}>
          <div>
            <p className="m-0">
              <strong>{item.title}</strong>
            </p>
            <div className="d-flex flex-row justify-content-between">
              <span>
                <span className="text-xs badge badge-secondary" id="date">
                  {item.deadline}
                </span>
              </span>
              <span>
                <button
                  onClick={() => completeTask({ variables: { id: item._id } })}
                  className="btn rounded-pill btn-outline-success btn-sm mr-1"
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button
                  onClick={() => deleteTask({ variables: { id: item._id } })}
                  className="btn rounded-pill btn-outline-danger btn-sm"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Tasks = () => {
  // Get all the types of tasks
  const { data: allTodo, loading, error } = useQuery(GET_TASKS, {
    pollInterval: 500,
  });

  const { data: uncompletedTodo } = useQuery(GET_UNCOMPLETED_TASKS, {
    pollInterval: 500,
  });

  const { data: completedTodo } = useQuery(GET_COMPLETED_TASKS, {
    pollInterval: 500,
  });
  const [taskType, setTaskType] = useState('All');
  const displayComponent = (e) => {
    let comp = e.target.id;
    switch (comp) {
      case 'all_tasks':
        setTaskType('All');
        break;
      case 'completed_tasks':
        setTaskType('Completed');
        break;
      case 'uncompleted_tasks':
        setTaskType('Uncompleted');
        break;
      default:
        return <AllTasks />;
    }
  };

  return (
    <div className="shadow-sm p-3 bg-white">
      <div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="m-1">
            <button
              onClick={displayComponent}
              id="all_tasks"
              type="button"
              className="btn btn-info btn-sm btn-block"
            >
              All {allTodo ? allTodo.tasks.totalTasks : null}
            </button>
          </div>
          <div className="m-1">
            <button
              onClick={displayComponent}
              id="completed_tasks"
              type="button"
              className="btn btn-success btn-sm btn-block"
            >
              Completed{' '}
              {completedTodo ? completedTodo.subTasks.totalTasks : null}
            </button>
          </div>
          <div className="m-1">
            <button
              onClick={displayComponent}
              id="uncompleted_tasks"
              type="button"
              className="btn btn-warning btn-sm btn-block"
            >
              Uncompleted{' '}
              {uncompletedTodo ? uncompletedTodo.subTasks.totalTasks : null}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div style={{ maxHeight: 250, height: 250 }} className="overflow-auto">
          {loading ? (
            <Spinner />
          ) : taskType === 'All' ? (
            <AllTasks />
          ) : taskType === 'Completed' ? (
            <CompletedTasks />
          ) : taskType === 'Uncompleted' ? (
            <UncompletedTasks />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
