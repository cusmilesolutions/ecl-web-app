import React from 'react';
import Tasks from './Tasks';
import CreateTask from './CreateTask';

const TaskManagement = () => {
  return (
    <div>
      <div className="row my-2">
        <div className="col-md-6">
          <CreateTask />
        </div>
        <div className="col-md-6">
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
