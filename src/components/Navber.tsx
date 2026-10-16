
import Image from 'next/image';
import React from 'react';
import navIcon from '@/assets/logo-icon.png'
import Link from 'next/link';
import MarqueeDiv from './MarqueeDiv';
import NavItems from './NavItems';
import NavRightSide from './NavRightSide';


const Navber = () => {
  return (
    <div>
      <div className=' container mx-auto shadow-2xl rounded-b-2xl h-[90px] w-full p-3'>
         <div className=' h-[8/10] flex justify-between items-center mb-3'>
           {/* laft sive */}
           <Link href={'/'}>
              <div className=' h-full flex gap-3'>
              {/* image er jonnno */}
              <div className=' h-full bg-green-800 p-3 flex items-center justify-center rounded-[10px]'>
                <Image src={navIcon} height={42} width={42} className=' h-full w-full object-cover' alt=' bajardor'/>
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
           </Link>
          
           {/* right side */}
           <div>
             <NavRightSide/>
           </div>
         </div>
         <div>
           <NavItems/>
         </div>
       </div>
       <MarqueeDiv/>
    </div>

    
  );
};

export default Navber;