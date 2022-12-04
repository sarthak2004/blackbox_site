import React from 'react'
import Card1 from '../../components/Card1/Card1';
import Banquet from '../../images/banquet.png';
import florist from '../../images/floristresized.png';
import catering from '../../images/catring2.png';
import DJ from '../../images/DJresized.png';
import lights from '../../images/fairy-lights-resized.png';
import photo from '../../images/photographer-resized.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import './Home.css'

function Home() {
  

  return (
    // <div className='background'>
            
    //   <div className='column'>


        

    //     <div  className='row1' >
          
    //         <Card1 image={Banquet} text="Banquet Halls" />
    //         <Card1 image={florist} text="Florist"/>
    //         <Card1 image={catering} text="Catering"/>


    //     </div>
        

    //     <div  className='row2' >
    //       <Card1 image={DJ} text="DJ"/>
    //       <Card1 image={lights} text="Lighting"/>
    //       <Card1 image={photo} text="Photographer"/>         
        
        
    //     </div>
    //    </div>
    // </div>
    <Container>
      <Row>
        <Col>1 of 1</Col>
        <Col>2 of 1</Col>
        <Col>3 of 1</Col>

      </Row>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
        <Col>3 of 2</Col>

      </Row>
  </Container>
  )
}

export default Home