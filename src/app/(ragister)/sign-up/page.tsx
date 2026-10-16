"use client"

import { authClient, signUp } from "@/lib/auth-client";
import { Form } from "@heroui/react";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

// import {Check} from "@gravity-ui/icons";


const page = () => {
  const onSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data= Object.fromEntries(formData.entries())
    const{data:resData , error}=await authClient.signUp.email({
      name:data.name as string,
      email:data.email as string,
      password:data.password as string,
      callbackURL:'/',
    })
    if(resData){
      window.location.href='/'
      toast.success('🦄 Wow so easy!', {
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
    }
    };
   const handleSignUpGoogle = async () => {
  const data = await authClient.signIn.social({
       provider: "google",
     });
   };
   const handleGithubSignIn =async()=>{
         const data =await authClient.signIn.social({
           provider:'github',
           callbackURL:'/',
         })
       } 
   
  return (
    <div>
        <div className=' w-full h-screen flex flex-col justify-center items-center'>
            <h1 className=' text-2xl font-bold '>অ্যাকাউন্ট তৈরি করুন</h1>
            <p className=' text-gray-400 mb-3'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            <div>
               <div className=" flex flex-col items-center fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-lg border p-4  justify-center">
                   <Form onSubmit={onSubmit}>
                   
                     <label className="label">নাম</label>
                     <input type="text" name="name" className="input w-full outline-0" placeholder="তোমার নাম" />
        
                     <label className="label">ইমেইল</label>
                     <input type="email" name="email" className="input w-full outline-0" placeholder="তোমার ইমেইল" />
                   
                     <label className="label">পাসওয়ার্ড</label>
                     <input type="password" name="password" className="input w-full outline-0" placeholder="কমপক্ষে ৮ অক্ষর" />
                   
                     <button className="btn bg-green-800 text-white w-full mt-4">অ্যাকাউন্ট তৈরি করুন</button>
                   </Form>
                   <p className=" text-center">---------অথবা---------</p>
                   <div className=" flex flex-col md:flex-row gap-3">
                      <button className="btn" onClick={handleSignUpGoogle}><FaGoogle />Google দিয়ে চালিয়ে যান</button>
                      <button className="btn" onClick={handleGithubSignIn}><FaGithub/>GitHub দিয়ে চালিয়ে যান</button>
                   </div>
                  <p className=" font-semibold mt-2">অ্যাকাউন্ট আছে? <Link href={'/sign-in'} className=' text-green-800'>সাইন ইন করুন</Link></p>
              </div> 
              
            </div>
            <p className=' mt-5 text-gray-400'><Link href={'/'}>← হোম পেজে ফিরে যান</Link></p>
        </div>
    </div>
    
  );
};

export default page; 