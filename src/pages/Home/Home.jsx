import React,{useState} from 'react'

import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import { food_list } from '../../assets/assets';
const Home = () => {
  const [category,setCategory] =useState("All");
  return (
    <div className='pt-10 flex flex-col items-center justify-center space-y-5 '>
      <Header></Header>
      <div  className="max-w-7xl mx-auto px-4 md:px-8">
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      </div>
    </div>
  )
}

export default Home
