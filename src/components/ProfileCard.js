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
  InputGroup,
  CardGroup
} from "react-bootstrap";
import { Link } from "react-router-dom";
import tp from "../Assets/tp.jfif";
import Pics from "./Pics.js";
import "../Styles/scrollbar.css";
import loc from "../Assets/pin.svg";
import psn from "../Assets/user.svg";
import gen from "../Assets/gender.svg";
import phn from "../Assets/phone.svg";
import "../Styles/ProfileCard.css"
import "../Styles/Modal.css"

const ProfileCard = () => {
  return (
    <div id="prfl">
      <div id="info">
          <label className="bred">Hams</label>
          <label className="bred ddx">Hamster</label>
        </div>
      <div className="piccc">
        <Pics />
      </div>
      <div className="cbdy scrollbar scrollbar-juicy-peach">
        <Container className="coo">
          <div className="texx">
            <label>
              <Image className="iconn" src={psn} />
              Breeder : Indra Pradipta
            </label>
            <br />
            <label>
              <Image className="iconn" src={loc} />
              9999 Kilometer dari sini
            </label>
            <br />
            <label>
              <Image className="iconn" src={gen} />
              Male - Child
            </label>
            <br />
            <label>
              <Image className="iconn" src={phn} />
              Phone Breeder : +628696969696
            </label>
          </div>
          <div className="aboutpet">
            <label id="about">About Pet</label>
            <p>
              asdosafpw[fromdsvdsavbavw nslvnsadv]avdni anvdsadsnvdasivdsavn
              sanvddsanvdsavi anvdpdsavndsvidsnv ndsavdwvnew] nvcslvnp
            </p>
            <Link to="/profileedit">
              <button id="edts">Edit</button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default ProfileCard;
