import PropTypes from "prop-types";

const Header = ({ headerText, body }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-center space-y-3 my-24">
        <h4 className="md:text-sm text-xs font-medium">{headerText}</h4>
        <p className="text-[#929292] lg:text-3xl md:text-2xl text-sm lg:w-[780px] md:w-[600px]">
          {body}
        </p>
      </div>
    </div>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Header;
