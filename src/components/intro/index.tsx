import { useState, useEffect } from "react";

import "./styles.css";
import Socials from "../socials";

export default function Intro() {
  const [isDesktop, setisDesktop] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 520) {
        setisDesktop(true);
      } else {
        setisDesktop(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [window]);

  return (
    <>
      <div
        id="home"
        className={isDesktop ? "overviewdesktop" : "overviewmobile"}
      >
        <div className={isDesktop ? "cardviewdesktop" : "cardviewmobile"} >
          <div>
            <h1>Hi, I'm Sahil Bhandari</h1>
            <h2>IT Professional</h2>
            <p>
              Enthusiastic and motivated individual with a degree in Computer
              Engineering discipline. Willingness to acquire skills related to
              Front-end Development and DevOps. A sound background in computer
              engineering and data communications. If you're looking for a 
              dedicated and experienced mobile application developer who can 
              bring your ideas to life, I would love to connect with you.
            </p>
          </div>

          <div className="footerfield">
            <a
              rel="noreferrer"
              href="https://drive.google.com/file/d/17lEXXo8KHI_zRlFckyCg5Q2LUFczUlEq/view?usp=share_link"
              target="_self"
            >
              <button className="button-cover">
                <span>👉 My Resume</span>
                <span>Check it out</span>
              </button>
            </a>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
}
