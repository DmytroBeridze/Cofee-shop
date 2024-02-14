import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CoffeeCarousel extends Component {
  constructor(props) {
    super(props);
    this.settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // variableWidth: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }
  render() {
    return (
      <Slider {...this.settings} className="our-best-slide">
        {this.props.productCard}
      </Slider>
    );
  }
}
