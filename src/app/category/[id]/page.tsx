import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
export const instant = false;

const prices = [
  { market: "ঢাকা", type: "খুচরা", price: "৪৫ টাকা", previous: "৪২ টাকা" },
  { market: "চট্টগ্রাম", type: "খুচরা", price: "৪৮ টাকা", previous: "৪৫ টাকা" },
  { market: "রাজশাহী", type: "খুচরা", price: "৪৩ টাকা", previous: "৪০ টাকা" },
  { market: "খুলনা", type: "খুচরা", price: "৪৬ টাকা", previous: "৪৩ টাকা" },
  { market: "সিলেট", type: "খুচরা", price: "৫০ টাকা", previous: "৪৭ টাকা" },
  { market: "বরিশাল", type: "খুচরা", price: "৪৪ টাকা", previous: "৪১ টাকা" },
  { market: "রংপুর", type: "খুচরা", price: "৪২ টাকা", previous: "৪০ টাকা" },
  { market: "ময়মনসিংহ", type: "খুচরা", price: "৪৫ টাকা", previous: "৪২ টাকা" },
  { market: "কুমিল্লা", type: "খুচরা", price: "৪৭ টাকা", previous: "৪৪ টাকা" },
  { market: "বগুড়া", type: "খুচরা", price: "৪১ টাকা", previous: "৩৯ টাকা" },
];
const productPage =async ({params}) =>{
       
  const { id } = await params;
   const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${id}`
  );

  if (!res.ok) {
    throw new Error("Product fetch failed");
  }

  const product = await res.json();
  return (
    <div className=' container mx-auto'>
     <main className="min-h-screen bg-[#f0f5f0] px-3 py-5 text-gray-800 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-xs text-gray-500">
          <span>হোম</span>
          <span>/</span>
          <span>বাজার দর</span>
          <span>/</span>
          <span className="text-green-700">পণ্যের বিস্তারিত</span>
        </div>

        {/* Product Header */}
        <section className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f1f5ef] text-3xl">
              {
                product.categoryIcon
              }
            </div>

            <div>
              <h1 className="text-lg font-bold">
                বাজারের পণ্যের দাম
              </h1>
              <p className="mt-1 text-xs text-gray-500">
                দেশি পণ্য
              </p>
              <p className="mt-1 text-xs text-gray-500">
                সর্বশেষ বাজারদর ও মূল্য পরিবর্তনের তথ্য
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-[#f2f7f1] px-5 py-3 text-center">
            <p className="text-xs text-gray-500">বর্তমান দাম</p>
            <p className="mt-1 text-xl font-bold text-gray-800">
              {product.today}
            </p>
            <p 
            className={`
              ${
                product.change.dir === 'up'  ?'text-red-500' : 'text-green-500'
              }
            mt-1 text-xs font-semibold text-red-500 flex items-center justify-center`}>
              {
               product.change.dir === 'up'  ?<FaCaretUp/> : <FaCaretDown/>
              }
              {
                product.change.pct
              }
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="mt-4 rounded-xl border border-gray-100 bg-white p-4">
          <h2 className="mb-3 text-sm font-bold">
            বাজারদরের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-3">
              <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-2 text-sm font-bold text-green-600">
                ৪১ টাকা
              </p>
              <p className="mt-1 text-xs text-gray-500">
                প্রতি কেজি
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-3">
              <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-2 text-sm font-bold text-red-500">
                ৫০ টাকা
              </p>
              <p className="mt-1 text-xs text-gray-500">
                প্রতি কেজি
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-3">
              <p className="text-xs text-gray-500">গড় দাম</p>
              <p className="mt-2 text-sm font-bold text-green-600">
                ৪৫ টাকা
              </p>
              <p className="mt-1 text-xs text-gray-500">
                প্রতি কেজি
              </p>
            </div>
          </div>
        </section>

        {/* Price Table */}
        <section className="mt-4 rounded-xl border border-gray-100 bg-white p-4">
          <h2 className="mb-3 text-sm font-bold">
            বাজারভিত্তিক দামের তালিকা
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-y border-gray-200 bg-[#f7f9f7] text-gray-600">
                  <th className="px-3 py-3 font-semibold">বাজার</th>
                  <th className="px-3 py-3 font-semibold">বিভাগ</th>
                  <th className="px-3 py-3 font-semibold">সর্বনিম্ন</th>
                  <th className="px-3 py-3 font-semibold">সর্বাধিক</th>
                  <th className="px-3 py-3 text-right font-semibold">
                    গড়
                  </th>
                </tr>
              </thead>

              <tbody>
                {product.markets.map((item, index) => (
                  <tr
                    key={item.market}
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-[#f0f5f0]"
                    }`}
                  >
                    <td className="px-3 py-3 font-medium">
                      {item.market}
                    </td>
                    <td className="px-3 py-3">{item.division}</td>
                    <td className="px-3 py-3 font-semibold ">
                      {item.min}
                    </td>
                    <td className="px-3 py-3 text-gray-600">
                      {item.max}
                    </td>
                    <td className="px-3 py-3 text-right font-semibold">
                      {(item.max+item.min)/2} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
    </div>
  );
};

export default productPage;