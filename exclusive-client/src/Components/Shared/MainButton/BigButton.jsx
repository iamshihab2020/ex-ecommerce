import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";

const BigButton = ({ title }) => {
  return (
    <div>
      <Button variant="lg" className=" bg-primaryHover hover:bg-primary text-base  ">
        {title}
      </Button>
    </div>
  );
};

BigButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BigButton;
