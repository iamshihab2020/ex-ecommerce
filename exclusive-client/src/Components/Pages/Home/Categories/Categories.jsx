import { Typography } from "@material-tailwind/react";
import SectionHead from "../../../Shared/SectionHead/SectionHead";
import CategoriesCards from "./CategoriesCards";

const Categories = () => {
  return (
    <div className="border-b-2 border-gray-500">
      <div className="flex flex-col items-start justify-start gap-y-5 py-20">
        <SectionHead title="Categories" />
        <div>
          <div className="flex items-start lg:items-center flex-col lg:flex-row gap-x-20">
            <Typography variant="h2">Browse By Category</Typography>
          </div>
        </div>
      </div>
      <div>
        <CategoriesCards />
      </div>
    </div>
  );
}

export default Categories
