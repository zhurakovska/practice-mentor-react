import React from 'react';
import { useReducer } from 'react';
import { TestTwo } from './TestTwo';

export const Test = () => {
  const initialState = {
    todos: [
      { name: 'Nata', id: 3 },
      { name: 'Boris', id: 1 },
    ],
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload),
        };
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos } = state;
  const handleDelete = id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };
  const handleAdd = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: { name: 'Hrisha', id: crypto.randomUUID() },
    });
  };
  return (
    <div>
      <TestTwo />
      <input />
      <button onClick={handleAdd}>Click me</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
