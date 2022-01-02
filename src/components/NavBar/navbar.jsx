import { Component } from 'react';
import {Navbar, Nav, Container,Image, Button} from 'react-bootstrap'
import { BiGlobe } from 'react-icons/bi';
import {AiOutlineMenu} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import navImage from "../../Assets/navImage.png"


import './navbar.css'
class Nav_bar extends Component{
    render(){
        return(
          <div>
          <Navbar className="Navbar" bg="dark" variant="dark">
    <Container fluid>
    <Navbar.Brand href="#home">
    <Image src= {navImage} alt='navImg' className='navImg'>
        
        </Image>
        </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#places">Places to stay</Nav.Link>
      <Nav.Link href="#exps">Experiences</Nav.Link>
      <Nav.Link href="#online">Online Experiences</Nav.Link>
    </Nav>
    <Button bg='dark' variant='dark' className='host-button'>Become a host</Button>
    <Button bg='dark' variant='dark' className='globe-button'><BiGlobe className='globe-icon'/></Button>
    <Button bg='light' variant='light'className='profile-button'> <AiOutlineMenu/> <FaUserCircle/></Button>
    </Container>
  </Navbar>
  </div>
        )

    }

}
export default Nav_bar
