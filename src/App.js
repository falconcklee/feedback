import logo from './logo.svg';
import './App.css';
import Feedback from './pages/Feedback';
import bg from './assets/images/feedback-bg.jpg';

var sectionStyle = {
  backgroundImage: `url(${bg})`,
  height: `100%`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
}


function App() {
  return (
      <div style={sectionStyle}>
        <Feedback />
      </div>
  );
}

export default App;
