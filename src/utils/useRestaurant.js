import { useState,useEffect } from "react";
import { API_URL } from "../constants/config";
const useRestaurant=()=>
{
    const [restaurantList, setRestaurantList]=useState([]);
    const [masterList, setMasterList]=useState([]);
    const [errorMessage,setErrorMessage]=useState("");

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
                setMasterList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                }
    
              else{
                console.log("error code",response.status)
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
    const resObject={
        restaurantList:restaurantList,
        masterList: masterList,
        errorMessage: errorMessage
    }
    return resObject;
}
export default useRestaurant