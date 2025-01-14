'use client'
import { useAppSelector } from "@/app/store/hooks";
import BestSellingCard from "./bestSellingCard";
import { Product } from "@/app/utils/types";

const BestSelling = () => {
  const product = useAppSelector((state) => state.products);
  const bestSell =product.slice(0,3)
  // const bestSell = [
  //   {
  //     src: "/pictures/duxpencil1.jpg",
  //     alt: "Dux pencil",
  //     title: "Dux Pencil 999 Super",
  //     discription:
  //       "Introducing the Dux Pencil 999 the perfect blend of quality and durability.",
  //     price: 270,
  //     category: "stationary",
  //     products: "dux pencil",
  //   },
  //   {
  //     src: "/pictures/royalcopy.jpg",
  //     alt: "Royal Metso",
  //     title: "Royal Metso Note Book Copy 300#",
  //     discription: "150 Pages Double Side Countable.",
  //     price: 70,
  //     category: "stationary",
  //     products: "royalcopy",
  //   },
  //   {
  //     src: "/pictures/duxshorpner.jpg",
  //     alt: "Dux Shorpner",
  //     title: "Dux Pencil Sharpeners Jar Of 50 Pcs, Art # 502",
  //     discription: "Plastic manual sharpeners with metal blade.",
  //     price: 660,
  //     category: "stationary",
  //     products: "shorpner",
  //   },
  // ];
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* Best Selling Products Here */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items:Product, i) => (
          <BestSellingCard
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            discription={items.discription}
            price={items.price}
            category={items.category}
            slug={items.slug}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;