'use client'
import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { Button } from './ui/button'
import { HiShoppingCart } from 'react-icons/hi'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { addToCart } from '@/app/store/features/cart';

const BestSellingCardAddToCart = ({ slug }:{ slug: string }) => {
    const dispatch = useAppDispatch();
    const product = useAppSelector((state) => state.products).find((val)=>val.slug==slug);
    const [cartItem] = useState({
            id:product?.id,
            title:product?.title,
            image: product?.image,
            slug: product?.slug,
            price: product?.price,
            discount: product?.discount,
            category: product?.category,
            qty: product?.qty,
      });
      const notify = () =>
          toast.success("Product Added Successfuly", {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
  return (
    <div>
        <div onClick={notify}>
      <Button onClick={() => dispatch(addToCart(cartItem))} className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
          <HiShoppingCart className="m-2 h-4 w-4 group-hover:text-myOrange duration-300" />
          Add to Cart
        </Button>
        </div>
        <ToastContainer
                position="top-center"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
    </div>
  )
}

export default BestSellingCardAddToCart