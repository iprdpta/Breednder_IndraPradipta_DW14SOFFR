import React from "react";
import { Row, Col, Card, Container, Image, Button } from "react-bootstrap";
import "../Styles/Home.css";
import "../Styles/scrollbar.css";
import Deck from "../components/Deck";
import { Link } from "react-router-dom";
import CardList from "../components/CardList";
import Data from "../Data/data.js";

import tp from "../Assets/hamsss.jpg";

import love from "../Assets/Icon/heart.svg";
import dis from "../Assets/Icon/close.svg";
import rand from "../Assets/Icon/change.svg";
import flas from "../Assets/Icon/thunder.svg";
import left from "../Assets/Icon/button.svg"
import Profile from "../Profile/Profile"

class Home extends React.Component {
  render() {
    return (
        <Row noGutters className="matchdeck">
          <Col sm={4} className="cardxa">
            <div className="matchdeckk">
              <div className="header">
                <Link to="/profile">
                  <Image className="left" src={left} /><Image src={tp} roundedCircle className="prof"></Image>
                </Link>
                <label className="nick">Hams</label>
              </div>
              <div>
                <label className="z">Match</label>
              </div>
              <Container fluid className="bdy scrollbar scrollbar-juicy-peach">
                <Row>
                  {Data.map((postData, index) => {
                    return (
                      <Col sm={4}>
                        <Card.Img src={postData.pics} className="cardmg" />
                        <label class="name">{postData.name}</label>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
          </Col>

          <Col sm={8} >
            <Container id="swipe">
              <Deck />
            </Container>
            <button onClick={Deck} className="butt1">
              <Image className="icon" src={rand} />
            </button>
            <button className="butt2">
              <Image className="icon" src={love} />
            </button>
            <button className="butt3">
              <Image className="icon" src={dis} />
            </button>
            <button className="butt4">
              <Image className="icon" src={flas} />
            </button>
          </Col>
        </Row>
    );
  }
}
export default Home;
