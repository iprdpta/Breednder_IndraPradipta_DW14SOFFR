import React from "react";
import zx from "./zx.svg";
import xa from "./xa.png";
import { Button, Container, Modal, Image } from "react-bootstrap";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../Styles/Landing.css";
import { Label } from "react-bootstrap";


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
    const style = {
      bg: {
        backgroundImage: `url(${zx})`,
        backgrounRepeat: "no-repeat",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundAttachment: "fixed",
        backgrounSize: "3000px 1000px"
      },
      login: {
        float: "right",
        marginTop: "50px",
        marginRight: "50px",
        width: "150px",
        height: "50px",
        border: "5px",
        backgroundColor: "#667FFF",
        borderRadius: "10px",
        fontSize: "20px",
        color: "white",
        fontFamily: "Titillium Web",
        opacity: "0.7"
      },
      register: {
        margin: "0 auto",
        display: "block",
        textAlign: "center",
        width: "200px",
        height: "60px",
        border: "0px",
        backgroundColor: "#667FFF",
        borderRadius: "20px",
        fontSize: "30px",
        color: "white",
        fontFamily: "Titillium Web",
        opacity: "0.7"
      },
      text: {
        textDecoration: "underline"
      },
      t: {
        fontSize:"20px",
        textAlign: "center",
        justifyContent: "center",
        marginBottom: "50px",
        color: "white",
        textShadow: "2px 2px #000000",
        fontFamily: "Lato"
      },
      h1: {
        textAlign: "center",
        justifyContent: "center",
        fontSize: "50px",
        marginTop: "10px",
        marginBottom: "10px",
        color: "white",
        textShadow: "5px 5px #000000",
        fontFamily: "Titillium Web"
      },
      div: {
        opacity: "0.6",
        display: "block",
        backgroundColor: "white",
        textAlign: "center",
        justifyContent: "center",
        fontSize: "50px",
        marginTop: "150px",
        fontFamily: "Lato"
      },
      moda: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)"
      },
      form: {
        display: "block",
        margin: "0 auto",
        width: "400px",
        height: "50px",
        border: "0px ",
        borderStyle: "solid",
        borderRadius: "10px",
        marginTop: "10px",
        backgroundColor: "#CCDDFF",
        paddingLeft: "20px"
      },
      ftext: {
        display: "block",
        marginTop: "5px",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "25px"
      },
      login2: {
        display: "block",
        margin: "0 auto",
        width: "150px",
        height: "50px",
        border: "5px",
        backgroundColor: "#667FFF",
        borderRadius: "10px",
        fontSize: "20px",
        color: "white",
        fontFamily: "Titillium Web"
      },
      tittle: {
        display: "block",
        textAlign: "center",
        justifyContent: "center"
      },
      lg: {
        position: "relative",
        width: "342px",
        fontWeight: "bold",
        height: "248px",
        fontSize: "50px",
        marginLeft: "20px",
        backgroundAttachment: "fixed",
        top: "70px",
        fontFamily: "Bowlby One SC",
        color: "white",
        textShadow: "1px 3px 0 #969696, 1px 13px 5px #aba8a8",
        opacity:"0.9"
      }
    };

    return (
      <Container fluid style={style.bg}>
        <div>
          <label style={style.lg}>Pets-Match</label>
          {/* <Image src={xa} fluid style={style.lg}></Image> */}
          <link
            href="https://fonts.googleapis.com/css?family=Lato|Montserrat|Titillium+Web:300,400,700&display=swap"
            rel="stylesheet"
          ></link>
          <button
            className="blogin"
            onClick={() => {
              this.hlogin(login);
            }}
          >
            LOGIN
          </button>
          <br />
          <h1 style={style.h1}>
            Join Now! <br />
            And Make Your Pet Happy.
          </h1>
          <br />
          <p style={style.t}>
            by clicking enter, you agree to
            <a style={style.text}> our terms.</a>
            Learn how we process your data in our
            <a style={style.text}>Pivacy Policy</a> and
            <a style={style.text}>Cookie Policy</a>
          </p>
          <button
            className="breg"
            onClick={() => {
              this.hregister(register);
            }}
          >
            REGISTER
          </button>
          <div style={style.div}>FIND YOUR PET'S MATCH!</div>
        </div>

        <Modal
          show={login}
          onHide={() => this.hlogin(login)}
          style={style.moda}
        >
          <Modal.Header closeButton>
            <Modal.Title style={style.tittle}>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input placeholder="  Email" style={style.form}></input>
              <input
                placeholder="  Password"
                style={style.form}
                type="password"
              ></input>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/home">
              <Button variant="primary" style={style.login2}>
                Login
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>

        <Modal
          show={register}
          onHide={() => this.hregister(register)}
          style={style.moda}
        >
          <Modal.Header closeButton>
            <Modal.Title style={style.tittle}>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input placeholder="  Breeder" style={style.form}></input>
              <input placeholder="  Email" style={style.form}></input>
              <input
                placeholder="  Password"
                style={style.form}
                type="password"
              ></input>
              <input placeholder="  Phone Breeder" style={style.form}></input>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={this.closeModal}
              style={style.login2}
            >
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default App;
