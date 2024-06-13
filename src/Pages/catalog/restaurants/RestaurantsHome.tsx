import React from "react";
import Navbar from "../../Navbar";
import { Link, NavLink } from "react-router-dom";

const RestaurantsHome = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-full ">
        <div className="h-full  pb-20 object-cover w-full ">
          <img
            src="/images/bg.jpg"
            alt=""
            className="object-cover absolute w-full h-full"
          />
          <div className="max-w-screen-xl px-3 lg:px-14  mx-auto lg:gap-8 xl:gap-12 ">
            <div className="flex flex-col gap-2  h-full text-white">
              <h4 className="text-amber-400 md:pt-[130px] pt-[100px] z-10 text-[30px] md:text-[45px] font-[600]">
                Restaurants{" "}
              </h4>
              {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

              <div className="grid lg:grid-cols-4 grid-cols-3 gap-2 z-10">
                <Link to="/catalog/food-vendor/yakoyo">
                  <img
                    src="/images/WhatsApp Image 2024-06-10 at 21.05.52_76689a82.jpg"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px]rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Bole plus, Barbecue restaurant
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  <img
                    src="/images/WhatsApp Image 2024-06-10 at 21.07.01_2a4827e6.jpg"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px]rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Rosticks restaurant(pizza)
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  <img
                    src="/images/WhatsApp Image 2024-06-10 at 21.08.46_feb83317.jpg"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px]rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Matthans shawarma
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  <img
                    src="/images/WhatsApp Image 2024-06-10 at 21.10.05_a7d9dee5.jpg"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px]rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Domino’s pizza
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  <img
                    src="/images/WhatsApp Image 2024-06-10 at 21.11.15_0155c34d.jpg"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px]rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Food dynasty, (Chinese restaurant)
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  <img
                    src="/images/WhatsApp Image 2024-06-10 at 21.12.34_9ab1f0b1.jpg"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px]rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Blossom delight fast food
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  <img
                    src="/images/WhatsApp Image 2024-06-10 at 21.14.25_5c57d450.jpg"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px]rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    01MANDARIN CHINESE TAKEAWAY
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  {/* <img
                    src="/images/foodVendor/yakoyo.jpg"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px]rounded-md"
                  /> */}
                  <h4 className="text-[12px] text-center uppercase">
                    SKI RESTAURANT
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  <img
                    src="/images/WhatsApp Image 2024-06-10 at 21.14.47_acae1410.jpg"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px]rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    China Wok Restaurant
                  </h4>
                </Link>
              </div>
              <NavLink to="/" className=" text-[22px] flex justify-end z-10">
                <img src="/images/logod2.png" alt="location" className="" />
              </NavLink>
            </div>
          </div>
          <div className="overlay absolute inset-0 bg-black opacity-70"></div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsHome;
