import { Typography } from "@material-tailwind/react";
import SectionHead from "../../../Shared/SectionHead/SectionHead";
import BestSalesCards from "./BestSalesCards";


const BestSales = () => {
  return (
    <div>
      <div className="border-b-2 border-gray-500">
        <div className="flex flex-col items-start justify-start gap-y-5 py-20">
          <SectionHead title="This Month" />
          <div>
            <div className="flex items-start lg:items-center flex-col lg:flex-row gap-x-20">
              <Typography variant="h2">Best Selling Products</Typography>
            </div>
          </div>
        </div>
        <div>
          <BestSalesCards/>
        </div>
      </div>
    </div>
  );
}

export default BestSales