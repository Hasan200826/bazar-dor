"use client"

import { Datas } from '@/app/contextApi/DataProvider';
import { authClient, useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const NavRightSide = () => {
  const {data:session}= useSession()
  const [profileView ,setProfileView]=useState(false)
  const handleProfileView =()=>{
    if(profileView===false){
       setProfileView(true)
    }else{
       setProfileView(false)
    }
    }
   const leftSideItems = <>
     <Link href={`/sign-in`}><button className=' btn capitalize'>sign in</button></Link>
     <Link href={`/sign-up`}><button className=' btn capitalize bg-green-800 text-white'>sign up</button></Link>
  </>
  const isSession =<>
  <div className='flex justify-center items-center gap-2 cursor-pointer' onClick={handleProfileView}>
      <div className=" avatar">
        
<div className="relative w-12 h-12 rounded-full overflow-hidden">
  {session?.user.image ? (
    <Image
      src={session.user.image}
      fill
      sizes="48px"
      alt={session.user.name ?? "User profile"}
      className="object-cover"
    />
  ) : (
    <div className="h-full w-full bg-green-800 flex items-center justify-center">
      <h1 className="text-white font-bold">
        {session?.user.name?.[0]?.toUpperCase() ?? "U"}
      </h1>
    </div>
  )}
</div>

   </div> 
   <h2 className=' font-semibold'>{session?.user.name.toLocaleUpperCase()}</h2>
   {/* <button className="btn bg-green-800 text-white" onClick={()=>signOut()}>sign out</button> */}
  </div>
  </>
  const handleSignOut=async()=>{
    await authClient.signOut();
    setProfileView(false);
    window.location.href='/'

  }
  return (
    <div className=' container mx-auto' >
      <div className=' flex gap-3'>
        {
          session?.user?  isSession : leftSideItems 
        }
        
      </div>
      
        <div className={` border-1 ${profileView === true ? 'absolute' : 'hidden' }  top-[70px] right-0.5 bg-white z-50 mr-3 rounded-2xl  p-5 mr-5`}>
        <h2 className=' text-[20px] text-gray-300 font-semibold capitalize'>{session?.user.name}</h2>
        <p className=' text-[15px] mb-2.5 text-gray-300'>{session?.user.email}</p>
        <Link href={'/profile'}><p className=' mb-1.5'onClick={()=>setProfileView(false)}>👤 আমার প্রোফাইল</p></Link>  
        <p  className=' cursor-pointer text-red-400' onClick={handleSignOut}>↩ সাইন আউট</p>
      </div>
      
    </div>
  );
};

export default NavRightSide;