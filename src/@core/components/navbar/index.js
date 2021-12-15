import React from 'react'

const Navbar = () => {
    return (
        <div className='lg:w-full md:w-full sm:w-2/3 bg-white rounded-md h-16 flex items-center'>
            <div className='flex justify-between py-3 px-4 w-full'>
                <div>Notifications</div>
                <div>User Profile</div>
            </div>
        </div>
    )
}

export default Navbar
