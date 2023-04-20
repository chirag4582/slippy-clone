import React from "react";
import "./Container.css";
function Container1() {
  return (
    <div className="container1">
      <div className="text">
        <p>Turn your unboxing into a marketing</p>
        <p>
          channel with <span>100% open rates</span>
        </p>
        <p>Print personalized inserts while you pick and pack</p>
        <p>
          Book demo <span>{">"}</span>
        </p>
      </div>
      <div className="image-container">
        <img src={"/assets/images/image1.png"} alt="container1-img" />
      </div>
    </div>
  );
}

export default Container1;
