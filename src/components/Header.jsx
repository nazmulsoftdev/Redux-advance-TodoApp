import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";

import SubHeader from "./SubHeader";
import { useDispatch } from "react-redux";
import { AddtodoAC } from "../redux/todo/action";

function Header() {
  const [userText, setUserText] = useState("");
  const dispatch = useDispatch();

  // todo form submit handler

  const TodoFormHandler = (e) => {
    e.preventDefault();
    dispatch(AddtodoAC(userText));
    setUserText("");
  };

  return (
    <div>
      <form onSubmit={TodoFormHandler}>
        <div className="grid grid-cols-3 gap-3">
          <TextInput
            type="text"
            className="col-span-2"
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            required
          />
          <Button type="submit" size="sm">
            Add
          </Button>
        </div>
      </form>
      <SubHeader />
      <div className="h-[2px] bg-white mb-5"></div>
    </div>
  );
}

export default Header;
