import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Plus } from "react-feather";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className={`${
        collapsed ? "w-5" : "w-60"
      } bg-slate-900 h-screen flex justify-between`}
    >
      {collapsed && (
        <div className=" w-5">
          <div>
            <button
              className="hover:bg-slate-600 rounded-sm h-5"
              onClick={() => setCollapsed((prev) => !prev)}
            >
              <ChevronRight size={18}></ChevronRight>
            </button>
          </div>
        </div>
      )}
      {!collapsed && (
        <div className=" w-60">
          <div className="flex justify-between border-b border-b-slate-600 h-8">
            <h4>Remote dev's workspace</h4>
            <button
              className="hover:bg-slate-600 rounded-sm h-5"
              onClick={() => setCollapsed((prev) => !prev)}
            >
              <ChevronLeft size={18}></ChevronLeft>
            </button>
          </div>
          <div className="boardlist">
            <div className="flex justify-between px-3 py-2">
              <h5>Your Boards</h5>
              <button className="hover:bg-slate-600 rounded-sm h-5">
                <Plus size={16}></Plus>
              </button>
            </div>
          </div>
          <ul>
            <li>
              <button className="px-3 py-2 w-full text-sm flex justify-start hover:bg-slate-600">
                <span className="w-6 h-max rounded-sm mr-2 bg-red-600">
                  &nbsp;
                </span>
                <span>My Trello Board</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
