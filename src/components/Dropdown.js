import React from 'react'

const Dropdown = ({children}) => {
    return (
        <div className='relative '>
            {children}
        </div>
    )
}

export const DropdownToggle = ({children, toggle, refToggle}) => {
    return(
        <div onClick={(e) => {
            toggle();
        }}
        ref={refToggle}
        >
            {children}
        </div>
    )
}

export const DropdownMenu = ({children, isOpen, menuRef}) => {
    return isOpen ? (
        <div className='bg-white rounded-md py-2  z-20 w-36 absolute shadow-all right-0 top-14 flex flex-col space-y-3' ref={menuRef}>
            <div>
                {children}
            </div>
        </div>
    ) : null;
}

export const DropdownItem = ({icon, title}) => {
    return(
        <button className='px-4 py-2 hover:bg-gray-hover hover:text-purple-base w-full'>
            <div className="flex space-x-2 items-center">
            {icon}
            <p>{title}</p>
            </div>
        </button>
    )
}
export default Dropdown;


