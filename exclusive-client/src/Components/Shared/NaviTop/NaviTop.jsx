import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const NaviTop = () => {

  return (
    <div className="max-w-full px-5 text-center py-2 bg-black flex justify-center items-center ">
      <div>
        <Typography variant="paragraph" className="text-white text-sm lg:text-base">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <b className="ml-2 font-black underline">
            <Link to={"/"}>Shop Now</Link>
          </b>
        </Typography>
      </div>
    </div>
  );
};

export default NaviTop;
