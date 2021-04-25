import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel =() => {
        return (
            <Carousel className='imageSlider' autoPlay={true} showThumbs={false} showStatus={false} showIndicators={false} showArrows={false} infiniteLoop>
                <div><img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1605608084/klipartz.com_5_hffqo3.png" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1605608078/klipartz.com_4_dk6dgh.png" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1605608090/klipartz.com_3_nq2xvp.png" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1605608072/klipartz.com_2_ge056u.png" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1605608077/klipartz.com_a0s6tz.png" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1605608078/klipartz.com_4_dk6dgh.png" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1605608072/klipartz.com_2_ge056u.png" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1605608075/klipartz.com_1_ux9rbh.png" alt="" /></div>
            </Carousel>
        );
    }


export default DemoCarousel