import React, {useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { LIGHTING_API_URL } from "../constants";

const SearchLighting = () => {

    const [halls, setHalls] = useState([])

    const getAllBanquetHalls = (e) => {
        axios.get(LIGHTING_API_URL).then( (response) => {
            // setHalls(JSON.parse(JSON.stringify(response.data)))
            setHalls(response.data)
        })
    }
        
    useEffect(()=>{
        getAllBanquetHalls();
      },[]);
    
  return (
    <Container>
        <Row>
            <Col></Col>
            <Col xs={8}>
                <h1 style={{'paddingTop':40, 'textAlign':'center', 'fontFamily':'Serif', 'fontSize':40}}>Search results</h1>
                    {
                        halls.map(item=> {
                            return (
                                <div style={{paddingTop:20}}>
                                    <Card style={{ width: '100%'}}>
                                        <Card.Body>
                                        <Card.Title>{item.lighting_name}</Card.Title>
                                        <Card.Text>
                                            <div>
                                                <strong>Lighting Name: </strong> <p>{item.lighting_name}</p>
                                                <strong>Lighting Price: </strong> <p>{item.lighting_price}</p>
                                                <strong>Phone Number: </strong> <p>{item.phone_number}</p>
                                            </div>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
            </Col>
            <Col></Col>

        </Row>
    </Container>
  )
}

export default SearchLighting