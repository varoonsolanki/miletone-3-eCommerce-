import BestSelling from '@/components/bestSelling'
import Categories from '@/components/categories'
import FeatureProduct from '@/components/featureProduct'
import Hero from '@/components/hero'
import Promotion from '@/components/promotion'
import Services from '@/components/services'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeatureProduct/>
      <Services/>
      <Promotion />
      <Categories />
      <BestSelling />
    </div>
  )
}

export default Home