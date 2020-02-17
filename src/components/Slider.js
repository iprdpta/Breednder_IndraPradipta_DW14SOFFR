import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { Container } from "react-bootstrap";

const Slider = () => {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <RangeSlider tooltip="off" variant="primary"
        min={0}
        max={200}
        value={value}
        onChange={changeEvent => setValue(changeEvent.target.value)}
      />
      <br />
      <label
      >
        {value} KM
      </label>
    </Container>
  );
};
export default Slider;
