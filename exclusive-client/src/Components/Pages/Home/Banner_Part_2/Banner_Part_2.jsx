import { Typography } from "@material-tailwind/react"


const Banner_Part_2 = () => {
  return (
    <div className="bg-black w-full p-14 ">
      <div className="w-1/2">
        <Typography variant="h5" className="text-greenBg">
          Categories
        </Typography>

        <Typography className="text-white text-4xl md:text-5xl lg:text-7xl font-black">
          Enhance Your Music Experience
        </Typography>

        
      </div>

      <div className="w-1/2"></div>
    </div>
  );
}

export default Banner_Part_2