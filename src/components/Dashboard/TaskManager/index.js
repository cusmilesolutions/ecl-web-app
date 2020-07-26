import React, { useState } from 'react';
import Tasks from './Tasks';
import CreateTask from './CreateTask';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_TASK, GET_TASKS } from '../../../services/queries/todo';

const TaskManagement = () => {
  const { data: todo, loading: tasksLoading, error: tasksError } = useQuery(
    GET_TASKS,
  );

  const [createTask, { loading: newLoading }] = useMutation(CREATE_TASK, {
    errorPolicy: 'all',
    onError: (error) => console.log(error.graphQLErrors[0].message),
    update(cache, { data: { createTask } }) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            const newTodoRef = cache.writeQuery({
              data: createTask,
              query: GET_TASKS,
            });
            return [...existingTodos, newTodoRef];
          },
        },
      });
    },
  });

  const [task, settask] = useState({
    title: '',
    description: '',
    deadline: null,
  });
  const changeHandler = (e) => {
    settask({ ...task, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    createTask({
      variables: {
        title: task.title,
        description: task.description,
        deadline: task.deadline,
      },
    });
  };

  return (
    <div>
      <div className="row my-2">
        <div className="col-md-6">
          <CreateTask
            loading={newLoading}
            submitHandler={submitHandler}
            changeHandler={changeHandler}
          />
        </div>
        <div className="col-md-6">
          <Tasks
            todo={todo}
            tasksError={tasksError}
            tasksLoading={tasksLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
