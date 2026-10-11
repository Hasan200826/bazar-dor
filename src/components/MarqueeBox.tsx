import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const MarqueeBox = ({product}) => {
  return (
    <div className=' mx-3 flex items-center gap-1 text-[10px]'>
       <p>{product.categoryIcon}</p>
       <p>{product.nameBn}</p>
       <p>{product.today} টাকা/কেজি</p>
       <p 
       className={`
        ${
          product.change.dir === 'up'?'text-green-800':'text-red-700'
        }
        flex items-center`}>{product.change.dir === 'up'? <FaCaretDown className=' text-2xl' />:<FaCaretUp className=' text-2xl' />}{product.change.pct}%</p>
    </div>
  );
};

export default MarqueeBox;