import React, { useState } from 'react';
import Modal from 'react-modal';
import TodoList from './TodoList';

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

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
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
        <div className="shadow-sm p-2 m-2 bg-white">
            <div className="card-header">
                <h6 className="text-primary font-weight-bold m-0">
                    To do List
                </h6>
            </div>
            <div className="form row">
                <div className="form-group col-md-4 p-4">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Add A New Item"
                        id="todoItem"
                    />
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-6 p-4">
                            <input type="date" className="form-control" id="taskDate" />
                        </div>
                        <div className="col-md-6 p-4">
                            <input type="time" className="form-control" id="taskTime" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-6 p-4">
                            <button
                                type="button"
                                className="btn btn-outline-primary btn-sm btn-block">Add</button>
                        </div>
                        <div className="col-md-6 p-4">
                            <button
                                type="button"
                                className="btn btn-outline-danger btn-sm btn-block" onClick={openModal}
                                 >View List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
};

export default Todo;