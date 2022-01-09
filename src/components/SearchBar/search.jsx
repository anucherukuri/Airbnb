import { Component } from "react";
import React from "react";
import {Row,Container, Col } from "react-bootstrap";

import { FiSearch } from "react-icons/fi";

import "./search.css";

class searchBar extends Component {
  state = { searchString: "" };
  searchStringHandler = (e) => {
    if (e.keyCode === 13) {
      // WHEN ENTER KEY IS PRESSED
      this.props.searchBar(this.state.searchString);
    } else {
      this.setState({ searchString: e.currentTarget.value });
    }
  };

  render() {
    return (
      <>
   <div style={{}} className="searchDiv">
          <Container className="searchContainer">
            <Row className="searchBarRow">
              <Col md={3} className="  mt-1  search__inputs">
                <small className="searchBar1"> Location</small>
                <br />
                <span className="search__text"> Where are you going?</span>
              </Col>
              <span className="search__hr__line mr-2"></span>
              <Col md={2} className="mt-1  search__inputs">
                <small className="sear">Check in</small>
                <br />
                <span className="search__text">Add dates</span>
              </Col>
              <span className="search__hr__line mr-2"></span>
              <Col md={3} className="mt-1  search__inputs">
                <small className="search__bar__small__text"> Check out</small>
                <br />
                <span className="search__text">Add dates</span>
              </Col>
              <span className="search__hr__line mr-2"></span>
              <Col md={3} className="mt-1  search__inputs d-flex">
                <div className="" role="button">
                  <span>
                    <small className="search__bar__small__text"> Guests</small>
                  </span>

                  <br />
                  <span className="search__text  ">Add guests</span>
                </div>
                <div className=" ml-auto">
                  <span className="search__btn mr-auto mt-2">
                    <FiSearch
                      className=""
                      style={{ height: "20px", width: "20px" }}
                    />
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        </>
    );
  }
}
export default searchBar;
