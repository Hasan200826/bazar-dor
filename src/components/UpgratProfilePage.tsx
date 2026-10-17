"use client"

import { Datas } from '@/app/contextApi/DataProvider';
import { authClient, useSession } from '@/lib/auth-client';
import { Form } from '@heroui/react';
import { refresh } from 'next/cache';
import React, { useContext } from 'react';

const UpgratProfilePage =() =>{
  const{data:session}=useSession()
  const handleUpgradUser=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    if(data.name !==''){
      await authClient.updateUser({
      name:data.name as string,
      })
    }
    
  }
  console.log(session?.user.name);
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