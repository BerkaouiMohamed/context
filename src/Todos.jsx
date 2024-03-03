import React, { useContext, useRef } from "react";
import { ADDTODO, DELETETODO, EDITTODO, todosContext } from "./ContextTodos";

function Todos() {
  const { todos, dispatch } = useContext(todosContext);
  const ref = useRef();
  console.log(todos);
  return (
    <div>
      <div>
        <input type="text" ref={ref} />
        <button onClick={() => dispatch(ADDTODO(ref.current.value))}>
          addtodo
        </button>
      </div>

      <div>
        {todos.map((todo) => {
          return (
            <>
              <h2> {todo.title} </h2>
              <button onClick={() => dispatch(DELETETODO(todo))}>delete</button>
              <button onClick={() => dispatch(EDITTODO(todo))}>edit</button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
