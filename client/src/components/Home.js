import React from 'react'
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
import './Home.css';

function Home() {
  return (
    <>
    <div className='background'>
        <Container>
            <div style={{"paddingTop":20}}>
                <Row xs={1} md={3} className="g-4">
                <Col>
                    <CustomCard title="Banquet Halls" image={Banquet} linkTo="/SearchBanquetHalls"/>
                </Col>
                <Col>
                    <CustomCard title="Florist" image={florist} linkTo="/SearchFlorist"/>
                </Col>
                <Col>
                    <CustomCard title="Catering" image={catering} linkTo="/SearchCatering"/>
                </Col>
            </Row>
            </div>
            
            <div style={{"paddingTop":20}}>
                <Row>
                    <Col>
                        <CustomCard title="DJ" image={DJ} linkTo="/SearchDj"/>
                    </Col>
                    <Col>
                        <CustomCard title="Lighting" image={lights} linkTo="/SearchLighting"/>
                    </Col>
                    <Col>
                        <CustomCard title="Photographer" image={photo} linkTo="/SearchPhotographer"/>
                    </Col>
                </Row>
            </div>

        </Container>
    </div>
    </>
  )
}

export default Home