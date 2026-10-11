import MarqueeBox from "@/components/MarqueeBox";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import BanerImage from '@/assets/bazar-hero.png'
import BanglaDate from "@/components/BangladeshTime";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import PriceUpProductCard from "@/components/PriceUpProductCard";
export default async function Home() {
  const resAllProduct = await fetch('https://openapi.programming-hero.com/api/bazardor/products',
    {
      cache:'force-cache'
    }
  )
  const allProduct =await resAllProduct.json()
  const priceRiseProduct = allProduct.filter((product)=>product.change.dir === 'up')
  console.log(priceRiseProduct);
  const fastSixRiseProdect = priceRiseProduct.slice(0,6)
  console.log(fastSixRiseProdect);
  const pricrFallProduct =  allProduct.filter((product)=>product.change.dir === 'down')
  const fastSixDownProdect =pricrFallProduct.slice(0,6)
  return (
    <div>
      <div className=" container mx-auto">
         <div>
            <div className=" mt-3 pb-10 flex min-h-[160px] items-center justify-between overflow-hidden rounded-2xl border border-gray-200 bg-[#f8fbf8] px-5 py-4">
              {/* Left Content */}
              <div className="max-w-[75%]">
                <span className="inline-block rounded-full bg-[#e0f4e8] px-3 py-1 text-xs font-medium text-green-700">
                  <BanglaDate/>
                </span>
            
                <h2 className="mt-2 text-xl font-bold text-[#252e27] md:text-2xl">
                  আজকের বাজারের দাম এক নজরে
                </h2>
            
                <p className="mt-3 max-w-xl text-xs leading-5 text-gray-500">
                  চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                  বিস্তারিত, দ্রুত, সঠিক-সর্বশেষ বাজারের পরিবর্তন ও তথ্য।
                </p>
            
                <Link href={'/'}>
                  <button className="mt-4 rounded-md bg-green-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-800">
                  সব দাম দেখুন
                 </button>
                </Link>
              </div>
            
              {/* Right Image */}
              <div className="hidden w-32 shrink-0 sm:block md:w-40">
                 <Image src={BanerImage} alt="সবজির ঝুড়ি" className="h-auto w-full object-contain"/>
              </div>
            </div>
         </div>
         <div className=" my-10">
          {/* ajke dam berse jay gola */}
           <h2 className=" text-2xl flex gap-1"><span><FaCaretUp className=" text-red-800" /></span>আজ দাম বেড়েছে</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-5 mx-auto">
           
             {
             fastSixRiseProdect.map((product)=><Link href={`/category/${product.id}`} key={product.id}><PriceUpProductCard product ={product}/></Link>)
             }
            </div>
         </div>
         <div className=" my-10">
          {/* ajke jay prodect er price komse */}
           <h2 className=" text-2xl flex gap-1"><span><FaCaretDown className=" text-green-800" /></span>আজ দাম কমেছে</h2>
           <div className=" grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-5 mx-auto">
           
             {
             fastSixDownProdect.map((product)=><Link href={`/category/${product.id}`} key={product.id}><PriceUpProductCard product ={product}/></Link>)
             }
            </div>
         </div>
         <div className=" my-10">
          {/* all prodect */}
           <h2 className=" text-2xl">সব পণ্য</h2>
           <div className=" grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-5 mx-auto">
           
             {
             allProduct.map((product)=><Link href={`/category/${product.id}`} key={product.id}><PriceUpProductCard product ={product}/></Link>)
             }
            </div>
         </div>
         
         
         
      </div>
    </div>
  );
}
