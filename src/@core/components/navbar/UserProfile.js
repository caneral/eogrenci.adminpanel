import React, { useState, useEffect, useRef } from "react";
import pp from "../../../assets/profile_picture.jpg";
import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "../../../components/Dropdown";
import useComponentVisible from "../../constants/useComponentVisible";
import { FiUser } from "react-icons/fi"
import { AiOutlinePoweroff } from "react-icons/ai"


const UserProfile = () => {

    const { ref,refToggle , isComponentVisible, toggle } = useComponentVisible(false);

  return (
      <Dropdown >
        <DropdownToggle toggle={() => toggle()} refToggle={refToggle}>
          <button className="flex items-center space-x-3">
            <div>
              <p className="text-sm font-medium text-black-base font-sans leading-3">
                caneral
              </p>
              <p className="text-xs float-right font-sans font-normal text-black-base">
                admin
              </p>
            </div>
            <div className="relative">
              <img
                className="w-10 h-10 rounded-full"
                src={pp}
                alt="profile_picture"
              />
              <span className="bg-green-500 w-3 h-3 absolute rounded-lg  bottom-0 right-0 border-white border-2"/>

            </div>
          </button>
        </DropdownToggle>
        <DropdownMenu isOpen={isComponentVisible} menuRef={ref}>
        <DropdownItem icon={<FiUser/>} title="Profil" />
        <DropdownItem icon={<AiOutlinePoweroff/>} title="Çıkış Yap" />
              
            
          
        </DropdownMenu>
      </Dropdown>
  );
};

export default UserProfile;
