"use client"


import { useState } from 'react';
import PriceUpProductCard from './PriceUpProductCard';
import Link from 'next/link';

const SortingPage = ({categoryInfo,products}) => {
  let [sortProduct ,setSortProduct]=useState([...products])
  console.log(sortProduct);
 const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const value = e.target.value;

  if (value === "low") {
    setSortProduct( [...products].sort((a, b) => a.today - b.today));
  } else if (value === "high") {
    setSortProduct( [...products].sort((a, b) => b.today - a.today));
  }else{
     setSortProduct( [...products]);
  }
};
  return (
    <div>
      {/* Sorting */}
        <div className="mb-2 flex items-center justify-end gap-2 rounded-xl border border-gray-100 bg-white/80 px-3 py-2">
          <span className="text-[10px] text-gray-500">
            সাজান
          </span>
          <select
            id="sort"
            className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs outline-none"
            onChange={handleSelection}
          >
            <option value="defolt">defolt</option>
            <option value="low">low</option>
            <option value="high">high</option>
          </select>
           
        </div>

        {/* Section title */}
        <p className="mb-2 text-[10px] text-gray-500">
          {categoryInfo?.categoryNameBn ?? "পণ্যের"} বিভিন্ন প্রকারের দাম
        </p>

        {/* Products */}
        {sortProduct?.length > 0 ? (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sortProduct.map((product: { id: string | number }) => (
              <Link href={`/category/${product.id}`} key={product.id}>
                <PriceUpProductCard
                
                product={product}
              />
              </Link>
              
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-100 bg-white p-8 text-center text-sm text-gray-500">
            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
          </div>
        )}
      </div>
  );
};

export default SortingPage;