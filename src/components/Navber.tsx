import Image from 'next/image';
import React from 'react';
import navIcon from '@/assets/logo-icon.png'
import Link from 'next/link';
const Navber =async () => {
  const res =await fetch('https://openapi.programming-hero.com/api/bazardor/categories',
    {
      cache: "force-cache",
    }
  )
  const navItems =await res.json()
  console.log(navItems);
  
  return (
    <div className=' container mx-auto shadow-2xl h-[90px] w-full p-3'>
      <div className=' h-[8/10] flex justify-between items-center mb-3'>
        {/* laft sive */}
        <div className=' h-full flex gap-3'>
           {/* image er jonnno */}
           <div className=' h-full bg-green-800 p-3 flex items-center justify-center rounded-[10px]'>
             <Image src={navIcon} height={32} width={32} className=' h-full w-full object-cover' alt=' bajardor'/>
           </div>
           {/* heading er jonno */}
           <div>
              <h1 className="text-base font-bold leading-5 text-gray-900">
                বাজার দর
              </h1>
              <p className="text-[9px] text-gray-500">
                সর্বশেষ আপডেট • ২০২৬
              </p>
            </div>
        </div>
        {/* right side */}
        <div className=' flex gap-3'>
          <button className=' btn capitalize'>sign in</button>
          <button className=' btn capitalize bg-green-800 text-white'>sign up</button>
        </div>
      </div>
      <div className=' flex gap-3 h-[2/10]'>
        {
          navItems.map((items)=><Link href={'/'} key={items.id}>
            <p className=' flex gap-2 text-[12px]' >{items.icon} {items.nameBn}</p>
            </Link> )
        }
      </div>
    </div>
  );
};

export default Navber;