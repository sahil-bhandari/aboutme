import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXing,
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
  faHackerrank
} from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

const Socials = () => {
  return (
    <>
      <div class="social-container">
        <a href="https://github.com/sahil-bhandari" className="social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.hackerrank.com/sahil_bhandari?hr_r=1"
          className="social"
        >
          <FontAwesomeIcon icon={faHackerrank} size="2x" />
        </a>
        <a
          href="https://www.xing.com/profile/Sahil_Bhandari4"
          className="social"
        >
          <FontAwesomeIcon icon={faXing} size="2x" />
        </a>
        <a href="https://www.facebook.com/saheel.supersoul" className="social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/sahil_bhandari_" className="social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/sahilumeshbhandari/"
          className="social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </>
  );
};

export default Socials;
