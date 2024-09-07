import React from 'react'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'

const NewContent=()=> {
  return (
    <div>
      <div className='px-4 py-3 flex gap-x-3'>
            <select name="" className='px-3 py-2 rounded-md outline-0 border-gray-300 focus:border-green-500 h-10 ' id="">
                  <option value="">----select type----</option>
                  <option value="pending">Pending</option>
                  <option value="active">Active</option>
                  <option value="deactive">Deactive</option>

            </select>
            <input type="text" placeholder='search' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'/>
      </div>
      <div className='relative overflow-x-auto-p-4'>
            <table className='w-full text-sm text-left text-slate-600'>
                  <thead className='text-xs text-gray-700 upercase bg-gray-50'>
                        <tr>
                              <th className='px-7 py-3'>No</th>
                              <th className='px-7 py-3'>Image</th>  
                              <th className='px-7 py-3'>Title</th>
                              <th className='px-7 py-3'>Date</th>
                              <th className='px-7 py-3'>Category</th>
                              <th className='px-7 py-3'>Description</th>
                              <th className='px-7 py-3'>Status</th>
                              <th className='px-7 py-3'>Action</th>
                        </tr>
                  </thead>

                  <tbody>
                        <tr>
                        <td className='px-6 py-4'>1</td>
            <td className='px-6 py-4'>INDIA</td>
            <td className='px-6 py-4'>Tech Innovations in India</td>
            <td className='px-6 py-4'>2024-09-01</td>
            <td className='px-6 py-4'>Technology</td>
            <td className='px-6 py-4'>An overview of recent tech innovations emerging from India.</td>
            <td className='px-6 py-4'>Active</td>
            <td className='px-6 py-4'>
              <div className="flex space-x-2">
                <Link to='/view' className='text-blue-600 hover:text-blue-800'>
                  <FaEye />
                </Link>
                <Link to='/edit' className='text-green-600 hover:text-green-800'>
                  <FaEdit />
                </Link>
                <button className='text-red-600 hover:text-red-800'>
                  <FaTrash />
                </button>
              </div>
            </td>
                        </tr> 

                  </tbody>
            </table>
      </div>
      <div className='flex items-center justify-end px-10 gap-x-3 text-slate-600'>
        <div className='flex gap-x-3 justify-center item-center'>
          <p className='px-4 py-3 font-semibold text-sm'>News per Page</p>
          <select
                name="category"
                id='category'
                className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
         
              </select>
        </div>
          <p className='px-6 py-3 font-semibold text-sm'>6/22 - of 5</p>
         <div className='flex items-center gap-x-3'>
               <IoIosArrowBack className='w-5 h-5 cursor-pointer'/>
               <IoIosArrowForward className='w-5 h-5 cursor-pointer'/>
         </div>
      </div>

    </div>
  )
}

export default NewContent