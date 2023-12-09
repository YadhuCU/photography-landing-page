import Text from "./util/Text.jsx";
import Button from "./util/Button.jsx";
import PropTypes from "prop-types";

Nav.propTypes = {
  style: PropTypes.object,
};

export default function Nav({ style }) {
  return (
    <div
      className="container flex"
      style={
        style || {
          paddingBlock: "32px",
          justifyContent: "space-between",
        }
      }
    >
      <Text>
        <div className="title">Photography</div>
      </Text>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4rem",
        }}
      >
        <Text>
          <p className="hover">About</p>
        </Text>
        <Text>
          <p className="hover">Pricing</p>
        </Text>
        <Text>
          <p className="hover">Gallery</p>
        </Text>
        <Button>Contact</Button>
      </div>
    </div>
  );
}
