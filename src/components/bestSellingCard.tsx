import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import BestSellingCardAddToCart from "./bestSellingCardAddToCart";

const BestSellingCard = ({
  src,
  alt,
  title,
  discription,
  price,
  category,
  slug,
  discount,
}: {
  src: string;
  alt: string;
  title: string;
  discription: string;
  price: number;
  category: string;
  slug: string;
  discount: number;
}) => (
  <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-lg rounded-xl relative group">
    <Link href={`/${category}/${slug}`}>
      {/* Image div */}
      <div className="block h-[23rem] rounded overflow-hidden">
        <Image src={src} width={400} height={400} alt={alt} />
      </div>
      {/* Typography div */}
      <div className="mt-4">
        {title && (
          <h2 className="scroll-m-20 border-b text-lg font-semibold tracking-tight first:mt-0 text-myBlackHead line-clamp-1">
            {title}
          </h2>
        )}
        {discription && (
          <p className="mt-2 scroll-m-20 pt-2 text-sm font-semibold tracking-tight text-myBlackPara line-clamp-1">
            {discription}
          </p>
        )}
        {price && (
          <div className="flex gap-4">
            <p className={`mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead line-clamp-1 ${discount > 0 && "line-through decoration-2 decoration-myOrange/70"}`}>
              Rs.{price} PKR
            </p>
            {/* Discounted Value */}
            {discount > 0 && (<p className="mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead line-clamp-1">
              Rs.{price - ((price * discount) / 100)} PKR
            </p>)}
          </div>
        )}
      </div>
    </Link>
    {/* Buttons div */}
    <div>
      <div className="absolute bottom-2 right-2 duration-300">
        <BestSellingCardAddToCart slug={slug}/>
      </div>
      <Button className="group bg-black hover:bg-transparent text-white hover:text-black scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2 duration-300">
        <FaHeart className="m-2 h-4 w-4 group-hover:text-myOrange duration-300" />
        Buy Now
      </Button>
      {discount > 0 && (
        <div className="scroll-m-20 text-xs font-semibold tracking-tight text-myWhite bg-orange-400 absolute top-0 left-2 w-[87px] p-2 text-center uppercase rounded-tl-xl rounded-bl-xl myDiscount">{`${discount}% off`}</div>
      )}
    </div>
  </div>
);

export default BestSellingCard;