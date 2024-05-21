import React from "react";

const Header = () => {
  return (
    <div className="w-100 h-12 flex flex-row justify-between bg-grey  border-b bordered-box  border-b-slate-600">
      <div className="left justify-center items-center flex">
        <h1 className="text-slate-50">Trello Clone</h1>
      </div>
      <div className="right flex items-center space-x-4">
        <span>Remote Dev</span>
        <img
          className="rounded-full"
          src="https://placehold.co/28x28/png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
