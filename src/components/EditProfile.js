import React from "react";
import {
  Row,
  Col,
  Container,
  Image,
  Form,
  InputGroup,
  Tab,
  Tabs
} from "react-bootstrap";
import { Link } from "react-router-dom";
import tp from "../Assets/tp.jfif";
import Slider from "../components/Slider.js";
import edit from "../Assets/edit.svg";
import ProfileCard from "../components/ProfileCard.js";
import Pics from "./Pics.js";
import "../Styles/scrollbar.css";
import "../Styles/EditProfile.css";
import Data from "../Data/datapicprof.js";
import adds from "../Assets/adds.png";
import camera from "../Assets/camera.svg";

const EditProfile = () => {
  return (
    <div id="prfl">
      <div>
        <Tabs
          className="tabb"
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
        >
          <Tab
            eventKey="home"
            title={<label className="tabtit">Gallery</label>}
          >
            <div className="bdyx scrollbar scrollbar-juicy-peach">
              <div id="cdxxx">
                <div>
                  <Row noGutters>
                    {Data.map((postData, index) => {
                      return (
                        <Col sm={4} className="imagexz">
                          <Image src={postData.pics} className="cardmgx" />
                          <label class="name">{postData.name}</label>
                        </Col>
                      );
                    })}
                    <div className="uploadtfxx">
                      <Image className="uploadtfx" src={camera} />
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </Tab>
          <Tab
            eventKey="profile"
            title={<label className="tabtit">Profile</label>}
          >
            <div className="formzz scrollbar scrollbar-juicy-peach">
              <div className="formxx">
                <Form bsPrefix>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Pet Name</Form.Label>
                    <Form.Control type="text" placeholder="Pet Name" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Breeder Name</Form.Label>
                    <Form.Control type="text" placeholder="Breeder Name" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Genderless</option>
                      <option>Hode</option>
                      <option>Multi Gender</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Age</Form.Label>
                    <Form.Control as="select">
                      <option>Child</option>
                      <option>Teenager</option>
                      <option>Adult</option>
                      <option>Mild</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>About Pet</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Tab>
        </Tabs>
        <div>
          <Link to="/profile">
            <button id="save">Save</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
