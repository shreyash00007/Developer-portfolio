import React from 'react';
import './App.css';
import './mobile.css';

import profilePic from './assets/profile-pic.png';
import linkedinLightIcon from './assets/linkedin_light.png';
import linkedinDarkIcon from './assets/linkedin_dark.png';
import githubLightIcon from './assets/github_light.png';
import githubDarkIcon from './assets/github_dark.png';
import checkMarkLight from './assets/checkmark_light.png';
import checkMarkDark from './assets/checkmark_dark.png';
import project1Image from './assets/project-1.png';
import project2Image from './assets/project-2.png';
import project3Image from './assets/project-3.png';
import emailLightIcon from './assets/email_light.png';
import emailDarkIcon from './assets/email_dark.png';


function App() {

  return (
    <div>
      <section id="profile">
        <div className="section__pic-container">
          <img src={profilePic} alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">John Doe</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('./assets/resume-example.pdf')}
            >
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedinLightIcon}
              srcLight={linkedinLightIcon}
              srcDark={linkedinDarkIcon}
              alt="My LinkedIn profile"
              className="icon linkedin-icon"
              onClick={() => window.location.href = 'https://www.linkedin.com/in/shreyashdhanawade'}
            />
            <img
              src={githubLightIcon}
              srcLight={githubLightIcon}
              srcDark={githubDarkIcon}
              alt="My github profile"
              className="icon github-icon"
              onClick={() => window.location.href = 'https://github.com/shreyash00007'}
            />
          </div>
        </div>
      </section>
      <section id="skills">
        <p class="section__text__p1">Explore My</p>
        <h1 class="title">Skills</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container">
              <h2 class="experience-sub-title">Frontend Development</h2>
              <div class="article-container">
                <article>
                  <img
                    src={checkMarkLight}
                    src-light={checkMarkLight}
                    src-dark={checkMarkDark}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkLight}
                    src-light={checkMarkLight}
                    src-dark={checkMarkDark}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkLight}
                    src-light={checkMarkLight}
                    src-dark={checkMarkDark}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>SASS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkLight}
                    src-light={checkMarkLight}
                    src-dark={checkMarkDark}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkLight}
                    src-light={checkMarkLight}
                    src-dark={checkMarkDark}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkLight}
                    src-light={checkMarkLight}
                    src-dark={checkMarkDark}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div class="details-container">
              <h2 class="experience-sub-title">Backend Development</h2>
              <div class="article-container">
                <article>
                  <img
                    src={checkMarkLight}
                    src-light={checkMarkLight}
                    src-dark={checkMarkDark}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkLight}
                    src-light={checkMarkLight}
                    src-dark={checkMarkDark}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkLight}
                    src-light={checkMarkLight}
                    src-dark={checkMarkDark}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkMarkLight}
                    src-light={checkMarkLight}
                    src-dark={checkMarkDark}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={project1Image}
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Project One</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={project2Image}
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Project Two</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={project3Image}
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Project Three</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={emailLightIcon}
              srcLight={emailLightIcon}
              srcDark={emailDarkIcon}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedinLightIcon}
              srcLight={linkedinLightIcon}
              srcDark={linkedinDarkIcon}
              alt="My LinkedIn profile"
              className="icon linkedin-icon"
              onClick={() => window.location.href = 'https://linkedin.com/'}
            />
            <p><a href="https://www.linkedin.com">LinkedIn</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

