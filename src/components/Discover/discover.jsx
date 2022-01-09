import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "./discover.css";
import home from "../../Assets/home.jpg";
import trip from "../../Assets/trip.jpg";
const Discover = () => {
  return (
    <div className="discover_container">
      <div className="discover_wrapper">
        <img src={trip} />
        <div className="discover_info">
          <h1 className='Discover-heading'>Things to do your trip</h1>
          <Button variant="light">Experiences</Button>
        </div>
      </div>

      <div className="discover_wrapper">
        <img src={home} />
        <div className="discover_info">
          <h1 className='Discover-heading'>Things to do from whom</h1>
          <Button variant="light">Online Experiences</Button>
        </div>
      </div>
    </div>
  );
};

export default Discover;