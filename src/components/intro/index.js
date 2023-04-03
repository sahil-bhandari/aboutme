import { useState } from "react";

import curveline from "../../assets/image/curveline.svg";
import profile from "../../assets/image/profile.svg";
import "./styles.css";

export default function Intro() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? <div>Loading...</div> : null}
      <img src={curveline} alt="curveline" />
      <div id="home" className="overview">
        <div className="cardview">
          <img src={profile} alt="profile" onLoad={() => setLoaded(false)} />
        </div>
        <div className="cardview">
          <div>
            <h1>Hi, I'm</h1>
            <h1>Sahil Bhandari</h1>
            <p>Computer Engineer</p>
            <p>
              Enthusiastic and motivated individual with a degree in Computer
              Engineering discipline. Willingness to acquire skills related to
              Front-end Development and DevOps. A sound background in computer
              engineering and data communications.
            </p>
          </div>

          <div className="footerfield">
            <a
              className="App-link"
              rel="noreferrer"
              href="https://drive.google.com/file/d/17lEXXo8KHI_zRlFckyCg5Q2LUFczUlEq/view?usp=share_link"
              target="_self"
            >
              Go to My Resume
            </a>
            <a
              className="App-link"
              href="https://linktr.ee/SahilUmeshBhandari"
              target="_self"
            >
              Click here to know more
            </a>
          </div>
        </div>
      </div>
      <img src={curveline} alt="curveline" />
    </>
  );
}
