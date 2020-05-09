import React, {useState} from 'react';

const todoList = [
    {id:1, title: "Meet with a client", date:"03/04/2020", time:"11:00 AM"},
    {id:2, title: "Have a cup of coffee", date:"13/04/2020", time:"2:00 PM"},
    {id:3, title: "Plan the monthly budget", date:"25/04/2020", time:"5:00 PM"},
    {id:4, title: "Pay monthlly allowance and bills", date:"29/04/2020", time:"11:30 AM"}
]

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
  return (
    <div className="shadow-sm p-2 m-2 row bg-white">
      <div className="col-md-4">
        <div>
          <h4 className="text-primary">Add new task</h4>
          <hr />
        </div>
        <div className="col-md-8">
            <div className="card-header py-3">
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="text-primary font-weight-bold m-0">To do List</h6>
                    </div>
                    <div className="col-sm-3">
                        <button
                        type="button"
                        className="btn btn-outline-primary btn-sm btn-block"
                        >
                        All
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button
                        type="button"
                        className="btn btn-outline-success btn-sm btn-block"
                        >
                        Completed
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button
                        type="button"
                        className="btn btn-outline-warning btn-sm btn-block"
                        >
                        Active
                        </button>
                    </div>
                </div>
            </div>
            <div>
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
                                    <input className="custom-control-input" type="checkbox" id="1"/>
                                    <label className="custom-control-label" for="1"></label>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                </ul>
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
    </div>
  );
};

export default Todo;
