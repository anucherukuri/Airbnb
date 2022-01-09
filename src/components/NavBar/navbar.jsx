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
      <Nav.Link href="#places" className= "places">Places to stay</Nav.Link>
      <Nav.Link href="#exps" className="exp">Experiences</Nav.Link>
      <Nav.Link href="#online" className="online-Exp">Online Experiences</Nav.Link>
    </Nav>
    <Button bg='dark' variant='dark' className='host-button'>Become a host</Button>
    <Button bg='dark' variant='dark' className='globe-button'><BiGlobe className='globe-icon'/></Button>
    <Button bg='light' variant='light'className='profile-button'> <AiOutlineMenu/> <FaUserCircle/>   </Button>

     {/* <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" />

    <DropdownButton 
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-2"
      align="end"
    >
      <AiOutlineMenu/> <FaUserCircle/>
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
  </InputGroup> */}

    </Container>
  </Navbar>
  </div>
        )

    }

}
export default Nav_bar
