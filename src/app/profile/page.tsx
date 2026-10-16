
import Profile from '@/components/Profile';
import UpgratProfilePage from '@/components/UpgratProfilePage';
import { Form } from '@heroui/react';
import { signOut } from 'better-auth/api';
import Image from 'next/image';
import React from 'react';

const page =async () => {
  return (
    <div className=' flex flex-col gap-4 justify-center items-center min-h-[500px] container'>
       <div className=' w-sm lg:w-2xl mb-4'>
        <h1 className=' text-2xl font-bold'>আমার প্রোফাইল</h1>
        <p className=' text-gray-400 text-[14px] mt-1.5'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
       </div>
       <div className=' w-2xl rounded-2xl bg-gray-100 p-4'>
           <Profile/>
       </div>
       <div className=' bg-gray-100 w-2xl p-5 rounded-2xl'>
          <p className=' font-bold'>তথ্য</p>
          <div className=' p-10'>
             <UpgratProfilePage/>
          </div>
       </div>
    </div>
  );
};

export default page;