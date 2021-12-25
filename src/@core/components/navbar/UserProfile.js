import React from 'react'
import pp from '../../../assets/profile_picture.jpg'


const UserProfile = () => {
    return (
        <button className='flex items-center space-x-3'>
            <div>
                <p className='text-sm font-medium text-black-base font-sans leading-3'>caneral</p>
                <p className='text-xs float-right font-sans font-normal text-black-base'>admin</p>
            </div>
            <div>
                <img className='w-10 h-10 rounded-full'  src={pp}  alt='profile_picture'/>
            </div>
        </button>
    )
}

export default UserProfile
