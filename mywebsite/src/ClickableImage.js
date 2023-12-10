import React, { useState, useEffect, useRef } from 'react';
import './ClickableImage.css';

const ClickableImage = () => {
	const imageFieldWraps = useRef([]);

	const handleScroll = () => {
		imageFieldWraps.current.forEach((wrap, index) => {
			if (wrap) {
				const elementTop = wrap.getBoundingClientRect().top;
				const viewportHeight = window.innerHeight;
	
				const distanceToMiddle = elementTop - viewportHeight / 2;
	
				let scaleValue = 1;
	
				if (distanceToMiddle > 0) {
					scaleValue = 1 - (0.2 * distanceToMiddle / (viewportHeight / 2));
					scaleValue = Math.max(scaleValue, 0.5);
				}
	
				wrap.style.transform = `scale(${scaleValue})`;
				wrap.style.transition = 'transform 1s ease-in-out';
				wrap.style.transition = 'transform 1s cubic-bezier(0.22, 0.61, 0.36, 1)';  
			}
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div>
			<div className='ImageFieldWrap' ref={el => imageFieldWraps.current[0] = el}>
				<div className='ImageField'>
					<div>
						<a href="/p1">
							<img src={require('./Image/p1.jpg')} alt="描述性文本" className="hover-image" />
						</a>
					</div>
					<div className='hover-text'>
						<a href="/p1" className='imageTitle'>
							Japan
						</a>
						<div className='imageDate'>
							2023
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<div className='ImageFieldWrap' ref={el => imageFieldWraps.current[1] = el}>
				<div className='ImageField'>
					<div className='hover-text'>
						<a href="/p2" className='imageTitle'>
							Japan
						</a>
						<div className='imageDate'>
							2023
						</div>
					</div>
					<div>
						<a href="/p1">
							<img src={require('./Image/p2.jpg')} alt="描述性文本" className="hover-image" />
						</a>
					</div>
				</div>
			</div>
			<br></br>
			<div className='ImageFieldWrap' ref={el => imageFieldWraps.current[2] = el}>
				<div className='ImageField'>
					<div>
						<a href="/p1">
							<img src={require('./Image/p1.jpg')} alt="描述性文本" className="hover-image" />
						</a>
					</div>
					<div className='hover-text'>
						<a href="/p1" className='imageTitle'>
							Japan
						</a>
						<div className='imageDate'>
							2023
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<div className='ImageFieldWrap' ref={el => imageFieldWraps.current[3] = el}>
				<div className='ImageField'>
					<div className='hover-text'>
						<a href="/p2" className='imageTitle'>
							Japan
						</a>
						<div className='imageDate'>
							2023
						</div>
					</div>
					<div>
						<a href="/p1">
							<img src={require('./Image/p2.jpg')} alt="描述性文本" className="hover-image" />
						</a>
					</div>
				</div>
			</div>
			<br></br>
			<div className='ImageFieldWrap' ref={el => imageFieldWraps.current[4] = el}>
				<div className='ImageField'>
					<div>
						<a href="/p1">
							<img src={require('./Image/p1.jpg')} alt="描述性文本" className="hover-image" />
						</a>
					</div>
					<div className='hover-text'>
						<a href="/p1" className='imageTitle'>
							Japan
						</a>
						<div className='imageDate'>
							2023
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<div className='ImageFieldWrap' ref={el => imageFieldWraps.current[5] = el}>
				<div className='ImageField'>
					<div className='hover-text'>
						<a href="/p2" className='imageTitle'>
							Japan
						</a>
						<div className='imageDate'>
							2023
						</div>
					</div>
					<div>
						<a href="/p1">
							<img src={require('./Image/p2.jpg')} alt="描述性文本" className="hover-image" />
						</a>
					</div>
				</div>
			</div>
			<br></br>
		</div>


	);
};

export default ClickableImage;