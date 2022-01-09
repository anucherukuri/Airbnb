import React from "react";
import {Row, Col, Card, Button, Container } from "react-bootstrap";
import './discover.css'
import home from '../../Assets/home.jpg'
import trip from '../../Assets/trip.jpg'
const Discover = () => {
  
      return(
        
          <Row>
            <Col xs={6}>
            <div class='discover_wrapper'>
              <img src= {home} />
              <div className="discover_info">
                <p></p>
                <Button variant='light'></Button>
              </div>
            </div>
            </Col>
            <Col xs={6}>
            <div>
              <img src= {trip} />
              <div>
                <p></p>
                <Button variant="light"></Button>
              </div>
            </div>
            </Col>
          </Row>
        
        
              
          
      )
  
};

export default Discover;