"use client"

import { authClient } from '@/lib/auth-client';
import { Form } from '@heroui/react';
import React from 'react';

const UpgratProfilePage = () => {
  const handleUpgradUser=async(e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    await authClient.updateUser({
    name:data.name as string,
})
   
  }
  return (
    <div>
      <Form className=' flex flex-col gap-3' onClick={handleUpgradUser}>
                     <p>নাম </p>
                     <input type="text" name='name' placeholder='you@example.com' className=' w-full p-2 outline-0 border border-gray-200 rounded-2xl capitalize'/>
                     <input type="submit" value="আপডেট" className=' bg-green-800 text-white p-2 rounded-2xl' />
      </Form>
    </div>
  );
};

export default UpgratProfilePage;