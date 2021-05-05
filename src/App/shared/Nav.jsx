import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineSetting } from "react-icons/ai";

export const NavJsx = () => {
  return (
    <header className="w-3/12 flex flex-col p-8">
      <div className="nav-item active">
        <div className="flex">
          <AiOutlineUser className="text-2xl text-white" />
          <p className="nav-text">Profile</p>
        </div>
        <div className="nav-tag">1</div>
      </div>
      <div className="nav-item">
        <div className="flex">
          <BsChat className="text-2xl text-white" />
          <p className="nav-text">Messages</p>
        </div>
      </div>
      <div className="nav-item">
        <div className="flex">
          <IoNewspaperOutline className="text-2xl text-white" />
          <p className="nav-text">News</p>
        </div>
      </div>
      <div className="nav-item">
        <div className="flex">
          <AiOutlineSetting className="text-2xl text-white" />
          <p className="nav-text">Settings</p>
        </div>
      </div>
    </header>
  );
};
