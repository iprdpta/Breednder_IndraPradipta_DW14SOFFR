import React from "react";
import {
  Row,
  Col,
  Card,
  Container,
  Image,
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup
} from "react-bootstrap";
import "../../Styles/scrollbar.css";
import { Link } from "react-router-dom";
import tp from "../../Assets/hamsss.jpg";
import "../../Styles/Profile.css";
import Slider from "../../components/Slider.js";
import edit from "../../Assets/edit.svg";
import EditProfile from "../../components/EditProfile.js";
import ProfileDeck from "../../components/ProfileDeck";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: true
    };
  }
  enableInput = open => {
    this.setState({
      input: !open
    });
  };
  render() {
    const { input } = this.state;
    return (
        <Row noGutters>
          <Col sm={4}>
            <ProfileDeck />
          </Col>
          <Col sm={8} className="colx">
            <EditProfile />
          </Col>
        </Row>
    );
  }
}
export default Profile;
