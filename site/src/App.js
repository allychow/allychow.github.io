import React, { Component } from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import image from './styles/onABike.jpg';
import resume from './styles/AllisonChow-Resume.pdf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page welcome">
          <div className="intro">
            <h1>Allison Chow</h1>
            <h2>Software Engineer / Program Manager</h2>
          </div>
        </div>
        <div className="page aboutMe">
          <div className="info">
            <div className="border">
              <img src={image} width={100} />
            </div>
            <div className="infoText">
              <h3>About Me</h3>
              <p>Hi! You've reached <strong>Ally</strong>,<strong> 3A computer engineer</strong> at the <strong>University of Waterloo</strong>. I'm currently either out working for <strong>Microsoft 
                as a Software Engineering Intern</strong>, playing League of Legends almost not terribly, searching for raisin donuts, or blogging on Medium. <br/><br/>If I seem familiar, you might have seen me 
                working with <strong>UW Women in STEM, planning EngHack 2018</strong>, or spilling coffee on myself and others.
              <br /><br />
                Please leave a message (at my email) after the tone. <strong>**beep**</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="page links">
          <div className="linksInfo">
            <a class="btn" target="_blank" href="http://medium.com/@allychow" title="Medium" onclick="window.open(this.href); return false;" onkeypress="window.open(this.href); return false;">
              <i class="fab fa-medium fa-5x"></i>
            </a>
            <a class="btn" target="_blank" href="http://github.com/allychow" title="Github" onclick="window.open(this.href); return false;" onkeypress="window.open(this.href); return false;">
              <i class="fab fa-github-square fa-5x"></i>
            </a>
            <a class="btn" target="_blank" href={resume} title="Resume" onclick="window.open(this.href); return false;" onkeypress="window.open(this.href); return false;">
              <i class="fas fa-file fa-5x"></i>
            </a>
            <a class="btn" target="_blank" href="http://linkedin.com/in/allychow" title="LinkedIn" onclick="window.open(this.href); return false;" onkeypress="window.open(this.href); return false;">
              <i class="fab fa-linkedin fa-5x"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
