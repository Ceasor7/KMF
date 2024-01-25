import PropTypes from 'prop-types';

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:bg-blue-700 outline outline-[#D9430D] text-black font-bold py-2 px-4 rounded ${className}`}
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
