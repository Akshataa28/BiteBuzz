import { useState } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";  // Fix import path
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {  // Fix arrow function syntax
  return (
    <div>
      <Header/>
      <Body></Body>
      <Footer/>
      {/* <header></header> */}
    </div>
  );
};

export default App;


{/* <header></header> -- //This is done
<body>
  <Carousel/>
  <Cardcontainer>
    <SearchBar/>
    <Filter/>
    <RestuarantCard/>
    <RestuarantCard/>
    <RestuarantCard/>
    <RestuarantCard/>
    <RestuarantCard/>
  </Cardcontainer>

</body>
<footer></footer> 

<Menu>
  <RestaurantInfo/>
  <MenuContainer>
    <DishInfo/>
    <DishInfo/>
    <DishInfo/>
    <DishInfo/>
    <DishInfo/>
    <DishInfo/>
    <DishInfo/>

  </MenuContainer>
</Menu> 
<Cart/>
*/}





