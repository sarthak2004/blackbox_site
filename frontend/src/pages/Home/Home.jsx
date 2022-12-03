
import React, { useState } from 'react'
import Card1 from '../../components/Card1/Card1';
import Card2 from '../../components/Card2/Card2';
import Card3 from '../../components/Card3/Card3';
import Card4 from '../../components/Card4/Card4';
import Card5 from '../../components/Card5/Card5';
import Card6 from '../../components/Card6/Card6';

import Navbar from '../../components/Navbar/Navbar'
import Sidepanel from '../../components/Sidepanel/Sidepanel'
import './Home.css'

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
    <div className='background'>
            

        <Navbar toggleDrawer={toggleDrawer} />
      
        <Sidepanel state={state} toggleDrawer={toggleDrawer} />
        
             
      <div className='column'>


        

        <div  className='row1' >
          
            <Card1/>
            <Card2/>
            <Card3/>


        </div>
        

        <div  className='row2' >
            <Card4/>
            <Card5/>
            <Card6/>            
        
        
        </div>
       </div>
    </div>
  )
}

export default Home