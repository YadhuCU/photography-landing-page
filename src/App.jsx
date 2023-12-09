import "./App.css";
import Nav from "./components/Nav.jsx";
import BgBall from "./components/util/BgBall.jsx";
import Hero from "./components/Hero.jsx";
import Slider from "./components/Slider.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <div>
      <Nav />
      <BgBall
        style={{
          top: "-30%",
          left: "-15%",
          backgroundColor: "var(--clr-violet)",
        }}
      />
      <Hero />
      <BgBall
        style={{
          top: "25%",
          right: "-10%",
          backgroundColor: "var(--clr-pink)",
        }}
      />
      <Slider />
      <BgBall
        style={{
          top: "95%",
          left: "5%",
          backgroundColor: "var(--clr-violet)",
        }}
      />
      <About />
      <div
        style={{
          paddingBlock: "2.5vw",
          backgroundColor: "var(--clr-pink)",
        }}
      >
        <Nav />
      </div>
    </div>
  );
}

export default App;
