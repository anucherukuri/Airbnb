import React from 'react'
import './flexible.css'
import { Button, Card} from 'react-bootstrap'
import CarouselImg from '../../Assets/CarouselImg.jpg'

const Flexible = () => {
    return(
        <Card className="card bg-dark text-white">
  <Card.Img src={CarouselImg} alt="Card image" />
  <Card.ImgOverlay>
    
    <Card.Text class="text-on-card">
      Not sure where to go? Perfect.
      <p><Button variant='light' className='flexible-button'>I'm flexible</Button></p>
    </Card.Text>
    
  </Card.ImgOverlay>
</Card>
    )
}
export default Flexible;