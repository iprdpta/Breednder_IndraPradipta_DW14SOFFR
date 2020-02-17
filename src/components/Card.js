import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
import loc from "../Assets/pin.svg";
import psn from "../Assets/user.svg";
import { Image } from "react-bootstrap";
import { Container } from "react-bootstrap";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, age, distance, text, pics } = data[i];
    return (
        <animated.div 
          key={i}
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            )
          }}
        >
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans)
            }}
          >
            <div className="cd">
              <Carousel>
                {pics.map((pic, index) => (
                  <img
                    className="ft"
                    src={pic}
                    key={index}
                    alt="profilePicture"
                  />
                ))}
              </Carousel>
              <p className="t1">{name}</p>
              <br />
              <Image src={loc} className="lico" />
              <label className="t2">{distance}</label>
              <br />
              <Image src={psn} className="pico" />
              <label className="t3">Breeder : {text}</label>
            </div>
          </animated.div>
        </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
