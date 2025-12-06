import React, { memo } from "react";
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

interface SocialLink {
  href: string;
  icon: any;
  label: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/sahil-bhandari",
    icon: faGithub,
    label: "GitHub"
  },
  {
    href: "https://www.hackerrank.com/sahil_bhandari?hr_r=1",
    icon: faHackerrank,
    label: "HackerRank"
  },
  {
    href: "https://www.xing.com/profile/Sahil_Bhandari4",
    icon: faXing,
    label: "Xing"
  },
  {
    href: "https://www.facebook.com/saheel.supersoul",
    icon: faFacebook,
    label: "Facebook"
  },
  {
    href: "https://twitter.com/sahil_bhandari_",
    icon: faTwitter,
    label: "Twitter"
  },
  {
    href: "https://www.linkedin.com/in/sahilumeshbhandari/",
    icon: faLinkedin,
    label: "LinkedIn"
  }
];

const Socials = () => {
  return (
    <div className="social-container" role="list">
      {SOCIAL_LINKS.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          className="social"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${label} profile`}
          role="listitem"
        >
          <FontAwesomeIcon icon={icon} size="2x" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

export default memo(Socials);