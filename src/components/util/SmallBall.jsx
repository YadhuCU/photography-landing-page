import PropTypes from "prop-types";
import Plx from "react-plx";

SmallBall.propTypes = {
  style: PropTypes.object,
};

export default function SmallBall({ style }) {
  const parallaxData = [
    {
      start: "self",
      end: "2000",
      properties: [
        {
          startValue: 0,
          endValue: 200,
          property: "translateY",
        },
      ],
    },
  ];
  return (
    <Plx className="small-ball" style={style} parallaxData={parallaxData}></Plx>
  );
}
