import { Typography } from "@material-tailwind/react";
import SectionHead from "../../../Shared/SectionHead/SectionHead";
import { useTime } from "react-timer-hook";

function MyTime() {
  const { seconds, minutes, hours } = useTime({ format: "12-hour" });

  return (
    <div>
      <Typography variant="h2">
        <div className="flex gap-x-3 text-sm">
          <p>Hours</p>
          <p>Minutes</p>
          <p>Seconds</p>
        </div>
        <div>
          {hours < 10 ? `0${hours}` : hours} :
          {minutes < 10 ? `0${minutes}` : minutes} :
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </Typography>
    </div>
  );
}

const FlashSales = () => {
  return (
    <div>
      <div className="flex flex-col items-start justify-start gap-y-5">
        <SectionHead title="Today's" />
        <div>
          <div className="flex items-start lg:items-center flex-col lg:flex-row gap-x-20">
            <Typography variant="h2">Flash Sales</Typography>
            <MyTime />
          </div>
        </div>
      </div>


    </div>
  );
};

export default FlashSales;
