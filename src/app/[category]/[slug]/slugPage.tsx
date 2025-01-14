"use client";
import React, { useState } from "react";
import SlugComponent from "@/components/slugComponent";
import { Button } from "@/components/ui/button";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import { useAppSelector } from "../../store/hooks";
import AddToCartToast from "@/components/addToCartToast";

const SlugPage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug: slugParam } = React.use(params); // Unwrap params
  const product = useAppSelector((state) => state.products);
  const slug = product.filter((val) => val.slug === slugParam);
  
  const [cartItem, setCartItem] = useState({
        id:slug[0].id,
        title:slug[0].title,
        image: slug[0].image,
        slug: slug[0].slug,
        price: slug[0].price,
        discount: slug[0].discount,
        category: slug[0].category,
        qty: slug[0].qty,
  });
  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <SlugComponent image={slug[0]?.image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="scroll-m-20 text-sm font-semibold text-myBlackPara tracking-tight uppercase">
              {slug[0]?.category || "Unknown Category"}
            </h2>
            <h1 className="mt-2 scroll-m-20 text-2xl font-bold tracking-tight mb-1 text-myBlackHead">
              {slug[0]?.title || "Unknown Product"}
            </h1>
            <div className="rating rating-sm mt-2">
              {/* Ratings Component */}
            </div>
            <p className="mt-2 leading-relaxed scroll-m-20 text-base font-normal text-myBlackPara">
              {slug[0]?.discription || "No description available"}
            </p>
            <div className="flex items-center mt-3">
              <h2 className="scroll-m-20 text-base font-semibold text-myBlackHead tracking-tight mr-3">
                Quantity
              </h2>
              <Button onClick={()=> setCartItem({...cartItem, qty:cartItem.qty<=1?1:--cartItem.qty})} className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl duration-300">
                <FaMinus className="m-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Less
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                {cartItem.qty}
              </div>
              <Button onClick={()=> setCartItem({...cartItem, qty:++cartItem.qty})} className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl duration-300">
                <FaPlus className="m-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add
              </Button>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className={`title-font font-medium text-xl text-gray-900 ${cartItem.discount>0 && "line-through decoration-2 decoration-myOrange/70"}`}>
                  Rs.{cartItem.price * cartItem.qty}
                </span>
                {/* Discounted Value */}
                {cartItem.price>0 && (
                    <span className="ml-5 title-font font-medium text-xl text-gray-900">
                    Rs.{(cartItem.price - (cartItem.price*cartItem.discount) / 100) * cartItem.qty}
                    </span>
                  )}
              </div>
              <div>
                <AddToCartToast cartItem = {cartItem}/>
              </div>
            </div>
            <Button className="mt-3 w-full group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl duration-300">
              <FaHeart className="m-2 h-4 w-4 group-hover:text-myOrange duration-300" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlugPage