import { useState, useEffect } from "react";

import profile from "../../assets/image/profile.svg";
import "./styles.css";

export default function Intro() {
  const [loaded, setLoaded] = useState(true);
  const [isDesktop, setisDesktop] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      if(window.innerWidth>720){
        setisDesktop(true);
      }else{
        setisDesktop(false);
      }
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <>
      {loaded ? <div>Loading...</div> : null}
      <div id="home" className={isDesktop ? "overviewdesktop" : "overviewmobile"}>
        <div className={isDesktop ? "cardviewdesktop" : "cardviewmobile"}>
          <img src={profile} alt="profile" onLoad={() => setLoaded(false)} />
        </div>
        <div className={isDesktop ? "cardviewdesktop" : "cardviewmobile"}>
          <div>
            <h1>Hi, I'm</h1>
            <h1>Sahil Bhandari</h1>
            <p>IT Professional</p>
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
    </>
  );
}
