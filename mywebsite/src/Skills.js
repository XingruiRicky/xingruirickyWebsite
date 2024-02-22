import React from 'react';
import './Skills.css';

// 导入图片
import htmlLogo from './Icon/html.png';
import cssLogo from './Icon/css.png';
import jsLogo from './Icon/js.png';
import reactLogo from './Icon/react.png';
import nodejsLogo from './Icon/nodejs.png';
import sqlLogo from './Icon/sql.png';
import azureLogo from './Icon/azure.png';
import githubLogo from './Icon/github.png';
import pythonLogo from './Icon/python.png';
import cppLogo from './Icon/cpp.png';
import javaLogo from './Icon/java.png';
import powerbiLogo from './Icon/powerbi.png';
import dockerLogo from './Icon/docker.png';
import pandasLogo from './Icon/pandas.png';


const logosRow1 = [pythonLogo, javaLogo, cppLogo, sqlLogo];
const logosRow2 = [htmlLogo, cssLogo, jsLogo, reactLogo,nodejsLogo];
const logosRow3 = [azureLogo, githubLogo,dockerLogo,powerbiLogo,pandasLogo];


const Skills = () => {
    return (
        <div className="logo-container">
            <div className="logo-row">
                {logosRow1.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo}  alt=''/>
                    </div>
                ))}
            </div>
            <div className="logo-row">
                {logosRow2.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo} alt=''/>
                    </div>
                ))}
            </div>
            <div className="logo-row">
                {logosRow3.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo} alt=''/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
