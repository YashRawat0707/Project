

import React from 'react';
import profile from '../../assets/profile.jpg'; // Corrected image link

const Header = () => {
  return (
    <div className='pl-4 fixed w-[calc(100vw-250px)] top-4 z-50'>
      <div className='w-full rounded h-[70px] flex justify-between items-center p-4 bg-white'>
        <input
          type='text'
          placeholder='search'
          className='px-3 py-2 rounded-md outline-0 border-gray-300 focus:border-green-500 h-10'
        />
        <div className='mr-4'>
          <div className='flex gap-x-2'>
            <div className='flex flex-col justify-center items-end'>
              <span>Khushi Sikka</span>
              <span>Admin</span>
            </div>
            <img className='w-11 h-12 rounded-full' src={profile} alt='Profile' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
