import React, { useEffect, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import pages from "../../../navigation/vertical";
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../../../features/sidebarSlice";
import SimpleBar from "simplebar-react";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const NavItem = (props) => {
    const { title, path, icon } = props;
    const navItemClassName = `pl-10 pr-4 py-2 w-full inline-block rounded font-sans text-md ${
      path === pathname
        ? "text-white bg-purple-base outline outline-4 outline-offset-2 outline-purple-base/70"
        : "text-black-base "
    }`;

    const navItemIconClassName = `absolute flex items-center inset-y-0 left-0 pl-3 ${
      path === pathname && "text-white"
    }`;

    return (
      <li className="relative text-black-base mb-2 ">
        <div className={navItemIconClassName}>{icon}</div>
        <Link
          to={path}
          className={navItemClassName}
          onClick={() => dispatch(setOpen(!isOpen))}
        >
          {title}
        </Link>
      </li>
    );
  };

  return (
    <div
      className={`w-64 h-screen inset-y-0 bg-white fixed z-10 transform  lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition duration-400 ease-in`}
    >
      <div className="flex text-black-base mb-4 pt-4 items-center">
        <Link
          className="flex text-black-base  items-center opa"
          to={"/"}
          onClick={() => dispatch(setOpen(!isOpen))}
        >
          <div className={" pl-3 text-purple-base"}>
            <BsPersonFill size={20} />
          </div>

          <div className="pl-3 pr-4 py-2 w-full inline-block rounded font-sans text-xl font-bold text-purple-base">
            E-Ogrenci
          </div>
        </Link>

        <button
          className={" pl-8 text-purple-base lg:hidden"}
          onClick={() => dispatch(setOpen(!isOpen))}
        >
          <IoCloseSharp size={20} />
        </button>
      </div>
      <SimpleBar className="h-screen px-4 pb-4">
        <ul>
          {pages.map((item, index) => {
            return (
              <NavItem
                key={index}
                icon={item.icon}
                path={item.path}
                title={item.title}
              />
            );
          })}
        </ul>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
