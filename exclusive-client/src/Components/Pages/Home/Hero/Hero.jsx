import Banner from "../Banner/Banner";
import { Sidebar } from "./Sidebar";

const Hero = () => {
  return (
    <div className="mt-0.5 flex lg:mr-80 lg:pr-2 z-100">
      <Sidebar />

      <div className="max-w-full lg:pl-10 lg:pt-10 z-0">
        <Banner />
      </div>
    </div>
  );
};

export default Hero;
