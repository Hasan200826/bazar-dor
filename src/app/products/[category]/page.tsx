// "use client"
import PriceUpProductCard from "@/components/PriceUpProductCard";
import SortingPage from "@/components/SortingPage";
import Link from "next/link";
export const instant = false;

type Props = {
  params: Promise<{
    category: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { category } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${category}`)

  if (!res.ok) {
    throw new Error("পণ্যের তথ্য লোড করা যায়নি");
  }

  const products = await res.json();
  const sortProduct =[...products]
  console.log(sortProduct);
  const categoryInfo = products?.[0];
  console.log('categoryInfo',categoryInfo);
  

  return (
    <main className="min-h-screen bg-[#f0f5f1] px-4 py-5 text-gray-800 sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <header className="mb-3 flex items-center gap-3 rounded-xl border border-gray-100 bg-white/80 p-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl">
            {categoryInfo?.categoryIcon ?? "🛒"}
          </div>

          <div>
            <h1 className="text-sm font-bold">
              {categoryInfo?.categoryNameBn ?? "বাজারদর"}
            </h1>

            <p className="text-[10px] text-gray-500">
              {categoryInfo?.categoryNameBn ?? "পণ্যের"} পাইকারি বাজার দর ও পরিবর্তন
            </p>
          </div>
        </header>

          {/* Sorting */}
          <SortingPage categoryInfo={categoryInfo} products={products}/>
        </div>
    </main>
  );
};

export default Page;