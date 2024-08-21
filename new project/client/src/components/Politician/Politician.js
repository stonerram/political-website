import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json';
import './Politician.css';
import { sliderSettings } from '../../utils/common';

const Politician = () => {
  const customSliderSettings = {
    ...sliderSettings,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30, // Increase space between slides for larger screens
      },
    },
  };

  return (
    <section className="r-wrapper">
      <div className="padding innerWidth r-container">
        <div className="r-head flexColStart">
          <span style={{ marginLeft: '-0.5rem' }} className="orangeText"><b><u>TDP Party</u></b></span>
          <span style={{ marginLeft: '-0.5rem' }} className="primaryText">Popular Leaders</span>
        </div>

        <Swiper {...customSliderSettings}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt={card.name} />
                <span className="r-role">{card.role}</span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.details}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Politician;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
