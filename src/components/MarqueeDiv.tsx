
import React from 'react';
import Marquee from 'react-fast-marquee';
import MarqueeBox from './MarqueeBox';
import Link from 'next/link';
import { Product } from '@/app/types/product';

const MarqueeDiv = async () => {
  const resAllProduct = await fetch(
    'https://openapi.programming-hero.com/api/bazardor/products',
    {
      cache: 'force-cache',
    }
  );

  if (!resAllProduct.ok) {
    throw new Error('Failed to fetch products');
  }

  const allProduct: Product[] = await resAllProduct.json();

  return (
    <div>
      <Marquee className="py-2">
        {allProduct.map((product: Product) => (
          <Link href={`/category/${product.id}`} key={product.id}>
            <MarqueeBox product={product} />
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeDiv;
