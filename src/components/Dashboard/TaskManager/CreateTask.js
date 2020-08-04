import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TASK } from '../../../services/queries/todo';
import { Spinner } from '../../global/Spinner';

const CreateTask = () => {
  const [createTask, { loading }] = useMutation(CREATE_TASK, {
    errorPolicy: 'all',
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
    })
  };
  return (
    <div className="shadow-sm p-2 bg-white">
      <div className="badge badge-info p-2 m-2">
        <span style={{ color: '#fff', fontSize: 12 }}>Add a new task</span>
      </div>
      <form onSubmit={submitHandler} className="p-2">
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Title"
            name="title"
            type="text"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <textarea
            rows="5"
            className="form-control"
            placeholder="Description"
            name="description"
            type="text"
            onChange={changeHandler}
          ></textarea>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="form-group">
              <input
                type="datetime-local"
                className="form-control"
                name="deadline"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex flex-row justify-content-end">
              <button type="submit" className="btn-sm btn btn-success mr-2">
                {loading ? <Spinner size={10} /> : 'Create'}
              </button>
              <button type="button" className="btn-sm btn btn-danger">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
