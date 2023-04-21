import React from "react";
import Navbar from "../Navbar/Navbar";
import Container1 from "../Containers/Container1";
import Container2 from "../Containers/Container2";
import Container3 from "../Containers/Container3";
import Container4 from "../Containers/Container4";
import Container5 from "../Containers/Container5";
import ContainerSlide from "../Containers/ContainerSlide";
function Home() {
  return (
    <div>
      <Navbar />
      <Container1/>
      <Container2/>
      <Container3/>
      <Container4/>
      <Container5/>
      <ContainerSlide/>
    </div>
  );
}

export default Home;
