import React from "react";
import { CgMenu } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../../features/sidebarSlice";
import UserProfile from "./UserProfile";

const Navbar = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector( state => state.sidebar.isOpen )
  return (
    <div className="bg-white rounded-md h-16 flex items-center shadow-all">
      <div className="flex justify-between py-3 px-4 w-full">
        <div className="flex space-x-3 items-center">
          <button className="lg:hidden" onClick={() => dispatch(setOpen(!isOpen))}>
            <CgMenu size={20} />
          </button>
          <div></div>
        </div>
        <UserProfile />
      </div>
    </div>
  );
};

export default Navbar;
