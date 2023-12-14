import React from 'react';
import './Text.css';

const Text = () => {
  return (
    <div id='textField'>
      <h1 id='title'>
        Hello !
      </h1>
      <p id='paragraph'>
        I’m Xingrui, a Full Stack Developer by day, photographer at night. Based in Calgary, Canada.
      </p>
      <div className="social-buttons">
            <button className="button linkedin">LinkedIn</button>
            <button className="button github">GitHub</button>
            <button className="button resume">Resume</button>
        </div>
    </div>

  );
};

export default Text;