import React from 'react';
import Marquee from 'react-fast-marquee';
import MarqueeBox from './MarqueeBox';
import Link from 'next/link';
const MarqueeDiv =async () => {
  const resAllProduct = await fetch('https://openapi.programming-hero.com/api/bazardor/products',
    {
      cache:'force-cache'
    }
  )
  const allProduct =await resAllProduct.json()
  return (
    <div>
      <Marquee className='py-2'>
        {
          allProduct.map((product)=><Link href={`/category/${product.id}`} key={product.id}><MarqueeBox product={product}/></Link> )
          }
      </Marquee>
         
      
    </div>
  );
};

export default MarqueeDiv;