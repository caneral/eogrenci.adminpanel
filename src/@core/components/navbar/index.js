import React from "react";
import { CgMenu } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../../features/sidebarSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector( state => state.sidebar.isOpen )
  return (
    <div className="bg-white rounded-md h-16 flex items-center">
      <div className="flex justify-between py-3 px-4 w-full">
        <div className="flex space-x-3 items-center">
          <button className="lg:hidden" onClick={() => dispatch(setOpen(!isOpen))}>
            <CgMenu size={20} />
          </button>
          <div>Notifications</div>
        </div>
        <div>User Profile</div>
      </div>
    </div>
  );
};

export default Navbar;
