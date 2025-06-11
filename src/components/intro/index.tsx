import React from "react";
import "./styles.css";
import Socials from "../socials";
import ResumeViewer from "../resumeviewer";
import Background from "../background";

export default function Intro() {
  return (
    <div
      id="home"
      className="overview"
    >
      <Background/>
      <div className="content-container">
        <section className="intro-section">
          <h1>Hi, I'm Sahil Bhandari</h1>
          <h2>IT Professional</h2>
          <p>
            Passionate Computer Engineer specializing in modern web development, 
            mobile applications, and cloud technologies. I create seamless digital 
            experiences with Android, React, TypeScript, and cutting-edge DevOps practices. 
            Ready to transform your ideas into innovative, scalable solutions.
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
}