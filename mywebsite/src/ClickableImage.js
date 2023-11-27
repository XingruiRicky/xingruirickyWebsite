import React from 'react';
import './ClickableImage.css';

const ClickableImage = () => {
	return (
		<div>
			<div className='ImageFieldWrap'>
				<div className='ImageField'>
					<div>
						<a href="/p1">
							<img src={require('./Image/p1.jpg')} alt="描述性文本" class="hover-image" />
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
			<div className='ImageFieldWrap'>
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
							<img src={require('./Image/p2.jpg')} alt="描述性文本" class="hover-image" />
						</a>
					</div>
				</div>
			</div>
			<br></br>
			<div className='ImageFieldWrap'>
				<div className='ImageField'>
					<div>
						<a href="/p1">
							<img src={require('./Image/p1.jpg')} alt="描述性文本" class="hover-image" />
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
			<div className='ImageFieldWrap'>
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
							<img src={require('./Image/p2.jpg')} alt="描述性文本" class="hover-image" />
						</a>
					</div>
				</div>
			</div>
			<br></br>
			<div className='ImageFieldWrap'>
				<div className='ImageField'>
					<div>
						<a href="/p1">
							<img src={require('./Image/p1.jpg')} alt="描述性文本" class="hover-image" />
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
			<div className='ImageFieldWrap'>
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
							<img src={require('./Image/p2.jpg')} alt="描述性文本" class="hover-image" />
						</a>
					</div>
				</div>
			</div>
			<br></br>
		</div>


	);
};

export default ClickableImage;