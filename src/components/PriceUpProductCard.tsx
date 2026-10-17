import { Product } from '@/app/types/product';
import React from 'react';

const PriceUpProductCard = ({product}:{product:Product}) => {
  return (
    <div className=' hover:border border-green-400 rounded-[7px]'>
                      <div className="w-full  rounded-md border border-gray-200 bg-white p-3 shadow-sm">
                        {/* Product Header */}
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-2xl">
                            {product.categoryIcon}
                          </div>
                      
                          <div>
                            <h3 className="text-sm font-bold text-gray-800">{product.categoryNameBn}</h3>
                            <p className="text-[11px] text-gray-500">{product.nameBn}</p>
                          </div>
                        </div>
                      
                        {/* Price Section */}
                        <div className="mt-3 flex items-end justify-between">
                          <div>
                            <p className="text-[11px] text-gray-500">আজকের দাম</p>
                            <p className="mt-1 text-lg font-bold text-gray-900">
                              {product.today}টাকা
                            </p>
                          </div>
                      
                          <span className="mb-1 rounded-full bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-600">
                            {product.change.pct}%
                          </span>
                        </div>
                      </div>
       </div>   
  );
};

export default PriceUpProductCard;