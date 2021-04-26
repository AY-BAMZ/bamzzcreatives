import React, { Component } from "react";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000000", borderRadius: '50%', width: 50, height: 50, alignItems: 'center', padding: 15 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000000", borderRadius: '50%', width: 50, height: 50, alignItems: 'center', padding: 15, zIndex: 1 }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{ margin: 0, padding: 0, }}>
        <h2 style={{ fontSize: 50, fontWeight: 800, marginTop: 30, marginBottom: 30, color: "#800080" }}> our services</h2>
        <div style={{ width: 100, margin: 'auto', background: '#000', height: 5, marginBottom: 50 }}></div>
        <Slider style={{ width: '100%', maxWidth: 1250, margin: 'auto' }} {...settings}>
          <div className='services1'>
            <h4 style={{ fontSize: 14, color: '#fff', textShadow: '1px 1px 3px #555' }}>Build Your Brand</h4>
            <h3>Logo Design</h3>
          </div>
          <div className='services2'>
            <h4 style={{ fontSize: 14, color: '#fff', textShadow: '1px 1px 3px #555' }}>Build Your Brand</h4>
            <h3>Business Branding</h3>
          </div>
          <div className='services3'>
            <h4 style={{ fontSize: 14, color: '#fff', textShadow: '1px 1px 3px #555' }}>Build Your Brand</h4>
            <h3>UI UX Design</h3>
          </div>
          <div className='services4'>
            <h4 style={{ fontSize: 14, color: '#fff', textShadow: '1px 1px 3px #555' }}>Build Your Brand</h4>
            <h3>Packaging Design</h3>
          </div>
          <div className='services5'>
            <h4 style={{ fontSize: 14, color: '#fff', textShadow: '1px 1px 3px #555' }}>Build Your Brand</h4>
            <h3>Stationaries</h3>
          </div>
          <div className='services6'>
            <h4 style={{ fontSize: 14, color: '#fff', textShadow: '1px 1px 3px #555' }}>Build Your Brand</h4>
            <h3>Website Development</h3>
          </div>
          <div className='services7'>
            <h4 style={{ fontSize: 14, color: '#fff', textShadow: '1px 1px 3px #555' }}>Build Your Brand</h4>
            <h3>Illustration</h3>
          </div>
          <div style={{ height: 400, width: 250 }} className='services8'>
            <h4 style={{ fontSize: 14, color: '#fff', textShadow: '1px 1px 3px #555' }}>Build Your Brand</h4>
            <h3>Wordpress Website</h3>
          </div>

        </Slider>
      </div>
    );
  }
}
