import React from "react";
import {Row, Col, Card, Button } from "react-bootstrap";
import './discover.css'
import home from '../../Assets/home.jpg'
import trip from '../../Assets/trip.jpg'
const Discover = () => {
  
      return(
        <Row>
          <Col xs={6}>
            <Card className="bg-dark text-white">
              <Card.Img src={home} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Things to do on your trip</Card.Title>
                <Card.Text><Button variant='light'>Experiences</Button></Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={6}>
            <Card className="bg-dark text-white">
                  <Card.Img src={trip} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Things to do from home</Card.Title>
                    <Card.Text>
                      <Button variant='light'>Online Experiences</Button>
                    </Card.Text>
                  </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
              
          
      )
  
};

export default Discover;