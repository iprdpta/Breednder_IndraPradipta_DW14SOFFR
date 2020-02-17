import React from "react";
import { Button, Container, Modal, Form } from "react-bootstrap";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Label } from "react-bootstrap";
import "../Styles/LandingPage.css";
import "../Styles/Modal.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      register: false
    };
  }

  hlogin = open => {
    this.setState({
      login: !open
    });
  };

  hregister = open => {
    this.setState({
      register: !open
    });
  };

  render() {
    const { login, register } = this.state;

    return (
      <Container fluid className="landing">
        <div className="landingg">
          <label className="petmatch">PetMatch</label>
          <div>
            <button
              className="blogin"
              onClick={() => {
                this.hlogin(login);
              }}
            >
              LOGIN
            </button>
          </div>
          <br />
          <div className="divtittle">
            <h1 className="moto">
              Join Now! <br />
              And Make Your Pet <label id="hppy">Happy</label>
            </h1>
            <br />
          </div>
          <div className="divreg">
            <button
              className="breg"
              onClick={() => {
                this.hregister(register);
              }}
            >
              REGISTER
            </button>
            <br />
            <p className="term">
              by clicking enter, you agree to
              <a suppressContentEditableWarning> our terms.</a>
              Learn how we process your data in our
              <a> Pivacy Policy</a> and
              <a> Cookie Policy</a>
            </p>
          </div>
        </div>

        <div className="modalx">
          <Modal
            size="sm"
            show={login}
            onHide={() => this.hlogin(login)}
            className="modal"
          >
            <Modal.Header className="modalHeader" closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modalform">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
              </div>
            </Modal.Body>
            <Modal.Footer bsPrefix>
              <Link to="/home">
                <button
                  className="modalbutton"
                  onClick={() => {
                    this.hlogin(login);
                  }}
                >
                  LOGIN
                </button>
              </Link>
            </Modal.Footer>
          </Modal>
        </div>

        <Modal
          size="sm"
          show={register}
          onHide={() => this.hregister(register)}
          className="modal"
        >
          <Modal.Header className="modalHeader" closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer bsPrefix >
            <button
              className="modalbutton"
            >
              REGISTER
            </button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default App;
