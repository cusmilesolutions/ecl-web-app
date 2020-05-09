import React, { setState } from 'react';

let state = {
  todos: [],
  todoToShow: 'all',
  toggleAllComplete: true,
};

let addTodo = (todo) => {
  this.setState((state) => ({
    todos: [todo, ...state.todos],
  }));
};

let toggleComplete = (id) => {
  setState((state) => ({
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        // suppose to update
        return {
          ...todo,
          complete: !todo.complete,
        };
      } else {
        return todo;
      }
    }),
  }));
};

let updateTodoToShow = (s) => {
  setState({
    todoToShow: s,
  });
};

let handleDeleteTodo = (id) => {
  setState((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  }));
};

let removeAllTodosThatAreComplete = () => {
  setState((state) => ({
    todos: state.todos.filter((todo) => !todo.complete),
  }));
};

let todos = [];

if (state.todoToShow === 'all') {
  todos = state.todos;
} else if (state.todoToShow === 'active') {
  todos = state.todos.filter((todo) => !todo.complete);
} else if (state.todoToShow === 'complete') {
  todos = state.todos.filter((todo) => todo.complete);
}

const Todo = () => {
  return (
    <div>
      <div onSubmit={addTodo} />
      {todos.map((todo) => (
        <div
          key={todo.id}
          toggleComplete={() => toggleComplete(todo.id)}
          onDelete={() => handleDeleteTodo(todo.id)}
          todo={todo}
        />
      ))}
      <div>
        todos left: {state.todos.filter((todo) => !todo.complete).length}
      </div>
      <div>
        <button onClick={() => updateTodoToShow('all')}>all</button>
        <button onClick={() => updateTodoToShow('active')}>active</button>
        <button onClick={() => updateTodoToShow('complete')}>complete</button>
      </div>
      {state.todos.some((todo) => todo.complete) ? (
        <div>
          <button onClick={removeAllTodosThatAreComplete}>
            remove all complete todos
          </button>
        </div>
      ) : null}
      <div>
        <button
          onClick={() =>
            this.setState((state) => ({
              todos: state.todos.map((todo) => ({
                ...todo,
                complete: state.toggleAllComplete,
              })),
              toggleAllComplete: !state.toggleAllComplete,
            }))
          }
        >
          toggle all complete: {`${state.toggleAllComplete}`}
        </button>
      </div>
    </div>
  );
};

export default Todo;

/*
<div className ="col-lg-6 mb-4">
<div className="card shadow mb-4">
  <div className="card-header py-3">
      <h6 className="text-primary font-weight-bold m-0">Todo List</h6>
  </div>
  <ul className="list-group list-group-flush">
      <li className="list-group-item">
          <div className="row align-items-center no-gutters">
              <div className="col mr-2">
                  <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">10:30 AM</span></div>
              <div className="col-auto">
                  <div className="custom-control custom-checkbox"><input className="custom-control-input" type="checkbox" id="formCheck-1"><label className="custom-control-label" for="formCheck-1"></label></div>
              </div>
          </div>
      </li>
  </ul>
</div>
</div>*/
