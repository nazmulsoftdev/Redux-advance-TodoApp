import React from "react";
import { useDispatch } from "react-redux";
import { AllCompleteTodoAc, ClearCompleteTodoAc } from "../redux/todo/action";

function SubHeader() {
  const dispatch = useDispatch();

  //  complete all todos handler

  const TaskCompleteAllHanlder = () => {
    dispatch(AllCompleteTodoAc());
  };

  // incomplete all todos

  const TaskIncompleteAllHandler = () => {
    dispatch(ClearCompleteTodoAc());
  };

  return (
    <div className="mt-3 mb-5 flex justify-between items-center">
      <p
        className="text-sm text-white cursor-pointer"
        onClick={TaskCompleteAllHanlder}
      >
        Complate All Task
      </p>
      <p
        className="text-sm text-white cursor-pointer"
        onClick={TaskIncompleteAllHandler}
      >
        Clear Complete
      </p>
    </div>
  );
}

export default SubHeader;
