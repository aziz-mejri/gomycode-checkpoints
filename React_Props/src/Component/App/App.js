import Profile from '../Profile/Profile.js';
import pImg from '../../img.jpg';
import "./app.css";
function App () {

  return (
    <div className="App">
      <Profile fullName="Aziz Mejri" bio="IT" profession="web developer" imge={pImg} />
    </div>
    );
}

export default App;
