// // import React from 'react'
// // import { Link } from 'react-router-dom';
// // import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';


// // const Writers= ()=> {
// //   return (
// //     <div className='mt-2'>
// //     <div className='grid grid-cols-5 gap-x-4'>
// //     <div className='w-full p-8 flex justify-center flex-col rounded-md
// //     items-center gap-y-2 bg-white text-slate-700'>
// //     <span className='text-x1 font-bold' >50</span>
// //     <span className='text-md' > Total News</span>
// //     </div>
// //     <div className='w-full p-8 flex justify-center flex-col rounded-md
// //     items-center gap-y-2 bg-white text-slate-700'>
// //     <span className='text-x1 font-bold' >50</span>
// //     <span className='text-md' >Pending News</span>
// //     </div>
// //     <div className='w-full p-8 flex justify-center flex-col rounded-md
// //     items-center gap-y-2 bg-white text-slate-700'>
// //     <span className='text-xl font-bold' >50</span>
// //     <span className='text-md'>Active News</span>
// //     </div>
// //     <div className='w-full p-8 flex justify-center flex-col rounded-md
// //     items-center gap-y-2 bg-white text-slate-700'>
// //     <span className='text-x1 font-bold' >50</span>
// //     <span className='text-md' >Deactive News</span>
// //     </div>
// //     <div className='w-full p-8 flex justify-center flex-col rounded-md
// //     items-center gap-y-2 bg-white text-slate-700'>
// //     <span className='text-xl font-bold' >50</span>
// //     <span className='text-md'>Writers</span>
// //     </div> 
// //     </div>
// //         <div className='relative overflow-x-auto p-4'>
// //           <table className='w-full text-sm text-left text-slate-600'>
// //             <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
// //               <tr>
// //                 <th className='px-7 py-3'>No</th>
// //                 <th className='px-7 py-3'>Image</th>
// //                 <th className='px-7 py-3'>Title</th>
// //                 <th className='px-7 py-3'>Date</th>
// //                 <th className='px-7 py-3'>Category</th>
// //                 <th className='px-7 py-3'>Description</th>
// //                 <th className='px-7 py-3'>Status</th>
// //                 <th className='px-7 py-3'>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr>
// //                 <td className='px-6 py-4'>1</td>
// //                 <td className='px-6 py-4'>INDIA</td>
// //                 <td className='px-6 py-4'>Tech Innovations in India</td>
// //                 <td className='px-6 py-4'>2024-09-01</td>
// //                 <td className='px-6 py-4'>Technology</td>
// //                 <td className='px-6 py-4'>An overview of recent tech innovations emerging from India.</td>
// //                 <td className='px-6 py-4'>Active</td>
// //                 <td className='px-6 py-4'>
// //                   <div className="flex space-x-2">
// //                     <Link to='/view' className='text-blue-600 hover:text-blue-800'>
// //                       <FaEye />
// //                     </Link>
// //                     <Link to='/edit' className='text-green-600 hover:text-green-800'>
// //                       <FaEdit />
// //                     </Link>
// //                     <button className='text-red-600 hover:text-red-800'>
// //                       <FaTrash />
// //                     </button>
// //                   </div>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td className='px-6 py-4'>2</td>
// //                 <td className='px-6 py-4'>USA</td>
// //                 <td className='px-6 py-4'>Economic Growth Trends in the USA</td>
// //                 <td className='px-6 py-4'>2024-09-02</td>
// //                 <td className='px-6 py-4'>Economy</td>
// //                 <td className='px-6 py-4'>A deep dive into the recent economic growth trends observed in the USA.</td>
// //                 <td className='px-6 py-4'>Inactive</td>
// //                 <td className='px-6 py-4'>
// //                   <div className="flex space-x-2">
// //                     <Link to='/view' className='text-blue-600 hover:text-blue-800'>
// //                       <FaEye />
// //                     </Link>
// //                     <Link to='/edit' className='text-green-600 hover:text-green-800'>
// //                       <FaEdit />
// //                     </Link>
// //                     <button className='text-red-600 hover:text-red-800'>
// //                       <FaTrash />
// //                     </button>
// //                   </div>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td className='px-6 py-4'>3</td>
// //                 <td className='px-6 py-4'>UK</td>
// //                 <td className='px-6 py-4'>UK Government Policy Changes</td>
// //                 <td className='px-6 py-4'>2024-09-03</td>
// //                 <td className='px-6 py-4'>Politics</td>
// //                 <td className='px-6 py-4'>Recent changes in government policies and their impact on the UK economy.</td>
// //                 <td className='px-6 py-4'>Active</td>
// //                 <td className='px-6 py-4'>
// //                   <div className="flex space-x-2">
// //                     <Link to='/view' className='text-blue-600 hover:text-blue-800'>
// //                       <FaEye />
// //                     </Link>
// //                     <Link to='/edit' className='text-green-600 hover:text-green-800'>
// //                       <FaEdit />
// //                     </Link>
// //                     <button className='text-red-600 hover:text-red-800'>
// //                       <FaTrash />
// //                     </button>
// //                   </div>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td className='px-6 py-4'>4</td>
// //                 <td className='px-6 py-4'>GERMANY</td>
// //                 <td className='px-6 py-4'>Renewable Energy Initiatives in Germany</td>
// //                 <td className='px-6 py-4'>2024-09-04</td>
// //                 <td className='px-6 py-4'>Environment</td>
// //                 <td className='px-6 py-4'>Germany's latest initiatives and advancements in renewable energy sources.</td>
// //                 <td className='px-6 py-4'>Inactive</td>
// //                 <td className='px-6 py-4'>
// //                   <div className="flex space-x-2">
// //                     <Link to='/view' className='text-blue-600 hover:text-blue-800'>
// //                       <FaEye />
// //                     </Link>
// //                     <Link to='/edit' className='text-green-600 hover:text-green-800'>
// //                       <FaEdit />
// //                     </Link>
// //                     <button className='text-red-600 hover:text-red-800'>
// //                       <FaTrash />
// //                     </button>
// //                   </div>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td className='px-6 py-4'>5</td>
// //                 <td className='px-6 py-4'>FRANCE</td>
// //                 <td className='px-6 py-4'>Cultural Festivals in France</td>
// //                 <td className='px-6 py-4'>2024-09-05</td>
// //                 <td className='px-6 py-4'>Culture</td>
// //                 <td className='px-6 py-4'>Exploring the vibrant cultural festivals happening across France this year.</td>
// //                 <td className='px-6 py-4'>Active</td>
// //                 <td className='px-6 py-4'>
// //                   <div className="flex space-x-2">
// //                     <Link to='/view' className='text-blue-600 hover:text-blue-800'>
// //                       <FaEye />
// //                     </Link>
// //                     <Link to='/edit' className='text-green-600 hover:text-green-800'>
// //                       <FaEdit />
// //                     </Link>
// //                     <button className='text-red-600 hover:text-red-800'>
// //                       <FaTrash />
// //                     </button>
// //                   </div>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td className='px-6 py-4'>6</td>
// //                 <td className='px-6 py-4'>JAPAN</td>
// //                 <td className='px-6 py-4'>Technological Advancements in Japan</td>
// //                 <td className='px-6 py-4'>2024-09-06</td>
// //                 <td className='px-6 py-4'>Technology</td>
// //                 <td className='px-6 py-4'>An insight into the latest technological advancements and innovations in Japan.</td>
// //                 <td className='px-6 py-4'>Active</td>
// //                 <td className='px-6 py-4'>
// //                   <div className="flex space-x-2">
// //                     <Link to='/view' className='text-blue-600 hover:text-blue-800'>
// //                       <FaEye />
// //                     </Link>
// //                     <Link to='/edit' className='text-green-600 hover:text-green-800'>
// //                       <FaEdit />
// //                     </Link>
// //                     <button className='text-red-600 hover:text-red-800'>
// //                       <FaTrash />
// //                     </button>
// //                   </div>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td className='px-6 py-4'>7</td>
// //                 <td className='px-6 py-4'>CANADA</td>
// //                 <td className='px-6 py-4'>Healthcare Improvements in Canada</td>
// //                 <td className='px-6 py-4'>2024-09-07</td>
// //                 <td className='px-6 py-4'>Healthcare</td>
// //                 <td className='px-6 py-4'>Recent improvements and updates in Canada's healthcare system.</td>
// //                 <td className='px-6 py-4'>Inactive</td>
// //                 <td className='px-6 py-4'>
// //                   <div className="flex space-x-2">
// //                     <Link to='/view' className='text-blue-600 hover:text-blue-800'>
// //                       <FaEye />
// //                     </Link>
// //                     <Link to='/edit' className='text-green-600 hover:text-green-800'>
// //                       <FaEdit />
// //                     </Link>
// //                     <button className='text-red-600 hover:text-red-800'>
// //                       <FaTrash />
// //                     </button>
// //                   </div>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td className='px-6 py-4'>8</td>
// //                 <td className='px-6 py-4'>AUSTRALIA</td>
// //                 <td className='px-6 py-4'>Wildlife Conservation Efforts</td>
// //                 <td className='px-6 py-4'>2024-09-08</td>
// //                 <td className='px-6 py-4'>Environment</td>
// //                 <td className='px-6 py-4'>The latest efforts in wildlife conservation across Australia.</td>
// //                 <td className='px-6 py-4'>Active</td>
// //                 <td className='px-6 py-4'>
// //                   <div className="flex space-x-2">
// //                     <Link to='/view' className='text-blue-600 hover:text-blue-800'>
// //                       <FaEye />
// //                     </Link>
// //                     <Link to='/edit' className='text-green-600 hover:text-green-800'>
// //                       <FaEdit />
// //                     </Link>
// //                     <button className='text-red-600 hover:text-red-800'>
// //                       <FaTrash />
// //                     </button>
// //                   </div>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td className='px-6 py-4'>9</td>
// //                 <td className='px-6 py-4'>SOUTH KOREA</td>
// //                 <td className='px-6 py-4'>Cultural Heritage Sites</td>
// //                 <td className='px-6 py-4'>2024-09-09</td>
// //                 <td className='px-6 py-4'>Culture</td>
// //                 <td className='px-6 py-4'>Exploring the most significant cultural heritage sites in South Korea.</td>
// //                 <td className='px-6 py-4'>Inactive</td>
// //                 <td className='px-6 py-4'>
// //                   <div className="flex space-x-2">
// //                     <Link to='/view' className='text-blue-600 hover:text-blue-800'>
// //                       <FaEye />
// //                     </Link>
// //                     <Link to='/edit' className='text-green-600 hover:text-green-800'>
// //                       <FaEdit />
// //                     </Link>
// //                     <button className='text-red-600 hover:text-red-800'>
// //                       <FaTrash />
// //                     </button>
// //                   </div>
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td className='px-6 py-4'>10</td>
// //                 <td className='px-6 py-4'>BRAZIL</td>
// //                 <td className='px-6 py-4'>Economic Developments in Brazil</td>
// //                 <td className='px-6 py-4'>2024-09-10</td>
// //                 <td className='px-6 py-4'>Economy</td>
// //                 <td className='px-6 py-4'>A review of the latest economic developments and trends in Brazil.</td>
// //                 <td className='px-6 py-4'>Active</td>
// //                 <td className='px-6 py-4'>
// //                   <div className="flex space-x-2">
// //                     <Link to='/view' className='text-blue-600 hover:text-blue-800'>
// //                       <FaEye />
// //                     </Link>
// //                     <Link to='/edit' className='text-green-600 hover:text-green-800'>
// //                       <FaEdit />
// //                     </Link>
// //                     <button className='text-red-600 hover:text-red-800'>
// //                       <FaTrash />
// //                     </button>
// //                   </div>
// //                 </td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>
// //         </div>
// //   )
// // }

// // export default Writers





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

// const Writers = () => {
//   return (
//     <div className='mt-2'>
//       <div className='grid grid-cols-5 gap-x-4'>
//         <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
//           <span className='text-xl font-bold'>50</span>
//           <span className='text-md'>Total Writers</span>
//         </div>
//       </div>
//       <div className='relative overflow-x-auto p-4'>
//         <table className='w-full text-sm text-left text-slate-600'>
//           <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
//             <tr>
//               <th className='px-7 py-3'>No</th>
//               <th className='px-7 py-3'>Image</th>
//               <th className='px-7 py-3'>Name</th>
//               <th className='px-7 py-3'>Bio</th>
//               <th className='px-7 py-3'>Status</th>
//               <th className='px-7 py-3'>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className='px-6 py-4'>1</td>
//               <td className='px-6 py-4'>
//                 <img src='/path/to/image1.jpg' alt='Writer 1' className='w-10 h-10 rounded-full' />
//               </td>
//               <td className='px-6 py-4'>John Doe</td>
//               <td className='px-6 py-4'>Author of several tech articles.</td>
//               <td className='px-6 py-4'>Active</td>
//               <td className='px-6 py-4'>
//                 <div className="flex space-x-2">
//                   <Link to='/view' className='text-blue-600 hover:text-blue-800'>
//                     <FaEye />
//                   </Link>
//                   <Link to='/edit' className='text-green-600 hover:text-green-800'>
//                     <FaEdit />
//                   </Link>
//                   <button className='text-red-600 hover:text-red-800'>
//                     <FaTrash />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//             {/* Repeat for other writers */}
//             <tr>
//               <td className='px-6 py-4'>2</td>
//               <td className='px-6 py-4'>
//                 <img src='/path/to/image2.jpg' alt='Writer 2' className='w-10 h-10 rounded-full' />
//               </td>
//               <td className='px-6 py-4'>Jane Smith</td>
//               <td className='px-6 py-4'>Expert on cultural trends.</td>
//               <td className='px-6 py-4'>Inactive</td>
//               <td className='px-6 py-4'>
//                 <div className="flex space-x-2">
//                   <Link to='/view' className='text-blue-600 hover:text-blue-800'>
//                     <FaEye />
//                   </Link>
//                   <Link to='/edit' className='text-green-600 hover:text-green-800'>
//                     <FaEdit />
//                   </Link>
//                   <button className='text-red-600 hover:text-red-800'>
//                     <FaTrash />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//             {/* Add more rows as needed */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Writers;






import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const Writers = () => {
  return (
    <div className='mt-2'>
      <div className='grid grid-cols-5 gap-x-4'>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>10</span>
          <span className='text-md'>Total Writers</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>3</span>
          <span className='text-md'>Active Writers</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>5</span>
          <span className='text-md'>Pending Writers</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>3</span>
          <span className='text-md'>Inactive Writers</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>2</span>
          <span className='text-md'>New Writers</span>
        </div>
      </div>
      <div className='relative overflow-x-auto p-4'>
        <table className='w-full text-sm text-left text-slate-600'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-7 py-3'>No</th>
              <th className='px-7 py-3'>Name</th>
              <th className='px-7 py-3'>Email</th>
              <th className='px-7 py-3'>Join Date</th>
              <th className='px-7 py-3'>Status</th>
              <th className='px-7 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-6 py-4'>1</td>
              <td className='px-6 py-4'>John Doe</td>
              <td className='px-6 py-4'>john.doe@example.com</td>
              <td className='px-6 py-4'>2024-01-15</td>
              <td className='px-6 py-4'>Active</td>
              <td className='px-6 py-4'>
                <div className="flex space-x-2">
                  <Link to='/view-writer' className='text-blue-600 hover:text-blue-800'>
                    <FaEye />
                  </Link>
                  <Link to='/edit-writer' className='text-green-600 hover:text-green-800'>
                    <FaEdit />
                  </Link>
                  <button className='text-red-600 hover:text-red-800'>
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className='px-6 py-4'>2</td>
              <td className='px-6 py-4'>Jane Smith</td>
              <td className='px-6 py-4'>jane.smith@example.com</td>
              <td className='px-6 py-4'>2024-02-20</td>
              <td className='px-6 py-4'>Pending</td>
              <td className='px-6 py-4'>
                <div className="flex space-x-2">
                  <Link to='/view-writer' className='text-blue-600 hover:text-blue-800'>
                    <FaEye />
                  </Link>
                  <Link to='/edit-writer' className='text-green-600 hover:text-green-800'>
                    <FaEdit />
                  </Link>
                  <button className='text-red-600 hover:text-red-800'>
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
            <td className='px-6 py-4'>3</td>
              <td className='px-6 py-4'>Jane Smith</td>
              <td className='px-6 py-4'>jane.smith@example.com</td>
              <td className='px-6 py-4'>2024-02-20</td>
              <td className='px-6 py-4'>Pending</td>
              <td className='px-6 py-4'>
                <div className="flex space-x-2">
                  <Link to='/view-writer' className='text-blue-600 hover:text-blue-800'>
                    <FaEye />
                  </Link>
                  <Link to='/edit-writer' className='text-green-600 hover:text-green-800'>
                    <FaEdit />
                  </Link>
                  <button className='text-red-600 hover:text-red-800'>
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
            <td className='px-6 py-4'>4</td>
              <td className='px-6 py-4'>Jane Smith</td>
              <td className='px-6 py-4'>jane.smith@example.com</td>
              <td className='px-6 py-4'>2024-02-20</td>
              <td className='px-6 py-4'>Pending</td>
              <td className='px-6 py-4'>
                <div className="flex space-x-2">
                  <Link to='/view-writer' className='text-blue-600 hover:text-blue-800'>
                    <FaEye />
                  </Link>
                  <Link to='/edit-writer' className='text-green-600 hover:text-green-800'>
                    <FaEdit />
                  </Link>
                  <button className='text-red-600 hover:text-red-800'>
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
            <td className='px-6 py-4'>5</td>
              <td className='px-6 py-4'>Jane Smith</td>
              <td className='px-6 py-4'>jane.smith@example.com</td>
              <td className='px-6 py-4'>2024-02-20</td>
              <td className='px-6 py-4'>Pending</td>
              <td className='px-6 py-4'>
                <div className="flex space-x-2">
                  <Link to='/view-writer' className='text-blue-600 hover:text-blue-800'>
                    <FaEye />
                  </Link>
                  <Link to='/edit-writer' className='text-green-600 hover:text-green-800'>
                    <FaEdit />
                  </Link>
                  <button className='text-red-600 hover:text-red-800'>
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
            <td className='px-6 py-4'>6</td>
              <td className='px-6 py-4'>Jane Smith</td>
              <td className='px-6 py-4'>jane.smith@example.com</td>
              <td className='px-6 py-4'>2024-02-20</td>
              <td className='px-6 py-4'>New</td>
              <td className='px-6 py-4'>
                <div className="flex space-x-2">
                  <Link to='/view-writer' className='text-blue-600 hover:text-blue-800'>
                    <FaEye />
                  </Link>
                  <Link to='/edit-writer' className='text-green-600 hover:text-green-800'>
                    <FaEdit />
                  </Link>
                  <button className='text-red-600 hover:text-red-800'>
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
            <td className='px-6 py-4'>7</td>
              <td className='px-6 py-4'>Jane Smith</td>
              <td className='px-6 py-4'>jane.smith@example.com</td>
              <td className='px-6 py-4'>2024-02-20</td>
              <td className='px-6 py-4'>Pending</td>
              <td className='px-6 py-4'>
                <div className="flex space-x-2">
                  <Link to='/view-writer' className='text-blue-600 hover:text-blue-800'>
                    <FaEye />
                  </Link>
                  <Link to='/edit-writer' className='text-green-600 hover:text-green-800'>
                    <FaEdit />
                  </Link>
                  <button className='text-red-600 hover:text-red-800'>
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
            <td className='px-6 py-4'>8</td>
              <td className='px-6 py-4'>Jane Smith</td>
              <td className='px-6 py-4'>jane.smith@example.com</td>
              <td className='px-6 py-4'>2024-02-20</td>
              <td className='px-6 py-4'>New</td>
              <td className='px-6 py-4'>
                <div className="flex space-x-2">
                  <Link to='/view-writer' className='text-blue-600 hover:text-blue-800'>
                    <FaEye />
                  </Link>
                  <Link to='/edit-writer' className='text-green-600 hover:text-green-800'>
                    <FaEdit />
                  </Link>
                  <button className='text-red-600 hover:text-red-800'>
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
            <td className='px-6 py-4'>9</td>
              <td className='px-6 py-4'>Jane Smith</td>
              <td className='px-6 py-4'>jane.smith@example.com</td>
              <td className='px-6 py-4'>2024-02-20</td>
              <td className='px-6 py-4'>Active</td>
              <td className='px-6 py-4'>
                <div className="flex space-x-2">
                  <Link to='/view-writer' className='text-blue-600 hover:text-blue-800'>
                    <FaEye />
                  </Link>
                  <Link to='/edit-writer' className='text-green-600 hover:text-green-800'>
                    <FaEdit />
                  </Link>
                  <button className='text-red-600 hover:text-red-800'>
                    <FaTrash />
                  </button>
                </div>
              </td>
              </tr>
              <tr>
              <td className='px-6 py-4'>10</td>
              <td className='px-6 py-4'>Jane Smith</td>
              <td className='px-6 py-4'>jane.smith@example.com</td>
              <td className='px-6 py-4'>2024-02-20</td>
              <td className='px-6 py-4'>Active</td>
              <td className='px-6 py-4'>
                <div className="flex space-x-2">
                  <Link to='/view-writer' className='text-blue-600 hover:text-blue-800'>
                    <FaEye />
                  </Link>
                  <Link to='/edit-writer' className='text-green-600 hover:text-green-800'>
                    <FaEdit />
                  </Link>
                  <button className='text-red-600 hover:text-red-800'>
                    <FaTrash />
                  </button>
                </div>
              </td>
              </tr>
            {/* Add more writer rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Writers;
