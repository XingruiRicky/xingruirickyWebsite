import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright &copy; {new Date().getFullYear()} Xingrui's website</p>
            <p>Thank you for visiting! </p>
        </footer>
    );
};

export default Footer;