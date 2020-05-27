import React, { useState } from 'react';
import Modal from 'react-modal';
import TodoList from './TodoList/TodoList';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
  },
};

/*const setTodo = useState([
    state = {
        todos: todoList,
        show: 'all',
        allComplete: true,
      },
      //Method to add to todo list
    addTodo = (todo) => {
    setState((state) => ({
        todos: [todo, ...state.todos]
    }))
    },
    //Method to add to todo list
    addTodo = (todo) => {
    setState((state) => ({
        todos: [todo, ...state.todos]
    }))
    },
    //Method to check a completed item on the list
    complete = (id) => {
    setState((state) => ({
        todos: state.todos.map((todo) => {
            if (todo.id === id) {
                return {
                    complete: true,
                    ...todo
                }
            }
        })
    }))
    },
    //Update todo
    updateTodo = (show) => {
    setState({
        showTodo: show
    })
    },
    //delete a single todo item
    deleteTodo = (id) => {
    setState((state) => ({
        todos: state.todos.filter((todo) => todo.id !==id)
    }))
    },
    //remove all completed items
    removeAllCompleted = () => {
    setState((state) => ({
        todos: state.todos.filter((todo) => !todo.complete.complete)
    }))
}

])




if (state.show === 'all'){
    todos = state.todos;
}else if(state.show === 'active'){
    todos = state.todos.filter((todo) => !todo.complete.complete) 
}else if(state.show ==='complete'){
    todos = state.todos.filter((todo) => todo.complete.complete)
}
*/

const Todo = () => {
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
        <TodoList closeNewRider={closeModal} />
      </Modal>
      <div className="row">
        <div className="col-md-6">
          <div className="shadow-sm p-2 m-2 bg-white">
            <div className="p-2">
              <div className="page_header bg-secondary rounded shadow-sm">
                <span>Task Management</span>
              </div>
            </div>
            <div className="row p-2">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Title"
                    id="title"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="3"
                    className="form-control"
                    placeholder="Description"
                    id="title"
                    type="text"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Due date</label>
                  <input type="date" className="form-control" id="taskDate" />
                </div>
                <div className="form-group">
                  <label>Due time</label>
                  <input type="time" className="form-control" id="taskTime" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between p-2">
              <div>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={openModal}
                >
                  View Tasks
                </button>
              </div>
              <div>
                <div className="d-flex flex-row justify-content-end">
                  <button type="button" className="btn btn-success mr-2">
                    Create
                  </button>
                  <button type="button" className="btn btn-danger">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Todo;
