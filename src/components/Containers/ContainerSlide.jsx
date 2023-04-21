import React from "react";
// import ReactDOM from 'react-dom';
import Tilt from "react-parallax-tilt";

function ContainerSlide() {
  return (
    <div className="containerSlide">
      <div className="carousel-text">
        <div style={{ display: "flex" }}>
          <img
            width={"85px"}
            height={"85px"}
            style={{
              marginRight:'10px'
            }}
            src="./assets/buttons/userButton.png"
            alt="button"
          />
          <h1>Meet Rose</h1>
        </div>
        <p>
          Olivia has sent Rose a birthday gift from Akai. Because it is a gift
          order, they offer to exchange it for an alternative product in case it
          isn't quite right, and have included Liv's gift message. Akai have a
          flow for if someone named Rose receives a rose mask to update the
          heading text, because they found that it increased brand loyalty.
        </p>
      </div>
      <div className="carousel">
        <Tilt
          glareEnable={"true"}
          glareMaxOpacity={"1"}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
        >
          <img src={"./assets/cards/card1.jpg"} alt="card" />
        </Tilt>
      </div>
    </div>
  );
}

export default ContainerSlide;
