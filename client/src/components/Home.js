import React from 'react'
import CustomNavbar from './CustomNavbar'
// import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCard from './CustomCard';
import Banquet from '../images/banquet.png';
import florist from '../images/floristresized.png';
import catering from '../images/catring2.png';
import DJ from '../images/DJresized.png';
import lights from '../images/fairy-lights-resized.png';
import photo from '../images/photographer-resized.png';

function Home() {
  return (
    <>
    <CustomNavbar/>
    <Container>
        <div style={{"paddingTop":20}}>
            <Row xs={1} md={3} className="g-4">
            <Col>
                <CustomCard title="Banquet Halls" image={Banquet}/>
            </Col>
            <Col>
                <CustomCard title="Florist" image={florist}/>
            </Col>
            <Col>
                <CustomCard title="Catering" image={catering}/>
            </Col>
        </Row>
        </div>
        
        <div style={{"paddingTop":20}}>
            <Row>
                <Col>
                    <CustomCard title="DJ" image={DJ}/>
                </Col>
                <Col>
                    <CustomCard title="Lighting" image={lights}/>
                </Col>
                <Col>
                    <CustomCard title="Photographer" image={photo}/>
                </Col>
            </Row>
        </div>

    </Container>
    </>
  )
}

export default Home