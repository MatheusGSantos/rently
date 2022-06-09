import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';

import carsImg from '../../assets/homepage/cars.png';
import computersImg from '../../assets/homepage/computers.png';
import furnitureImg from '../../assets/homepage/furniture.png';
import kitchenImg from '../../assets/homepage/kitchen.png';
import smartphonesImg from '../../assets/homepage/smartphones.png';
import gamingImg from '../../assets/homepage/gaming.png';
import { CarouselContainer, CustomizedSlider } from './styles';

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <CustomizedSlider {...settings}>
      <div>
        <CarouselContainer>
          <img src={carsImg} alt="car" />
          <p>Cars</p>
        </CarouselContainer>
      </div>
      <div>
        <CarouselContainer>
          <img src={computersImg} alt="computer" />
          <p>Computers</p>
        </CarouselContainer>
      </div>
      <div>
        <CarouselContainer>
          <img src={furnitureImg} alt="furniture" />
          <p>Furniture</p>
        </CarouselContainer>
      </div>
      <div>
        <CarouselContainer>
          <img src={kitchenImg} alt="kitchen" />
          <p>Kitchen</p>
        </CarouselContainer>
      </div>
      <div>
        <CarouselContainer>
          <img src={smartphonesImg} alt="smartphone" />
          <p>Smartphones</p>
        </CarouselContainer>
      </div>
      <div>
        <CarouselContainer>
          <img src={gamingImg} alt="gaming" />
          <p>Gaming</p>
        </CarouselContainer>
      </div>
    </CustomizedSlider>
  );
};

export default Carousel;
