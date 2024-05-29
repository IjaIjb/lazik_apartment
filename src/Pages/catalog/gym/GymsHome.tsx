import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from '../../Navbar'

const GymsHome = () => {
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
   Gym
           </h4>
              {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

              <div className="grid lg:grid-cols-4 grid-cols-3 gap-2 z-10">
                <Link to="/catalog/food-vendor/yakoyo">
                  {/* <img
                    src="/images/foodVendor/yakoyo.jpg"
                    alt="location"
                    className="w-full h-[200px] rounded-md"
                  /> */}
                  <h4 className="text-[12px] text-center uppercase">
                  Genesis Fitness 50 , Ajah
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  <img
                    src="/images/gyms/i-fit.jpg"
                    alt="location"
                    className="w-full h-[200px] rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                  i-Fitness Gym, Ajah
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  {/* <img
                    src="/images/foodVendor/yakoyo.jpg"
                    alt="location"
                    className="w-full h-[200px] rounded-md"
                  /> */}
                  <h4 className="text-[12px] text-center uppercase">
                  I AM FIT Gym, Abraham Adesanya
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  {/* <img
                    src="/images/foodVendor/yakoyo.jpg"
                    alt="location"
                    className="w-full h-[200px] rounded-md"
                  /> */}
                  <h4 className="text-[12px] text-center uppercase">
                  i-Fitness Gym, Badore
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  {/* <img
                    src="/images/foodVendor/yakoyo.jpg"
                    alt="location"
                    className="w-full h-[200px] rounded-md"
                  /> */}
                  <h4 className="text-[12px] text-center uppercase">
                  Amplified Gym
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  {/* <img
                    src="/images/foodVendor/yakoyo.jpg"
                    alt="location"
                    className="w-full h-[200px] rounded-md"
                  /> */}
                  <h4 className="text-[12px] text-center uppercase">
                  i-Fitness Gym, VGC branch
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  {/* <img
                    src="/images/foodVendor/yakoyo.jpg"
                    alt="location"
                    className="w-full h-[200px] rounded-md"
                  /> */}
                  <h4 className="text-[12px] text-center uppercase">
                  Pure fitness Africa, Ikota
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/yakoyo">
                  {/* <img
                    src="/images/foodVendor/yakoyo.jpg"
                    alt="location"
                    className="w-full h-[200px] rounded-md"
                  /> */}
                  <h4 className="text-[12px] text-center uppercase">
                  Fitness
                  </h4>
                </Link>
    
         
              </div>
              <NavLink
                to="/"
                className="-mt-16 text-[22px] flex justify-end z-10"
              >
                Lazik Apartment
              </NavLink>
            </div>
          </div>
          <div className="overlay absolute inset-0 bg-black opacity-70"></div>
        </div>
      </div>
    </div>
  )
}

export default GymsHome
