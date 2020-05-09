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
     <div className="row shadow">
        <div className="col-md-4 shadow">
            <div className="card-header py-3">
                <h6 className="text-primary font-weight-bold m-0">Add A New Item</h6>
            </div>
            <div className="form">
                <div className="form-group">
                <   input type="email" className="form-control" placeholder="Add Item To List" id="todoItem"/>
                </div>
                <div className="form-group">
                    <label for="taskDate">Due date:</label>
                    <input type="date" className="form-control" id="taskDate"/>
                    <label for="taskTime">Time:</label>
                    <input type="time" className="form-control" id="taskTime"/>
                </div>
                <div className="col p-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm btn-block"
                    >
                      Add
                    </button>
                  </div>
            </div>
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
        </div>
        </div>
  );
};

export default Todo;
