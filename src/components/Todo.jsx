import React from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const todofilter = useSelector((state) => state.todoFilters);

  // filter by status

  const FilterbyStatus = (todo) => {
    const { status } = todofilter;
    switch (status) {
      case "Complete":
        return todo.complete;
      case "Incomplete":
        return !todo.complete;
      case "Yellow":
        return todo.yellow;
      case "Green":
        return todo.green;
      case "Red":
        return todo.red;
      default:
        return true;
    }
  };


  return (
    <div>
      {todos.length > 0 ? (
        <>
     
          {todos.filter(FilterbyStatus).map((todo) => (
            <TodoList key={todo.id} todo={todo} />
          ))}
        </>
      ) : (
       <p className="text-white text-center">Not Found</p>
      )}
    </div>
  );
}

export default Todo;
