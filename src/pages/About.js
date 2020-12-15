import React from "react";
import RoccoLaCoon from "./RoccoLaCoon.png";
import danceRaccoon from "./dance-raccoon.png";

const About = () => {
  return (
    <div>
      <div className='danceRaccoon-container'>
        <img className='danceRaccoon'src={danceRaccoon} alt="raccoon narrator" />
      </div>
      <div className="about-container">
        <div className="about-speech-bubble">
          <h1>About Us</h1>
          <div className="about-text">
            <p>We began after our founder, Rocco LaCoon,</p>
            <div className="rocco-lacoon">
              <img src={RoccoLaCoon} alt="" />
            </div>
            <p>
              {" "}
              discovered a half-eaten pizza in a dumpster outside a child’s
              birthday party in 2018. Feeling delighted with the feast, Mr.
              LaCoon devoted his nights to scavenging and curating only the
              highest quality trash for his fellow night crawling critters. We
              acquire new bads weekly so you can be certain you will always be
              at the forefront of high end Trashion.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
