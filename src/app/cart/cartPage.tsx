'use client'
import CartCard from '@/components/cartCard'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useAppSelector } from '../store/hooks'

const CartPage = () => {
    const cartArray = useAppSelector((state) => state.cart);
    const total = cartArray.reduce((total,arr)=>{return(total+((arr.price-(arr.price*arr.discount)/100))*arr.qty)},0 )
  return (
    <div>
      <div className='grid lg:grid-cols-3 grid-cols-1'>
        {/* Items */}
        <div className='col-span-2'>
            <CartCard/>
        </div>
        {/* summary */}
        <div className='bg-myBlackHead/10 p-5 rounded-xl'>
        {/* Heading */}
        <h2 className='scroll-m-20 text-lg font-semibold tracking-tight uppercase text-myBlackHead'>Order Summary</h2>
        {/* Divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* Pricing */}
        <div className='scroll-m-20 text-sm font-medium tracking-tight text-myBlackPara'>
            {/* product price */}
            <div className='flex items-center justify-between capitalize'>
                <h2>sub total</h2>
                <h2>Rs. {total} PKR</h2>
            </div>
            {/* delivery charges */}
            <div className='flex items-center justify-between capitalize'>
                <h2>Delivery Charges</h2>
                <h2>TBD</h2>
            </div>
            {/* Service Charges */}
            <div className='flex items-center justify-between capitalize'>
                <h2>Sales Tax</h2>
                <h2>TBD</h2>
            </div>
        </div>
        {/* Divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* Estimated Total */}
        <div className='flex items-center justify-between uppercase font-semibold text-sm tracking-tight text-myBlackHead'>
                <h2>estimated total</h2>
                <h2>Rs. {total} PKR</h2>
            </div>
            {/* Divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* Checkout Button */}
        <div className='flex items-center justify-center w-full'>
        <Button className='bg-myBlackHead hover:bg-transparent duration-300 text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md rounded uppercase'>Proceed to Checkout</Button>
        </div>
        {/* Divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* note */}
        <p className='text-xs font-semibold tracking-tight text-myBlackHead w-[97%] text-center italic'>{`* Delovery Charges and the Sales Tax will be calculated in the Checkout Page`}</p>
        </div>
      </div>
    </div>
  )
}

export default CartPage