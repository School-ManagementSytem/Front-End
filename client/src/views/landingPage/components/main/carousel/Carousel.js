import React from 'react';
import './carousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import boysOutside from '../../../../../assets/boys-group-outside.jpg';
import girlDiorama from '../../../../../assets/girls-holding-diorama.jpg';
import girlsLine from '../../../../../assets/girls-in-a-line.jpg';
import groupSong from '../../../../../assets/group-singsong.jpg';
import cardGame from '../../../../../assets/kids-playing-card-match-game.jpg';
import prevArrow from '../../../../../assets/prev-arrow.png';
import nextArrow from '../../../../../assets/next-arrow.png';

// Assets

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <img alt="speakout"
            src={nextArrow}
            className={className}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <img alt="speakout"
            src={prevArrow}
            className={className}
            onClick={onClick}
        />
    );
}


function Carousel() {
    const settings = {
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        centerMode: true,
        className: "center",
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <section className="carousel">
            <div className="wrap">
                <h2>Gallery</h2>
                <Slider {...settings}>
                    <div>
                        <img alt="speakout" src={boysOutside} />
                    </div>
                    <div>
                        <img alt="speakout" src={girlDiorama} />
                    </div>
                    <div>
                        <img alt="speakout" src={girlsLine} />
                    </div>
                    <div>
                        <img alt="speakout" src={groupSong} />
                    </div>
                    <div>
                        <img alt="speakout" src={cardGame} />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Carousel;