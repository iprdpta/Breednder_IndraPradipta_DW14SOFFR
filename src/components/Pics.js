import React from "react";
import { useState } from "react";
import {
  Image,
  Carousel
} from "react-bootstrap";
import tp from "../Assets/hamsss.jpg";
import Data from "../Data/datapicprof.js";
import "../Styles/Pics.css"

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      {Data.map((postData, index) => {
        return (
          <Carousel.Item>
            <Image className="profilepics"
              src={postData.pics}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
