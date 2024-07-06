import { Button } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const MainButton = ({title}) => {
  return (
    <div>
      <Button className=" bg-primary hover:bg-primaryHover ">{title}</Button>
    </div>
  );
}


MainButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainButton