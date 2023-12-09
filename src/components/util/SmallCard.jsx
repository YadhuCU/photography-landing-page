import PropTypes from "prop-types";

SmallCard.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

export default function SmallCard({ children, style }) {
  return (
    <div className="small-card shadow" style={style}>
      {children}
    </div>
  );
}
