import React, { useState } from 'react';
import { base_url } from '../../config/config';
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {

  const [loader,setLoader] = useState(false)
  const [state,setState] = useState({
    email : "",
    password : ''
  })

  const inputHandle = (e)=>{
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }


  const submit = async(e) =>{
    e.preventDefault()
    try{
      const {data} = await axios.post(`${base_url}/api/login`,state)
    }catch (error){
      console.log(error)
    }
  }


  return (
    <div className='min-w-screen min-h-screen bg-slate-200 flex justify-center items-center'>
      <div className='w-[340px] text-slate-600 shadow-md'>
        <div className='bg-white h-full px-7 py-8 rounded-md'>
          <div className='w-full justify-center items-center flex'>
            <img src='https://imgs.search.brave.com/rW4IPk4wrBdObvxCnDJMSsjMlNKaRbjiqNsL3yp0dho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vYzNkOGFl/NzQtZDhhNi00YzRi/LTkxYWUtM2JlZmZk/MTdlNzViL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0y/JnY9NjM4NTgwMTcx/NzAzMDAwMDAw' alt='img' />
          </div>
          <form onSubmit={submit} className='mt-8'>
          <div className='flex flex-col gap-y-2'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='emaik'>Email</label>
              <input onChange={inputHandle} value={state.email} required
                type="email"
                placeholder='Email'
                name='email'
                className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
                id='email'
              />
            </div>
          </div>
            <div className='flex flex-col gap-y-2'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='password'>Password</label>
              <input onChange={inputHandle} value={state.password} required
                type="password"
                placeholder='password'
                name='password'
                className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
                id='password'
              />
            </div>
            </div>
            <div className='mt-4'>
            <button className='px-3 w-full py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600'>
            Login
            </button>
            </div >
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
