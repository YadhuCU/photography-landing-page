import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useInView, useAnimation } from "framer-motion";

Text.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default function Text({ children, style }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={
        style || {
          width: "fit-content",
          overFlow: "hidden",
          position: "relative",
        }
      }
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.9, delay: 0.45 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.7, ease: "easeIn", delay: 0.2 }}
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          backgroundColor: "var(--clr-violet)",
          zIndex: "9999",
        }}
      ></motion.div>
    </div>
  );
}
