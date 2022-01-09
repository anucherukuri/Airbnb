import React from "react"
import './hosting.css'
import { Container,Card, Button } from 'react-bootstrap'
const Hosting = () => {
   
        return(
            <>
            <Container className="Host-Container">
        <Card className="host-card-class text-white">
          <Card.Img
            src="https://media.istockphoto.com/photos/friends-during-a-summer-day-picture-id815651792?b=1&k=20&m=815651792&s=170667a&w=0&h=GdQ_M74f6hsXkng9khwWMYcggCzF5007ly7jvjGcjgs="
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Questions about hosting?</Card.Title>
            <p>
              <Button variant="light">Ask a Superhost</Button>
            </p>
          </Card.ImgOverlay>
        </Card>
      </Container> 
            </>
        )

        
    
}
export default Hosting