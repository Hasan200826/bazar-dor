"use client"
import { authClient, signIn, useSession } from '@/lib/auth-client';
import { Form } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';

const page = () => {
  const onSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data= Object.fromEntries(formData.entries())
    const{data:resData , error}= await signIn.email({
      email:data.email as string,
      password:data.password as string,
      callbackURL:'/',
      
    })
     toast.success(`welcome to bazardor`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    };
    const handleGoogleSignIn =async()=>{
      const {error}=await authClient.signIn.social({
        provider:"google",
        callbackURL:'/',
      });
    };
    const handleGithubSignIn =async()=>{
      const data =await authClient.signIn.social({
        provider:'github',
        callbackURL:'/',
      })
    } 
    
  return (
    <div className=' flex justify-center items-center'>
      <div className=' inline-block text-center '>
        <div className=' w-full h-screen flex flex-col justify-center items-center'>
              <h1 className=' text-2xl font-bold '>সাইন ইন</h1>
              <p className=' text-gray-400 mb-3'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
              <div>
                 <div className=" flex flex-col items-center fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-lg border p-4  justify-center">
                  <Form onSubmit={onSubmit}>
       
                   
                       <label className="label">ইমেইল</label>
                       <input type="email" name="email" className="input w-full outline-0 mb-3" placeholder="তোমার ইমেইল" />
                  
                   
                   
                      <label className="label">পাসওয়ার্ড</label>
                      <input type="password" name="password" className="input w-full mb-3 outline-0" placeholder="কমপক্ষে ৮ অক্ষর" />
                   
                    
                  
                    <button className="btn bg-green-800 text-white w-full mt-4">সাইন ইন</button>
                  </Form>
                  <p className=" text-center">---------অথবা---------</p>
                  <div className=" flex flex-col md:flex-row gap-3">
                     <button className="btn" onClick={handleGoogleSignIn}><FaGoogle />Google দিয়ে চালিয়ে যান</button>
                     <button className="btn" onClick={handleGithubSignIn}><FaGithub/>GitHub দিয়ে চালিয়ে যান</button>
                  </div>
                  <p className=' font-semibold mt-2'>অ্যাকাউন্ট নেই? <Link href={'/sign-up'} className=' text-green-800'>সাইন আপ করুন</Link> </p>
              </div> 
              <p className=' mt-5 text-gray-400'><Link href={'/'}>← হোম পেজে ফিরে যান</Link></p>
              </div>
           </div>
      </div>
          
    </div>
  );
};

export default page;