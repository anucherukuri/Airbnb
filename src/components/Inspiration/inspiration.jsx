import React from 'react';
import {Component} from 'react'
import {Row, Col, Card, Image} from 'react-bootstrap'
import galway from "../../Assets/galway.jpg"
import cork from "../../Assets/cork.jpg"
import waterford from "../../Assets/waterford.jpg"
import westport from "../../Assets/westport.jpg"
import './inspiration.css'

class Inspiration extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col xs={3}>
                    <Card style={{ width: '18rem' }}>
                     <Card.Img  className= "cardImage" variant="top" src={galway} />
                    <Card.Body>
                        <Card.Title>Galway</Card.Title>
                        <Card.Text>
                       187 kilometres away
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>

                     <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className= "cardImage" variant="top" src= {cork}/>
                    <Card.Body>
                        <Card.Title>Cork</Card.Title>
                        <Card.Text>
                        219 kilometers away
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>

                     <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className= "cardImage" variant="top" src= {westport}/>
                    <Card.Body>
                        <Card.Title>Westport</Card.Title>
                        <Card.Text>
                       222 kilometers away
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className= "cardImage" variant="top" src= {waterford} />
                    <Card.Body>
                        <Card.Title>Waterford</Card.Title>
                        <Card.Text>
                       132 kilometers away
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>


</Row>

</div>
)
}
}
export default Inspiration