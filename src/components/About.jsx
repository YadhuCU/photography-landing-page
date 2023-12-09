import SmallCard from "./util/SmallCard.jsx";
import SmallBall from "./util/SmallBall.jsx";
import Text from "./util/Text.jsx";
import Button from "./util/Button.jsx";
import AboutImage from "../assets/about.jpg";

export default function About() {
  return (
    <div
      className="container grid"
      style={{
        marginBlock: "7vw",
        paddingBlock: "7vw",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <SmallCard>
          <img
            src={AboutImage}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </SmallCard>
        <SmallBall
          style={{
            width: "70px",
            backgroundColor: "var(--clr-pink)",
            top: "0%",
            left: "10%",
          }}
        />
        <SmallBall
          style={{
            width: "130px",
            backgroundColor: "var(--clr-violet)",
            bottom: "30%",
            right: "25%",
          }}
        />
        <SmallBall
          style={{
            backgroundColor: "var(--clr-pink)",
            bottom: "5%",
            left: "5%",
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gap: "30px",
          placeContent: "center",
        }}
      >
        <Text>
          <h1
            style={{
              fontSize: "var(--fs-semi-large)",
              fontWeight: "var(--fw-bold)",
              lineHeight: ".9",
            }}
          >
            Lorem ipsum dolor sit amet?
          </h1>
        </Text>
        <Text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consequat consequat, habitasse vel. Sit vivamus tellus arcu faucibus
            vitae blandit.
          </p>
        </Text>
        <div>
          <Button style={{ backgroundColor: "var(--clr-violet)" }}>
            Lets Talk
          </Button>
        </div>
      </div>
    </div>
  );
}
