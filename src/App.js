import './App.css';
import Navbar from './component/Navbar';
import  Home  from './component/Home';
import  About  from './component/About';
import NoteState from './context/notes/NoteState';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
    <div className="conainer">
    <NoteState>
    <Router>
    <Navbar/>
    <Alert message="this is React Course"/>
    
    <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="/About" element={<About />} />
  </Routes>
      
    </Router>
    </NoteState>
    </div>
    </>
  );
}

export default App;
