import { Typography } from "@material-tailwind/react";
import { useLoaderData, useParams } from "react-router-dom";
import StarRating from "../FlashCards/StarIcon";
import FlashCardLg from "../FlashCards/FlashCardLg";

const ProductDetails = () => {
  const products = useLoaderData();
  const { id } = useParams();

  const productData = products.find((product) => product.id === parseInt(id));

  if (!productData) {
    return <div>Product not found</div>;
  }

  const {
    product_name,
    image,
    price,
    total_reviewed,
    star,
    description,
    discounted_percent,
    gender,
    category,
  } = productData;

  return (
    <div>
      <div className="flex items-center justify-around flex-col lg:flex-row">
        <div>
          <img src={image} alt={product_name} className="max-h-[600px]" />
        </div>
        <div className="flex flex-col gap-y-3 items-start ">
          <Typography variant="h2">{product_name}</Typography>
          <Typography
            variant="lead"
            className="font-medium flex items-center gap-x-3 my-1 "
          >
            <b>Price:</b>
            <span className="text-primary">
              {`$`}
              {(price - (price * discounted_percent) / 100).toFixed(2)}
            </span>
            <span className="text-gray-600 line-through">${price}</span>
          </Typography>

          <Typography variant="lead">
            <b>Description:</b> {description}
          </Typography>

          <Typography variant="lead">
            <b>Gender:</b> {gender}
          </Typography>
          <Typography variant="lead">
            <b>Category:</b> {category}
          </Typography>

          <div className="flex items-center gap-x-2">
            <StarRating stars={star} /> ({total_reviewed})
          </div>
        </div>
      </div>

      <div>
        <FlashCardLg />
      </div>
    </div>
  );
};

export default ProductDetails;
