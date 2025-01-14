
import React from 'react'
import { Button } from './ui/button'
import { GiShoppingBag } from "react-icons/gi";

const Hero = () => {
  return (
    <div className='mb-[100px]'>
      <div
  className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat">
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl">Trusted <span className='text-myOrange
      '>Mobile Store</span> for Quality Smartphones and Latest Gadgets</h1>
      <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight">
      Discover the latest smartphones, accessories, and gadgets at <span className='text-blue-800 text-2xl'>New Thar Mobile Shop </span> quality products with unbeatable prices and excellent service!
      </p>
      <Button className='outline outline-offset-2 outline-1 text-myWhite group hover:rounded-3xl duration-300 hover:outline-myOrange'>
      <GiShoppingBag className='group-hover:text-myOrange group-hover:animate-bounce'/> Shop Now
    </Button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
