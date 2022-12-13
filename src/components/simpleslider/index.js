import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../mock.json";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>{/* <img src="/images/misc/a-silent-voice.jpg" /> */}</div>
          <div>
            <h2> Single Item</h2>
            <h3>2</h3>
          </div>
          <div>
            <h2> Single Item</h2>
            <h3>3</h3>
          </div>
          <div>
            <h2> Single Item</h2>
            <h3>4</h3>
          </div>
          <div>
            <h2> Single Item</h2>
            <h3>5</h3>
          </div>
          <div>
            <h2> Single Item</h2>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
