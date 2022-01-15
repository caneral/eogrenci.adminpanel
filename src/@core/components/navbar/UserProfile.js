import React, { useState, useEffect, useRef } from "react";
import pp from "../../../assets/profile_picture.jpg";
import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "../../../components/Dropdown";
import useComponentVisible from "../../constants/useComponentVisible";

const UserProfile = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

   

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
            <div>
              <img
                className="w-10 h-10 rounded-full"
                src={pp}
                alt="profile_picture"
              />
            </div>
          </button>
        </DropdownToggle>
        <DropdownMenu isOpen={isComponentVisible} menuRef={ref}>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Inbox</DropdownItem>
          <DropdownItem>Task</DropdownItem>
        </DropdownMenu>
      </Dropdown>
  );
};

export default UserProfile;
