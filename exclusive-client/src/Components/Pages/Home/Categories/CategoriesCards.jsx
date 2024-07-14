import useCategory from "../../../../Hooks/useCategory";
import { MutatingDots } from "react-loader-spinner";
import "swiper/css";
import "swiper/css/pagination";
import "./CSS/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card, Typography } from "@material-tailwind/react";
import { CameraIcon, ComputerDesktopIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { BiHeadphone, BiJoystick } from "react-icons/bi";
import { BsSmartwatch } from "react-icons/bs";


const CategoriesCards = () => {
  const { category, isLoading } = useCategory();

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#DB4444"
          secondaryColor="#E07575"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  return (
    <div>
      <div className="pb-20">
        <div className="-mt-14">
          <Swiper
            slidesPerView={6}
            spaceBetween={2}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              "@2.00": {
                slidesPerView: 5,
                spaceBetween: 20,
              },

            }}
            modules={[Pagination]}
            className="mySwiper p-20"
          >
            {category.map((category) => (
              <SwiperSlide key={category.id} className="pb-20">
                <Card className=" min-h-44 min-w-44 hover:bg-primary border-black border-2 hover:border-primary text-black hover:text-white duration-300 cursor-pointer overflow-hidden relative flex items-center justify-center text-2xl">
                  {category.name === "Camera" && (
                    <CameraIcon className="h-12 mb-2" />
                  )}
                  {category.name === "Phones" && (
                    <PhoneIcon className="h-12 mb-2" />
                  )}
                  {category.name === "SmartWatch" && (
                    <BsSmartwatch className="text-5xl mb-2" />
                  )}
                  {category.name === "Headphones" && (
                    <BiHeadphone className="text-5xl  mb-2" />
                  )}
                  {category.name === "Computers" && (
                    <ComputerDesktopIcon className="h-12 mb-2" />
                  )}
                  {category.name === "Gaming" && (
                    <BiJoystick className="text-5xl mb-2" />
                  )}
                  <Typography variant="lead" className="mt-3">
                    {category.name}
                  </Typography>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default CategoriesCards;
