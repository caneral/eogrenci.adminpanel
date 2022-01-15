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
        <div className='bg-white rounded-md p-4 z-20 w-36 absolute shadow-all right-0 top-16 flex flex-col space-y-3' ref={menuRef}>
            <div>
                {children}
            </div>
        </div>
    ) : null;
}

export const DropdownItem = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}
export default Dropdown;


