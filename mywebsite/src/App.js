import './App.css';
import Navbar from './Navbar.js';
import Text from './Text.js';
import ClickableImage from './ClickableImage.js';
import OppositeContentTimeline from './Timeline';
import MailingField from './MailingField.js';
import Background from './Background.js';
import Education from './Education.js';
import Footer from './Footer.js'
import Skills from './Skills.js'


function App() {

	return (

		<div>
			<header>
				<div id='Home'>
					<Background />
					<Navbar />
					<Text />
				</div>
				<div id='Projects'>
					<h2>
						My Projects
					</h2>
				</div>
				<div>
					<ClickableImage />
				</div>
				<div id='Skills'>
					<h2>
						My Skills
					</h2>
					<Skills />
				</div>
				<div id='Experience'>
					<h2>
						Experience
					</h2>
					<OppositeContentTimeline />
				</div>
				<div id='Education'>
					<h2>
						Education
					</h2>
					<Education
						school="University of Calgary"
						degree="Bachelor of Science"
						field="Computer Science"
						startDate="2018.9"
						endDate="2023.1"
					/>
				</div>
				<div id='Contact'>
					<h2>
						CONTACT ME
					</h2>
					<MailingField />
				</div>
				<div>
					<Footer />
				</div>
			</header>
		</div>
	);
}

export default App;
