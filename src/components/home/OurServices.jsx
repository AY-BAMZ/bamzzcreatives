import React, { Component } from "react";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
      return (
        <div style={{margin: 0, padding: 0,}}>
          <h2 style={{fontSize: 50, fontWeight: 800, marginTop: 30, marginBottom: 30, color: "#800080"}}> our services</h2>
          <div style={{width: 100, margin: 'auto', background: '#000', height: 5, marginBottom: 50}}></div>
          <Slider style={{width: '100%', maxWidth: 1250, margin: 'auto'}} {...settings}>
            <div style={{height: 400, width: 250}}  className='services'>
              <h4 style={{fontSize: 14, color: '#fff', textShadow: '1px 1px 3px #555'}}>Build Your Brand</h4>
              <h3>Logo Design</h3>
            </div>
           
          </Slider>
        </div>
      );
    }
  }
