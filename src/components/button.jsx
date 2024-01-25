import PropTypes from 'prop-types';

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:bg-[#D9430D] hover:text-white outline outline-[#D9430D] text-black font-bold py-2 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
