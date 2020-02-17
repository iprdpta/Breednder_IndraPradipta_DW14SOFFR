import React from "react";
import {
  Row,
  Col,
  Card,
  Container,
  Image,
  Button,
  Form,
  Modal
} from "react-bootstrap";
import { Link } from "react-router-dom";
import tp from "../Assets/hamsss.jpg";
import "../Styles/scrollbar.css";
import "../Styles/Profile.css";
import Slider from "../components/Slider.js";
import edit from "../Assets/edit.svg";
import adds from "../Assets/adds.png";
import left from "../Assets/Icon/button.svg";

class ProfileDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: true,
      finish: false
    };
  }
  enableInput = open => {
    this.setState({
      input: !open
    });
  };
  addmodal = open => {
    this.setState({
      add: !open
    });
  };
  finishmodal = open => {
    this.setState({
      finish: !open
    });
  };
  render() {
    const { input, add, finish } = this.state;
    return (
      <div>
        <div className="header">
          <Link to="/home">
            <Image className="left" src={left} />
            <Image src={tp} roundedCircle className="prof"></Image>
          </Link>
          <label className="nick">Hams</label>
        </div>
        <div>
          <label className="z">Settings</label>
        </div>

        <div className="settingx scrollbar scrollbar-juicy-peach">
          <div className="sett">
            <label className="tit"> Account Settings</label>
            <Container>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="8">
                  <Form.Control disabled value="indraprdpta@gmail.com" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Phone
                </Form.Label>
                <Col sm="8">
                  <Form.Control disabled={input} value="+62869696969"  />
                </Col>
              </Form.Group>
            </Container>
            <div>
              <label className="tit xf"> Discovery Settings</label>
              <div className="disx">
                <label className="titt">Maximum Distance</label>
                <div className="slider">
                  <Slider />
                </div>
                <label className="titt">Age</label>
                <div className="forms">
                  <Form.Group>
                    <Form.Control as="select">
                      <option>Child</option>
                      <option>Teenager</option>
                      <option>Adult</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <label className="titt">Species</label>
                <div className="forms">
                  <Form.Group>
                    <Form.Control as="select">
                      <option>Cat</option>
                      <option>Dog</option>
                      <option>Mice</option>
                      <option>Bat</option>
                      <option>Horse</option>
                      <option>Amoeba</option>
                      <option>Rat</option>
                      <option>Bird</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <Link to="/">
                <button className="buttonxx">Logout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileDeck;
