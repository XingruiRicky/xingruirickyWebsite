import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
	const [activeSection, setActiveSection] = useState('Home');

	useEffect(() => {
		const handleScroll = () => {

			const sections = ['Home', 'Projects', 'Skills', 'Experience', 'Education', 'MailingField','Contact'];
			let currentSection = activeSection;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					// if element enter the center of webpage
					if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
						currentSection = section;
						break;
					}
				}
			}
			const scrollPosition = window.scrollY + window.innerHeight;
			const bottomPosition = document.documentElement.offsetHeight;
			if (scrollPosition >= bottomPosition - 50) {
				currentSection = 'Contact';
			}

			setActiveSection(currentSection);
		};

		// listen scroll event
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [activeSection]);

	const scrollToSection = (sectionId) => {
		document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
	};

	const getButtonClass = (section) => {
		return section === activeSection ? 'active' : '';
	};

	return (
		<div className='navbarWrap'>
			<div className="navbar">
				{['Home', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'].map(section => (
					<button
						key={section}
						className={getButtonClass(section)}
						onClick={() => scrollToSection(section)}
					>
						{section}
					</button>
				))}
			</div>
		</div>
	);
};
export default Navbar; 