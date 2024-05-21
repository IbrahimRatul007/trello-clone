import React from "react";
import { UserPlus, MoreHorizontal, Edit2 } from "react-feather";

const Main = () => {
  return (
    <div className="w-screen overflow-x-scroll overflow-y-hidden flex flex-col">
      <div className="flex justify-between h-20 items-center bg-slate-800">
        <h2 className="text-white">My Trello Board</h2>
        <div className="h-full w-40 flex justify-around items-center">
          <div className="flex justify-between h-12 w-20 bg-white rounded-md">
            <button className="">
              <UserPlus></UserPlus>
              Share
            </button>
          </div>
          <button className="flex items-center">
            <MoreHorizontal></MoreHorizontal>
          </button>
        </div>
      </div>

      <div className=" w-80 h-30 bg-black rounded-lg my-5 mx-5">
        <div className="w-full h-10  flex flex-row items-center justify-between">
          <h2>To-do</h2>
          <button>
            <MoreHorizontal></MoreHorizontal>
          </button>
        </div>
        <div className=" bg-slate-500 hover:bg-slate-600 text-white items-center rounded-md">
          <button className=" w-full flex flex-row justify-between h-10">
            <span>Project Description</span>
            <Edit2></Edit2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
