import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home/Home';
import CatalogHome from './Pages/catalog/catalogHome';
import CatalogItemPage from './Pages/catalog/foodVendor/CatalogItemPage';
import EachItemCatalog from './Pages/catalog/foodVendor/yakoyo/EachItemCatalog';
import RosticksPage from './Pages/catalog/foodVendor/rosticks/RosticksPage';
import ChickenRep from './Pages/catalog/foodVendor/chickenRep/ChickenRep';
import JowiCuisine from './Pages/catalog/foodVendor/jowiCuisine/JowiCuisine';
import ChefSammie from './Pages/catalog/foodVendor/chefSammie/ChefSammie';
import AmbrosyDelight from './Pages/catalog/foodVendor/ambrosyDe/AmbrosyDelight';
import LizGrill from './Pages/catalog/foodVendor/liz/LizGrill';
import RestaurantsHome from './Pages/catalog/restaurants/RestaurantsHome';
import SupermarketHome from './Pages/catalog/supermarket/SupermarketHome';
import CinemasHome from './Pages/catalog/cinemas/CinemasHome';
import ParksHome from './Pages/catalog/parks/ParksHome';
import GymsHome from './Pages/catalog/gym/GymsHome';
import PharmacyHome from './Pages/catalog/pharmacy/PharmacyHome';
import AmenitiesHome from './Pages/amenities/AmenitiesHome';
import ContactUs from './Pages/contact/ContactUs';
import BookNow from './Pages/BookNow';

function App() {
  return (
    <div className="App">
  <Routes>
  <Route  path="/" element={<Home/>}/>
  <Route  path="/catalog" element={<CatalogHome/>}/>
  <Route  path="/catalog/food-vendor" element={<CatalogItemPage/>}/>
  <Route  path="/catalog/food-vendor/yakoyo" element={<EachItemCatalog/>}/>
  <Route  path="/catalog/food-vendor/rosticks" element={<RosticksPage/>}/>
  <Route  path="/catalog/food-vendor/chicken-republic" element={<ChickenRep/>}/>
  <Route  path="/catalog/food-vendor/jowi-cuisine" element={<JowiCuisine/>}/>
  <Route  path="/catalog/food-vendor/chef-sammie" element={<ChefSammie/>}/>
  <Route  path="/catalog/food-vendor/ambrosy-delight-parfait" element={<AmbrosyDelight/>}/>
  <Route  path="/catalog/food-vendor/liz-grills" element={<LizGrill/>}/>

  <Route  path="/catalog/restaurants" element={<RestaurantsHome/>}/>
  <Route  path="/amenities" element={<AmenitiesHome/>}/>
  <Route  path="/contact" element={<ContactUs/>}/>
  <Route  path="/book-now" element={<BookNow/>}/>
 
 
 
  <Route  path="/catalog/supermarket" element={<SupermarketHome/>}/>
  
  
  <Route  path="/catalog/cinemas" element={<CinemasHome/>}/>


  <Route  path="/catalog/parks" element={<ParksHome/>}/>


  <Route  path="/catalog/gyms" element={<GymsHome/>}/>

  <Route  path="/catalog/pharmacy" element={<PharmacyHome/>}/>
  <Route  path="/catalog/pharmacy/belfast" element={<PharmacyHome/>}/>


  
  </Routes>
    </div>
  );
}

export default App;
