import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import exportedObject from "../../../navigation/vertical";
import { BsPersonFill } from "react-icons/bs";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const NavItem = (props) => {
    const { title, path, icon } = props;
    const navItemClassName =
      path === pathname
        ? "pl-10 pr-4 py-2 w-full inline-block rounded font-sans text-md text-white bg-purple-base outline outline-4 outline-offset-2 outline-purple-base/70 "
        : "pl-10 pr-4 py-2 w-full inline-block rounded font-sans text-md text-black-base";
    const navItemIconClassName =
      path === pathname
        ? "absolute flex items-center inset-y-0 left-0 pl-3 text-white"
        : "absolute flex items-center inset-y-0 left-0 pl-3";
    return (
      <li className="relative text-black-base mb-2 ">
        <div className={navItemIconClassName}>{icon}</div>
        <Link to={path} className={navItemClassName}>
          {title}
        </Link>
      </li>
    );
  };

  return (
      <div className="w-64 h-screen bg-white fixed top-0 left-0 bottom-0 z-10 ">
        <div className="px-4 pt-4">
          <div className="relative text-black-base mb-2 ">
            <div
              className={
                "absolute flex items-center inset-y-0 left-0 pl-3 text-purple-base"
              }
            >
              <BsPersonFill size={20} />
            </div>
            <Link
              to={"/"}
              className={
                "pl-10 pr-4 py-2 w-full inline-block rounded font-sans text-xl font-bold text-purple-base"
              }
            >
              E-Ogrenci
            </Link>
          </div>
          <ul>
            {exportedObject.map((item, index) => {
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
        </div>
      </div>
  );
};

export default Sidebar;
