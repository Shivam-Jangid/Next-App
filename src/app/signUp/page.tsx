'use client';
import Link from 'next/link';
import React from 'react';
// import { useRouter } from 'next/navigation';

export default function SignUpPage() {
    const [user,setUser] = React.useState({
        email:"",username:"",password:""
    });
    const onSignUp = async ()=>{

    }
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex items-center flex-col'>
      <h1 className='text-5xl font-mono mb-16 text-emerald-500 font-bold'>Sign Up</h1>
      <div>
      <span className='block text-xl text-emerald-50 font-mono font-bold mb-2'>Username</span>
      <input className='p-2 rounded-md bg-inherit w-96 text-fuchsia-400 font-semibold border-2 border-teal-100/70 focus:border-teal-100 focus:outline-none' type="text" placeholder='Walter' value={user.username}
      onChange={(e)=>{
        // console.log(user.username);
        setUser({...user,username:e.target.value})
    }}
      />
      </div>
      <div>
      <span className='block mt-8 text-xl text-emerald-50 font-mono font-bold mb-2'>Email</span>
      <input className='p-2 rounded-md bg-inherit w-96 text-fuchsia-400 font-semibold border-2 border-teal-100/70 focus:border-teal-100 focus:outline-none' type="email" placeholder='methamphetamine@gmail.com' value={user.email}
      onChange={(e)=>{
        // console.log(user.email);
        setUser({...user,email:e.target.value})
    }}
      />
      </div>
      <div>
        <span className='block mt-8 text-xl text-emerald-50 font-mono font-bold mb-2'>Password</span>
        <input className='p-2 block rounded-md bg-inherit w-96 text-fuchsia-400 font-semibold border-2 border-teal-100/70 focus:border-teal-100 focus:outline-none' type="password" placeholder='***********' value={user.password}
        onChange={(e)=>{
        // console.log(user.password);
        setUser({...user,password:e.target.value})
        }}
        />
        </div>
      <button className='mb-4 transition-all flex mt-6 items-center justify-center
        bg-fuchsia-600
       text-slate-900 text-2xl h-14 w-full font-mona font-bold rounded-lg hover:text-fuchsia-100 hover:outline hover:scale-95 hover:outline-3 hover:outline-fuchsia-600 hover:bg-transparent'
       onClick={onSignUp}
       >Sign Up</button>
      <span className='inline-flex text-lg text-center font-normal'>Already Signed Up? Go to <Link className='ml-2 underline font-semibold hover:text-emerald-400' href={'/login'}>Login Page</Link></span>
      </div>
    </div>
  )
}
