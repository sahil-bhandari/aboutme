import React, { memo } from "react";
import "./styles.css";
import Socials from "../socials";
import ResumeViewer from "../resumeviewer";
import Background from "../background";

const Intro = () => {
  return (
    <div id="home" className="overview">
      <Background />
      <div className="content-container">
        <section className="intro-section" aria-labelledby="intro-heading">
          <h1 id="intro-heading">Hi, I'm Sahil Bhandari</h1>
          <h2>IT Professional</h2>
          <p>
            Forward-thinking Computer Engineer specializing in modern web development, 
            mobile applications, and cloud technologies. Building intelligent,
            scalable solutions with React, TypeScript, serverless technologies, and modern
            AI/ML integrations. Passionate about creating experiences that blend cutting-edge
            innovation with real-world impact in the era of ambient computing.
          </p>
        </section>

        <footer className="footerfield">
          <ResumeViewer
            resumeUrl="https://drive.google.com/file/d/17lEXXo8KHI_zRlFckyCg5Q2LUFczUlEq/view?usp=share_link"
            name="Sahil Bhandari"
          />
          <Socials />
        </footer>
      </div>
    </div>
  );
};

export default memo(Intro);