import './App.css';
import Navbar from './Navbar.js';
import Text from './Text.js';
import ClickableImage from './ClickableImage.js';
import OppositeContentTimeline from './Timeline';

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
        <div>
          <ClickableImage />
        </div>
      </header>
    </div>
  );
}

export default App;
