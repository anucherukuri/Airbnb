import React from 'react';
import {Component} from 'react'
import {Row, Col, Card, Container} from 'react-bootstrap'
import galway from "../../Assets/galway.webp"
import cork from "../../Assets/cork.webp"
import waterford from "../../Assets/waterford.webp"
import westport from "../../Assets/westport.webp"
import './inspiration.css'

class Inspiration extends Component{
    render(){
        return(
            
            <Container className='Inspiration-Container'>
            <h1>Inspiration for your next trip</h1>
                <Row>
                    <Col xs={3} className=''>
                    <Card style={{ width: '18rem' }} className='cards'>
                     <Card.Img  className= "cardImage" variant="top" src={galway} />
                    <Card.Body className='galway-cardBody'>
                        <Card.Title className='card-title'>Galway</Card.Title>
                        <Card.Text className='card-text'>
                       187 kilometres away
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>

                     <Col xs={3} className=''>
                    <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img className= "cardImage" variant="top" src= {cork}/>
                    <Card.Body className='cork-cardBody'>
                        <Card.Title className='card-title'>Cork</Card.Title>
                        <Card.Text className='card-text'>
                        219 kilometers away
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>

                     <Col xs={3} className=''>
                    <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img className= "cardImage" variant="top" src= {westport}/>
                    <Card.Body className='westport-cardBody'>
                        <Card.Title className='card-title'>Westport</Card.Title>
                        <Card.Text className='card-text'>
                       222 kilometers away
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={3} className=''>
                    <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img className= "cardImage" variant="top" src= {waterford} />
                    <Card.Body className='waterford-cardBody'>
                        <Card.Title className='card-title'>Waterford</Card.Title>
                        <Card.Text className='card-text'>
                       132 kilometers away
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
</Row>
</Container>

)
}
}
export default Inspiration