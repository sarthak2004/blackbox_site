import './App.css';
import Home from './pages/Home/Home';
import Example from './components/Example/Example';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar'
import Sidepanel from '../src/components/Sidepanel/Sidepanel'
import React, { useState } from 'react'

function App() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Router>
      <div className="background">
      <Navbar toggleDrawer={toggleDrawer} />
      
      <Sidepanel state={state} toggleDrawer={toggleDrawer} />
      

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/example" element={<Example />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
