import Link from 'next/link';

const NavItems =async () => {
   const res =await fetch('https://openapi.programming-hero.com/api/bazardor/categories',
    {
      cache: "force-cache",
    }
  )
   const navItems =await res.json()
  console.log(navItems);
  return (
    <div className='flex gap-3 h-[2/10]'>
      {
             navItems.map((items)=><Link href={`/products/${items.slug}`} key={items.id}>
               <p className=' flex gap-2 text-[12px]' >{items.icon} {items.nameBn}</p>
               </Link> )
           }
    </div>
  );
};

export default NavItems;