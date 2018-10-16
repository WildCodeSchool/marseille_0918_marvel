import React from "react";
import Slider from "react-slick";
import A from './pictures/avengers.jpg';
import J from './pictures/justiceleague.jpg';
import './Slide.scss'


class Slide extends React.Component {

    render() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 5000,
        fade: true,
        autoplay: true,
    };

        return (
            <Slider {...settings} className="slide">
                <div>
                    <img src={J} alt="Justice League" className="imgSlide"/>
                </div>
                <div>
                    <img src={A} alt="Avengers" className="imgSlide"/>
                </div>
            </Slider>
        );
    }
}

export default Slide;