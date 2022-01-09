import React from "react";
import {
  Box,
  Container,
  Row,
  Col,
  FooterLink,
  Heading
} from "./FooterStyles.js";

  
const Footer = () => {
  return (
    
    <Box className="footer-box">
     
      <Container>
        <Row>
          <Col>
            <Heading>Support</Heading>
            <FooterLink href="#">Help Centre</FooterLink>
            <FooterLink href="#">Safety information</FooterLink>
            <FooterLink href="#">Cancellation options</FooterLink>
            <FooterLink href="#">Our COVID-19 Response</FooterLink>
            <FooterLink href="#">Supporting people with disabilities</FooterLink>
            <FooterLink href="#">Report a neighbourhood concern</FooterLink>
          </Col>
          <Col>
            <Heading>Community</Heading>
            <FooterLink href="#">Airbnb.org: disaster relief housing</FooterLink>
            <FooterLink href="#">Support Afghan refugees</FooterLink>
            <FooterLink href="#">Celebrating diversity & belonging</FooterLink>
            <FooterLink href="#">Combating discrimination</FooterLink>
          </Col>
          <Col>
            <Heading>Hosting</Heading>
            <FooterLink href="#">Try hosting</FooterLink>
            <FooterLink href="#">AirCover: protection for Hosts</FooterLink>
            <FooterLink href="#">Visit our community forum</FooterLink>
            <FooterLink href="#">How to host responsibly</FooterLink>
          </Col>
           <Col>
            <Heading>About</Heading>
            <FooterLink href="#">Newsroom</FooterLink>
            <FooterLink href="#">Learn about new features</FooterLink>
            <FooterLink href="#">Letter from our founders</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Investors</FooterLink>
            <FooterLink href="#">Airbnb Luxe</FooterLink>
          </Col>
          <hr></hr>
          

          {/* <Col>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Col> */}
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;