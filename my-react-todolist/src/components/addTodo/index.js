import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo }) => { 
  let input;

  return (
  <form onSubmit={(event) => {
    event.preventDefault();
    submitTodo(input.value);
    input.value='';
  }}>
  <div>
    <input className = 'todo_input'           
          ref={(element) => {
            input = element;
          }}
    />
    <button type="submit" className = 'todo_submit' > submit </button>
  </div>
  </form>
)
};

AddTodo.prototypes = {
  submitTodo: PropTypes.func.isRequired 
}

export default AddTodo;
