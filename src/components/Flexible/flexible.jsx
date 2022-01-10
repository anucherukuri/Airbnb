import React from 'react'
import './flexible.css'
import { Button, Card} from 'react-bootstrap'
import CarouselImg from '../../Assets/CarouselImg.jpg'

const Flexible = () => {
    return(
        <div className="flexible-div">
        <img src={CarouselImg} />
        <div className="flexible_info">
          <h1 className='flexible-heading'>Not Sure where to go? Perfect.</h1>
          <Button variant="light" className='flexible-button'>I'm flexible</Button>
        </div>
      </div>
    )
}
export default Flexible;