

import React from 'react';
import { Link } from 'react-router-dom';

const Addwriter = () => {
  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Add Writers</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/writers'>
          Writers
        </Link>
      </div>
      <div className='p-4'>
        <form>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='name'>Name</label>
              <input
                type="text"
                placeholder='Name'
                name='name'
                className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
                id='name'
              />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='category'>Category</label>
              <select
                name="category"
                id='category'
                className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
              >
                <option value="">--- Select Category ---</option>
                <option value="Technology">Technology</option>
                <option value="Economy">Economy</option>
                <option value="Politics">Politics</option>
                <option value="Culture">Culture</option>
                <option value="Healthcare">Healthcare</option>
              </select>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='emaik'>Email</label>
              <input
                type="email"
                placeholder='Email'
                name='email'
                className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
                id='email'
              />
            </div>
            <div className='flex flex-col gap-y-2'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='password'>Password</label>
              <input
                type="password"
                placeholder='password'
                name='password'
                className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
                id='password'
              />
            </div>
            </div>
          </div>
         <div className='mt-4'>
         <button className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600'>
         Add Writer
        </button>
         </div >
        </form>
      </div>
    </div>
  );
}

export default Addwriter;
