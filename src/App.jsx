import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[500px] p-3 bg-[#222f3e] shadow-2xl rounded-md">
        <Header />
        <Todo />
        <div className="h-[2px] bg-slate-600 mt-10 mb-5"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
