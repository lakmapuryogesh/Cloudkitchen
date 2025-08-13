import React,{useState} from 'react'
import AppDownload from '../../Components/AppDownload/AppDownload' 
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import { food_list } from '../../assets/assets';
const Home = () => {
  const [category,setCategory] =useState("All");
  return (
    <div className='pt-16 sm:pt-20 flex flex-col items-center justify-center space-y-5 sm:space-y-8'>
      <Header></Header>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
        <FoodDisplay category={category}></FoodDisplay>
        <AppDownload />
      </div>
    </div>
  )
}

export default Home
