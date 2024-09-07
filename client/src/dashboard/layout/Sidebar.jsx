
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillDashboard, AiOutlinePlus } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { BiNews, BiRotateLeft } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';

const Sidebar = () => {
    const { pathname } = useLocation();
    console.log("Current pathname:", pathname);

    const userInfo = {
        role : "writer"
    }

    return (
        <div className='w-[250px] h-screen fixed left-0 top-0 bg-black text-white'>
            <div className='h-[70px] flex justify-center items-center'>
                <Link>
                    <img className='w-[170px] h-[50px]' src="https://cdn.dribbble.com/users/3721716/screenshots/6682569/shot-cropped-1561444231579.png" alt="" />
                </Link>
            </div>
            <ul className='px-3 flex flex-col gap-y-1 font-medium'>
                {
                    
                }
                <li>
                    <Link to='/dashboard/admin' className={`block px-3 ${pathname === '/dashboard/admin' ? 'bg-indigo-500 text-black' : 'bg-white text-black'} py-2 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white`}>
                        <span className='text-xl'><AiFillDashboard /></span>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard/news' className={`block px-3 ${pathname === '/dashboard/news' ? 'bg-indigo-500 text-black' : 'bg-white text-black'} py-2 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white`}>
                        <span className='text-xl'><BiNews /></span>
                        <span>News</span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard/writer/add' className={`block px-3 ${pathname === '/dashboard/writer/add' ? 'bg-indigo-500 text-black' : 'bg-white text-black'} py-2 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white`}>
                        <span className='text-xl'><AiOutlinePlus /></span>
                        <span>Add Writer</span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard/writers' className={`block px-3 ${pathname === '/dashboard/writers' ? 'bg-indigo-500 text-black' : 'bg-white text-black'} py-2 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white`}>
                        <span className='text-xl'><FiUsers /></span>
                        <span>Writers</span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard/profile' className={`block px-3 ${pathname === '/dashboard/profile' ? 'bg-indigo-500 text-black' : 'bg-white text-black'} py-2 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white`}>
                        <span className='text-xl'><ImProfile /></span>
                        <span>Profile</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

