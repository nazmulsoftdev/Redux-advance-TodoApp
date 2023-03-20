import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoStatusAc } from "../redux/filter/action";

// todos task Incomplete logic

const IncompleteTask = (todo_Task) => {
  switch (todo_Task) {
    case 0:
      return "No task";
    case 1:
      return "1 task ";
    default:
      return `${todo_Task} task`;
  }
};

function Footer() {
  const todofilter = useSelector((state) => state.todoFilters);
  const todo = useSelector((state) => state.todos);
  const { status } = todofilter;
  const dispatch = useDispatch();



  //  filter which are not complete

  const filterNotInComplete = todo.filter((item) => !item.complete).length;

  // status change handler

  const StatusHandler = (status) => {
    dispatch(TodoStatusAc(status));
  };

  return (
    <div className="mt-10 flex justify-between items-center">
      <div>
        <p className="text-xs text-white">{IncompleteTask(filterNotInComplete)} Left</p>
      </div>
      <div className="flex justify-center items-center space-x-3">
        <p
          onClick={() => StatusHandler("All")}
          className={`cursor-pointer text-sm text-white ${
            status === "All" && "font-bold text-green-400"
          }`}
        >
          All
        </p>
        <p
          onClick={() => StatusHandler("Complete")}
          className={`cursor-pointer text-sm text-white ${
            status === "Complete" && "font-bold text-green-400"
          } `}
        >
          Complete
        </p>
        <p
          onClick={() => StatusHandler("Incomplete")}
          className={`cursor-pointer text-sm text-white ${
            status === "Incomplete" && "font-bold text-green-400"
          }`}
        >
          Incomplete
        </p>
      </div>
      |
      <div className="flex justify-center items-center space-x-2">
        <div
          onClick={() => StatusHandler("Yellow")}
          className={`YellowColorBox border-yellow-300 ${
            status === "Yellow" && "bg-yellow-300"
          }`}
        ></div>
        <div
          onClick={() => StatusHandler("Green")}
          className={`GreenColorBox border-green-500 ${
            status === "Green" && "bg-green-500"
          }`}
        ></div>
        <div
          onClick={() => StatusHandler("Red")}
          className={`RedColorBox border-red-500 ${
            status === "Red" && "bg-red-500"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Footer;
