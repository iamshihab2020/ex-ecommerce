import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './CSS/styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="h-[500px]">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="myswiper w-full"
      >
        <SwiperSlide>
          <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center px-20 py-10 lg:py-0  bg-black text-white">
            <div className="flex flex-col items-start justify-center gap-y-4 lg:gap-y-10">
              <div className="w-48">
                <img src="/src/assets/iphone.svg" alt="" className="h-4" />
              </div>
              <Typography variant="h1" className="text-left">
                Up to 10% <br /> off Voucher
              </Typography>
              <Link
                to={"/"}
                className="underline underline-offset-8 text-lg flex items-center justify-start gap-x-1 hover:text-primary duration-150"
              >
                Shop Now{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            <div>
              <img src="/src/assets/iphone12.svg" alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center px-20 py-10 lg:py-0  bg-black text-white">
            <div className="flex flex-col items-start justify-center gap-y-2 lg:gap-y-10">
              <div className="w-48">
                <img src="/src/assets/iphone.svg" alt="" className="h-4" />
              </div>
              <Typography variant="h1" className="text-left">
                Up to 10% <br /> off Voucher
              </Typography>
              <Link
                to={"/"}
                className="underline underline-offset-8 text-lg flex items-center justify-start gap-x-1 hover:text-primary duration-150"
              >
                Shop Now{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            <div>
              <img src="/src/assets/iphone12.svg" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner