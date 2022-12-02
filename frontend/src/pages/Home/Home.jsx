import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidepanel from '../../components/Sidepanel/Sidepanel'

function Home() {
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
    <div>
        <Navbar toggleDrawer={toggleDrawer} />
        <Sidepanel state={state} toggleDrawer={toggleDrawer} />
        

    </div>
  )
}

export default Home