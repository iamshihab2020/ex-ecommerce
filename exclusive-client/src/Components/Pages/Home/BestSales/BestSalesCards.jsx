import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./CSS/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
// import BigButton from "../../../../Shared/MainButton/BigButton";
import { MutatingDots } from "react-loader-spinner";
import useBestSales from "../../../../Hooks/useBestSales";
import StarRating from "../FlashSales/FlashCards/StarIcon";

const BestSalesCards = () => {
  const { bestSales, isLoading } = useBestSales();
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <div className="pb-20">
      <div className="-mt-14">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper p-20"
        >
          {bestSales.map((product) => (
            <SwiperSlide key={product.id} className="pb-20">
              <div
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="max-w-[24rem] h-[500px] overflow-hidden border-2 relative">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none relative"
                  >
                    <img
                      src={product.image}
                      alt={product.product_name}
                      className="min-h-[350px] object-fill z-0"
                    />

                    <div className="absolute top-4 right-4 flex flex-col gap-y-4 ">
                      <IconButton className="bg-white hover:bg-primary rounded-full text-black hover:text-white duration-150 transition-colors">
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
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      </IconButton>

                      <IconButton className="bg-white hover:bg-primary rounded-full text-black hover:text-white duration-150 transition-colors">
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
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </IconButton>
                    </div>

                    <div
                      className={`absolute w-full transition-all duration-300 ${
                        hoveredCard === product.id ? "top-72" : "top-96"
                      }`}
                    >
                      <Button
                        variant="lg"
                        className="w-full bg-black p-4 text-base rounded-none rounded-t-2xl "
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="text-left">
                    <Typography variant="h4" color="blue-gray">
                      {product.product_name}
                    </Typography>
                    <div className="flex items-center justify-between">
                      <div>
                        <Typography className="font-medium flex items-center gap-x-3 text-lg text-primary my-1 ">
                          ${product.price}
                          <span className="text-gray-600 line-through">
                            {`$`}
                            {(
                              product.price -
                              (product.price * product.discounted_percent) / 100
                            ).toFixed(2)}
                          </span>
                        </Typography>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <StarRating stars={product.star} /> (
                      {product.total_reviewed})
                    </div>
                  </CardBody>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSalesCards;
