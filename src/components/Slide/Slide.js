import React from "react";
import Slider from "react-slick";
import H from './pictures/harrypotter.jpg';
import S from './pictures/superheroes.jpg';
import K from './pictures/kingkong.jpg';
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
                    <img src={S} alt="Super Heroes" className="imgSlide"/>
                </div>
                <div>
                    <img src={K} alt="King Kong" className="imgSlide"/>
                </div>
                <div>
                    <img src={H} alt="Harry Potter" className="imgSlide"/>
                </div>
            </Slider>
        );
    }
}

export default Slide;