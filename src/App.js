import Adresse from './Component/Profile/Address';
import Fullname from './Component/Profile/FullName';
import Profilephoto from './Component/Profile/ProfilePhoto';
import './App.css';

function App() {
  return (
    <div className="App">
      <Profilephoto/>
      <br></br>
      <Fullname/>
      <Adresse/>
      
    </div>
  );
}

export default App;
