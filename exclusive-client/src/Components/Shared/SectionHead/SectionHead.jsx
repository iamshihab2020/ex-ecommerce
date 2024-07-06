import PropTypes from "prop-types";

const SectionHead = ({ title }) => {
  return (
    <div className="flex text-lg items-center justify-start gap-x-2 font-bold text-primary">
      <div className="w-4 h-10 rounded-md bg-primary"></div>
      {title}
    </div>
  );
};

SectionHead.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHead;
