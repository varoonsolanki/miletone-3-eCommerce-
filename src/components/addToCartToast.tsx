"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "./ui/button";
import { addToCart } from "@/app/store/features/cart";
import { useAppDispatch } from "@/app/store/hooks";
import { HiShoppingCart } from "react-icons/hi";

// Define the type for cartItem
type CartItemType = {
  id: number;
  title: string;
  image: string[];
  slug: string;
  price: number;
  discount: number;
  category: string;
  qty: number;
};

type AddToCartToastProps = {
  cartItem: CartItemType;
};

const AddToCartToast = ({ cartItem }:AddToCartToastProps) => {
  const dispatch = useAppDispatch();

  const notify = () =>
    toast.success("Product Added Successfully", {
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
    <>
      <div className="w-full" onClick={() => dispatch(addToCart(cartItem))}>
        <Button
          onClick={notify}
          className="group bg-black hover:bg-transparent text-white hover:text-black scroll-m-20 text-xs font-semibold tracking-tight rounded-xl duration-300"
        >
          <HiShoppingCart className="m-2 h-4 w-4 group-hover:text-orange-500 duration-300" />
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
    </>
  );
};

export default AddToCartToast;