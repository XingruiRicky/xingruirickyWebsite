import './App.css';
import Navbar from './Navbar.js';
import Text from './Text.js';
import ClickableImage from './ClickableImage.js';
import OppositeContentTimeline from './Timeline';
import MailingField from './MailingField.js';
import Background from './Background.js';
import Education from './Education.js';


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
          <h3>
            My Projects
          </h3>
        </div>
        <div>
          <ClickableImage />
        </div>
        <div id='Skills'>
          <h3>
            My Skills
          </h3>
        </div>
        <div id='Experience'>
          <h3>
            Experience
          </h3>
          <OppositeContentTimeline />
        </div>
        <div id='Education'>
          <h3>
            Education
          </h3>
          <Education
            school="University of Calgary"
            degree="Bachelor of Science"
            field="Computer Science"
            startDate="2018.9"
            endDate="2023.1"
          />
        </div>
        <div id='Contact'>
          <h3>
            CONTACT ME
          </h3>
          <MailingField />
        </div>
      </header>
    </div>
  );
}

export default App;
