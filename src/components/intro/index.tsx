import "./styles.css";
import Socials from "../socials";

export default function Intro() {
  return (
    <div
      id="home"
      className="overview"
    >
      <div>
        <section>
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
        </section>
        <footer className="footerfield">
          <a
            rel="noreferrer"
            href="https://drive.google.com/file/d/17lEXXo8KHI_zRlFckyCg5Q2LUFczUlEq/view?usp=share_link"
          >
            <button className="button-cover">
              <span>👉 Check out my Resume</span>
            </button>
          </a>
          <Socials />
        </footer>
      </div>
    </div>
  );
}
