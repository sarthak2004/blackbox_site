
import React from 'react'
import Card1 from '../../components/Card1/Card1';
import Card2 from '../../components/Card2/Card2';
import Card3 from '../../components/Card3/Card3';
import Card4 from '../../components/Card4/Card4';
import Card5 from '../../components/Card5/Card5';
import Card6 from '../../components/Card6/Card6';


import './Home.css'

function Home() {
  

  return (
    <div className='background'>
            
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