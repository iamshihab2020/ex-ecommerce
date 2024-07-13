import { Typography } from "@material-tailwind/react";
import SectionHead from "../../../Shared/SectionHead/SectionHead";
import { useTime } from "react-timer-hook";
import FlashCardLg from "./FlashCards/FlashCardLg";

function MyTime() {
  const { seconds, minutes, hours } = useTime({ format: "12-hour" });

  return (
    <div>
      <Typography variant="h2">
        <div className="flex gap-x-3 text-sm text-center">
          <p>Hours</p>
          <p>Minutes</p>
          <p>Seconds</p>
        </div>
        <div>
          {hours < 10 ? `0${hours}` : hours} <span className="text-primary"> : </span>
          {minutes < 10 ? `0${minutes}` : minutes} <span className="text-primary"> : </span>
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </Typography>
    </div>
  );
}

const FlashSales = () => {
  return (
    <div className="border-b-2 border-gray-500">
      <div className="flex flex-col items-start justify-start gap-y-5 py-20">
        <SectionHead title="Today's" />
        <div>
          <div className="flex items-start lg:items-center flex-col lg:flex-row gap-x-20">
            <Typography variant="h2">Flash Sales</Typography>
            <MyTime />
          </div>
        </div>
      </div>
      <div>
        <FlashCardLg/>
      </div>
    </div>
  );
};

export default FlashSales;
