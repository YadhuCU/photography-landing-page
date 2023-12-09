import PropTypes from "prop-types";
import Plx from "react-plx";

BgBall.propTypes = {
  style: PropTypes.object,
};

export default function BgBall({ style }) {
  const parallaxData = [
    {
      start: "0",
      end: "2000",
      properties: [
        {
          startValue: 0,
          endValue: 800,
          property: "translateY",
        },
      ],
    },
  ];
  return (
    <Plx className="bg-ball" style={style} parallaxData={parallaxData}></Plx>
  );
}
