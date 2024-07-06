import useProducts from "../../../../../Hooks/useProducts";
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
  Chip,
  // IconButton,
  // Tooltip,
} from "@material-tailwind/react";

const FlashCardLg = () => {
  const { products, isLoading} = useProducts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
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
          {products.map((product) => (
            <SwiperSlide key={product.id} className="pb-20">
              <div>
                <Card className="max-w-[24rem] h-[450px] overflow-hidden border-2">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none relative "
                  >
                    <img
                      src={product.image}
                      alt={product.product_name}
                      className="min-h-[350px] object-fill z-0"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <Chip value={`- ${product.discounted_percent}%`}  className="bg-primary font-normal text-sm"/>
                    </div>
                  </CardHeader>
                  <CardBody className="text-left">
                    <Typography variant="h4" color="blue-gray">
                      {product.product_name}
                    </Typography>
                    <div className="flex items-center justify-between">
                      <div>
                        <Typography className="font-medium">
                          Price: ${product.price}
                        </Typography>
                        {product.discounted_percent && (
                          <Typography className="font-bold">
                            Discounted Price:{" "}
                            <span className="text-[#3DBDEC]">
                              ${product.discounted_percent}%
                            </span>
                          </Typography>
                        )}
                      </div>
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

export default FlashCardLg;
