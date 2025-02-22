import React from 'react'
import RestaurantCard from './RestaurantCard'
import{useState, useEffect} from 'react'
import {API_URL } from '../constants/config'
import ShimmerCard from './ShimmerCard'
import Footer from './Footer'

const Cardcontainer = () => {
const [restaurantList, setRestaurantList]=useState([])
const [searchText,setSearchText]=useState("");
const [errorMessage,setErrorMessage]=useState("")
  // [;
  //   {
  //     name:"Pizza Hut",
  //     rating:"4.2",
  //     deliveryTime:"30 min",
  //     cuisines:"Itailian, Mexican",
  //     location:"Ghatkopar"
  //   },
  //   {
  //     name:"Bharat Cafe",
  //     rating:"4.6",
  //     deliveryTime:"40 min",
  //     cuisines:"Indian, Chinese",
  //     location:"Bhandup"
  //   },
  //   {
  //     name:"Dominos",
  //     rating:"4.5",
  //     deliveryTime:"25 min",
  //     cuisines:"Itailan, American",
  //     location:"Thane"
  //   },
  //   {
  //     name:"Natural Ice Cream",
  //     rating:"5.0",
  //     deliveryTime:"20 min",
  //     cuisines:"Desserts",
  //     location:"Ghatkopar"
  //   },
  //   {
  //     name:"Belgium Waffles",
  //     rating:"4.0",
  //     deliveryTime:"40 min",
  //     cuisines:"Waffle,Desserts,Beverages",
  //     location:"Matunga"
  //   },
  //   {
  //     name:"Burger King",
  //     rating:"4.1",
  //     deliveryTime:"25-30 min",
  //     cuisines:"Burgers,American",
  //     location:"Thane"
  //   },
  //   {
  //       name:"Madras Talkies",
  //       rating:"4.8",
  //       deliveryTime:"20-30 min",
  //       cuisines:"South Indian",
  //       location:"Ghatkopar"
  //   }
  // ]

const handlesearchText=(val)=>
{
  setSearchText(val)
}


  const handleRating=()=>
  {
    const filteredData=restaurantList.filter((restuarant)=>{
    return restuarant.info.avgRating>=5.5
  }
)
setRestaurantList(filteredData)
    console.log("filteredData",restaurantList)
  }

  const handleSearch=()=>{
    const newData=restaurantList.filter((restaurant)=> (restaurant?.info?.name.includes(searchText)))
    console.log("newData",newData )
    setRestaurantList(newData)
  }


  useEffect(()=>{
    const getRestaurantData= async()=>
      {
        const response=await fetch(API_URL);
          try{  
            console.log("response",response)
            if (response.ok)
            {
              const data=await response.json()
            console.log("carousel data",data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info );
            console.log("restaurant list",data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]);
            setRestaurantList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }

          else{
            console.log("error code",response.status)
            400,401,403,404
            if(response.status===400)
              {
                throw new Error("Bad request, get in touch with support team")
              }
            if(response.status===401)
                {
                  throw new Error("Unauthorize request, kindly provide credentials")
                }
            if(response.status===403)
            {
              throw new Error("The requested content is forbidden")
            }
            if(response.status===404)
              {
                throw new Error("Server cannot find requested resource")
              }
            else{
                throw new Error("Something went wrong")
              }
          }  
          }
          catch(error){
            setErrorMessage(error.message)
            console.log("error",error.message)
          }  
        };
      getRestaurantData();
},[]);

console.log("Page rendered");
if(errorMessage)
{
  return(
    <div>
      {errorMessage}
    </div>
  ) 
}
  return (
    <>
    {/* <div>This is cardcontainer components </div> */}
    {/* <button className='bg-gray-300 p-2 rounded-md shadow-md hover:bg-gray-400'
    onClick={()=>handleRating()}>Top rated restaurants</button> */}



    <div className='w-11/12 mx-auto py-4'>
    <div className='w-full max-w-xs  relative'>
    <input className="border-[1px] p-2 border-black  rounded-md w-full "placeholder='Search for restaurants..' 
      type="text" 
      value={searchText} 
      onChange={(e)=>handlesearchText(e.target.value)} 
      />
       <button  onClick={handleSearch}  className='text-xl absolute right-0 top-1/2  -translate-y-1/2' >🔍</button>

    </div>



      {/* <input className="border-[1px] border-black  rounded-md w-full max-w-xs "placeholder='Search for restaurants..' 
      type="text" 
      value={searchText} 
      onChange={(e)=>handlesearchText(e.target.value)} 
      /> */}
    {/* <h1>{searchText}</h1> */}
     
    <div className='flex gap-4 px-4 py-4 flex-wrap '>
        {
          restaurantList.length === 0 ? (
          <ShimmerCard/>
         ) :(
          restaurantList.map((restaurant)=>
            {
                return <RestaurantCard
                  {...restaurant?.info}
                />
            })
         )}
    
    </div>
    </div>
  </>
 
  )
}

export default Cardcontainer
