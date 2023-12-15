import React from 'react';
import './Text.css';
import resume from './Resume/SDE.pdf'; 

const Text = () => {
	return (
		<div id='textField'>
			<h1 id='title'>
				Hello ! I’m Xingrui 
			</h1>
			<p id='paragraph'>
				I’m a Full Stack Developer by day, photographer at night. Based in Calgary, Canada.
			</p>
			<div className="social-buttons">
				<a href="https://www.linkedin.com/in/xingrui-zhu-8405991b9/" target="_blank" rel="noopener noreferrer" className="button linkedin">
					<img src={require("./Icon/linkedin.png")} alt="LinkedIn" className="icon" /> LinkedIn
				</a>
				<a href="https://github.com/XingruiRicky" target="_blank" rel="noopener noreferrer" className="button github">
					<img src={require("./Icon/github.png")} alt="GitHub" className="icon" /> GitHub
				</a>
				<a href={resume} target="_blank" rel="noopener noreferrer" type="application/pdf" className="button resume">
					<img src={require("./Icon/resume.png")} alt="Resume" className="icon" /> Resume
				</a>
			</div>
		</div>
	);
};

export default Text;