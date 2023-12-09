import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default function Button({ children, style }) {
  return (
    <button className="button" style={style}>
      {children}
    </button>
  );
}
