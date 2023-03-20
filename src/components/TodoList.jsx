import React from "react";
import { useDispatch } from "react-redux";
import {
  DeletetodoAC,
  ToggletodoAc,
  GreenColorAc,
  RedColorAc,
  YellowColorAc,
} from "../redux/todo/action";
import { TiTick as TickMark } from "react-icons/ti";
import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";
import { IoIosCheckmark as ColorMark } from "react-icons/io";

function TodoList({ todo }) {
  const { id, text, complete, yellow, red, green } = todo;
  const dispatch = useDispatch();

  // todo status change

  const StatusChangeHandler = (todoId) => {
    dispatch(ToggletodoAc(todoId));
  };

  //  todo delete

  const DeletetodoHandler = (todoId) => {
    dispatch(DeletetodoAC(todoId));
  };

  // Yellow Color Handler

  const YellowColorHandler = (todoId) => {
    dispatch(YellowColorAc(todoId));
  };

  // Green Color Handler

  const GreenColorHandler = (todoId) => {
    dispatch(GreenColorAc(todoId));
  };

  // Green Color Handler

  const RedColorHandler = (todoId) => {
    dispatch(RedColorAc(todoId));
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div
        onClick={() => StatusChangeHandler(id)}
        className={`TodoToggle ${complete ? "bg-green-500" : "bg-red-400"}`}
      >
        {complete ? <TickMark size={20} /> : ""}
      </div>
      <p
        className={`text-blue-600 font-medium text-lg ${
          complete ? "text-white" : "line-through"
        }`}
      >
        {text}
      </p>
      <div className="flex justify-center items-center space-x-2">
        <div
          onClick={() => YellowColorHandler(id)}
          className={`YellowColorBox border-yellow-300 ${
            yellow && "bg-yellow-300"
          }`}
        >
          {yellow && (
            <ColorMark size={20} color="white" className="font-bold child" />
          )}
        </div>
        <div
          onClick={() => GreenColorHandler(id)}
          className={`GreenColorBox border-green-500 ${
            green && "bg-green-500"
          }`}
        >
          {green && (
            <ColorMark size={20} color="white" className="font-bold child" />
          )}
        </div>
        <div
          onClick={() => RedColorHandler(id)}
          className={`RedColorBox border-red-500 ${red && "bg-red-500"}`}
        >
          {red && (
            <ColorMark size={20} color="white" className="font-bold child" />
          )}
        </div>
      </div>
      <DeleteIcon
        onClick={() => DeletetodoHandler(id)}
        className="cursor-pointer  text-red-600"
        size={20}
      />
    </div>
  );
}

export default TodoList;
