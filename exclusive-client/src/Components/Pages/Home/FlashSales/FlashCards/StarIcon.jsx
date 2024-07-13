/* eslint-disable react/prop-types */


const StarIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    className="h-5 w-5 text-yellow-700"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={filled ? "1" : "1.5"}
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
);

const StarRating = ({ stars }) => (
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <StarIcon key={index} filled={index < stars} />
    ))}
  </div>
);

export default StarRating;
