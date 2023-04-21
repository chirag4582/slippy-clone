import React from "react";
import Navbar from "../Navbar/Navbar";
import Container1 from "../Containers/Container1";
import Container2 from "../Containers/Container2";
import ContainerSlide from "../Containers/ContainerSlide";
function Home() {
  return (
    <div>
      <Navbar />
      <Container1/>
      <Container2/>
      <ContainerSlide/>
    </div>
  );
}

export default Home;
