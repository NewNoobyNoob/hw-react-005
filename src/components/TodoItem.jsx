import React from 'react'

const TodoItem = ({toDo, description, action}) => {
    console.log('todo', toDo);

  return (
    <div className="todo-item">
        <p> ToDo: {toDo} </p>
        <p> DESCRIPTION: {description} </p>

        <button onClick={() => action(toDo)}>Remove</button>
   </div>
  )
}

export default React.memo(TodoItem);