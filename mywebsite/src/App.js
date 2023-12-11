import './App.css';
import Navbar from './Navbar.js';
import Text from './Text.js';
import ClickableImage from './ClickableImage.js';
import OppositeContentTimeline from './Timeline';
import MailingField from './MailingField.js';

function App() {

  return (
    <div>
      <header>
        <div>
          <Navbar />
        </div>
        <div>
          <Text />
        </div>
        <div>
          <OppositeContentTimeline />
        </div>
        <div id='myProjects'>
          <h3>
            My Projects
          </h3>
        </div>
        <div>
          <ClickableImage />
        </div>
        <div id='skills'>
          <h3>
            My Skills
          </h3>
        </div>
        <div id='MailingField'>
          <h3>
            CONTACT ME
          </h3>
          <div>
            You can contact me through email: xingruiricky@gmail.com 
          </div>
          <div>
            <br></br>
          </div>
          <MailingField />
        </div>
      </header>
    </div>
  );
}

export default App;
