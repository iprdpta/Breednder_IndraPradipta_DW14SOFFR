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
import ProfileCard from "../components/ProfileCard.js";
import adds from "../Assets/adds.png";
import ProfileDeck from "../components/ProfileDeck";
import camera from "../Assets/camera.svg";

class Profile extends React.Component {
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
        <Row noGutters>
          <Col sm={4}>
            <ProfileDeck />
          </Col>
          <Col sm={8} className="colx">
            <button
              id="addpx"
              onClick={() => {
                this.addmodal(add);
              }}
            >
              ADD PET
            </button>
            <ProfileCard />
          </Col>
        </Row>

        <Modal
          size="sm"
          className="modal"
          show={add}
          onHide={() => this.addmodal(add)}
        >
          <Modal.Header className="modalHeader" closeButton>
            <Modal.Title>PREMIUM</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalbdy">
            <div>
              <div className="premium">
                <label>
                  Upgrade <label id="petm">PetMatch</label> mu <br />
                  dan nikmati fitur-fitur PREMIUM.
                </label>
                <br />
                <label>
                  <label id="petm">PetMatch</label> : 0696923423
                </label>
                <br />
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Masukkan No. Rek" />
                </Form.Group>
                <label>Upload Bukti Transfer : </label>
              </div>

              <div className="uploadtf">
                <Image className="uploadtfx" src={camera} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer bsPrefix>
            <button
              className="modalbuttonx"
              variant="primary"
              onClick={() => {
                this.finishmodal(finish);
                this.addmodal(add);
              }}
            >
              Kirim
            </button>
          </Modal.Footer>
        </Modal>

        <Link to="/home">
          <Modal
            className="modal"
            show={finish}
            onHide={() => this.addmodal(add)}
          >
            <Modal.Body>
              <div id="ty">
                <label>
                  Terimakasih telah mengUpgrade{" "}
                  <label id="petm">PetMatch</label> kamu ke versi PREMIUM.
                </label>
                <br />
                <label>Silahkan tunggu Pembayaran kamu dikonfirmasi</label>
              </div>
            </Modal.Body>
          </Modal>
        </Link>
      </div>
    );
  }
}
export default Profile;
