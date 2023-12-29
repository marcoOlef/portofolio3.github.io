import React from "react";
import Navbar from "../component/Navbar";
import image from "../images/My first design.png";
import "./style/Home.css";
import SkillMenu from "../component/SkillMenu";
import SocialMedia from "../component/SocialMedia";

function Home() {
  return (
    <div id="home">
      <Navbar />
      <div className="image">
        <img src={image} alt="" />
      </div>
      <SkillMenu />
      <div className="jumb">
        <h1>
          <span>My</span> Portofolio
        </h1>
        <br />
        <p>
          Cari tahu lebih banyak tentang saya, disini anda dapat mengetahui
          tentang karya-karya saya dan pengalaman saya dalam dunia programming.
        </p>
        <br/>
        <br/>
        <SocialMedia />
      </div>
    </div>
  );
}

export default Home;
