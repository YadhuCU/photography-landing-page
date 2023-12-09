import Text from "./util/Text.jsx";
import Button from "./util/Button.jsx";
import SmallBall from "./util/SmallBall.jsx";
import SmallCardImage1 from "../../src/assets/small-card-1.png";
import SmallCardImage2 from "../../src/assets/small-card-2.png";
import SmallCardImage3 from "../../src/assets/small-card-3.png";

export default function Hero() {
  return (
    <div
      className="container grid my-2"
      style={{
        paddingBlock: "56px",
      }}
    >
      <div className="flow">
        <Text>
          <h1
            style={{
              fontSize: "var(--fs-large)",
              fontWeight: "var(--fw-bold)",
              lineHeight: "0.9",
              letterSpacing: "-8px",
            }}
          >
            Photography for all your product needs
          </h1>
        </Text>
        <Text>
          <p style={{ maxWidth: "52ch" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consequat consequat, habitasse vel. Sit vivamus tellus arcu faucibus
            vitae blandit.
          </p>
        </Text>
        <Button style={{ backgroundColor: "var(--clr-pink)" }}>
          Lets Talk{" "}
        </Button>
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
          src={SmallCardImage1}
          alt="image 1"
        />
        <SmallBall
          style={{
            backgroundColor: "var(--clr-pink)",
            width: "67px",
            top: "28%",
            left: "23%",
          }}
        />
        <img
          style={{
            position: "absolute",
            bottom: "5%",
            left: "30%",
            zIndex: "2",
          }}
          src={SmallCardImage2}
          alt="image 2"
        />
        <SmallBall
          style={{
            backgroundColor: "var(--clr-violet)",
            bottom: "5%",
            right: "20%",
            zIndex: "3",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "0%",
            right: "-5%",
          }}
          src={SmallCardImage3}
          alt="image 3"
        />
      </div>
    </div>
  );
}
