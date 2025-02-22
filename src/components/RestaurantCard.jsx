import React from 'react'
import { IMG_URL } from '../constants/config'

const RestaurantCard = ({name,avgRating,sla,cuisines,locality,cloudinaryImageId}) => {
  //const{name,rating,deliveryTime,cuisines,location}=props
  return (
    <div className='w-full md:max-w-[250px] max-w[300px]'>
        <div className='w-full h-[150px]'>
            <img className='w-full h-full object-cover rounded-[15px]' src={IMG_URL+cloudinaryImageId} />
        </div>
       
        <div className='px-2'>
            <h2 className='font-semibold text-2xl'>{name}</h2>
            <div className="flex gap-2">
                <h2 className='text-[16px] font-semibold'>⭐{avgRating}</h2>
                <h2 className='text-[16px] font-semibold'>{sla?.deliveryTime} min</h2>
            </div>
        </div>
        <p className='text-gray-500 px-3'>{cuisines.join(", ")}</p>
        <p className='text-gray-500 px-3'>{locality}</p>
    </div>  
    
  )
}

export default RestaurantCard
