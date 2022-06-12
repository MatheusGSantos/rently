import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import carsImg from '../../assets/homepage/cars.png';
import computersImg from '../../assets/homepage/computers.png';
import furnitureImg from '../../assets/homepage/furniture.png';
import kitchenImg from '../../assets/homepage/kitchen.png';
import smartphonesImg from '../../assets/homepage/smartphones.png';
import gamingImg from '../../assets/homepage/gaming.png';
import { CarouselContainer, CustomizedSlider } from './styles';

const Carousel: React.FC = () => {
  const navigate = useNavigate();
  const navigateToSearch = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    category: string,
  ): void => {
    e.stopPropagation();
    navigate({ pathname: '/search', search: `?category=${category}` });
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    draggable: false,
  };
  return (
    <CustomizedSlider {...settings}>
      <div>
        <CarouselContainer>
          <div onClick={(e) => navigateToSearch(e, 'Cars')}>
            <img src={carsImg} alt="car" />
          </div>
          <p>Cars</p>
        </CarouselContainer>
      </div>
      <div>
        <CarouselContainer>
          <div onClick={(e) => navigateToSearch(e, 'Computers')}>
            <img src={computersImg} alt="computer" />
          </div>
          <p>Computers</p>
        </CarouselContainer>
      </div>
      <div>
        <CarouselContainer>
          <div onClick={(e) => navigateToSearch(e, 'Furniture')}>
            <img src={furnitureImg} alt="furniture" />
          </div>
          <p>Furniture</p>
        </CarouselContainer>
      </div>
      <div>
        <CarouselContainer>
          <div onClick={(e) => navigateToSearch(e, 'Kitchen')}>
            <img src={kitchenImg} alt="kitchen" />
          </div>
          <p>Kitchen</p>
        </CarouselContainer>
      </div>
      <div>
        <CarouselContainer>
          <div onClick={(e) => navigateToSearch(e, 'Smartphones')}>
            <img src={smartphonesImg} alt="smartphone" />
          </div>
          <p>Smartphones</p>
        </CarouselContainer>
      </div>
      <div>
        <CarouselContainer>
          <div onClick={(e) => navigateToSearch(e, 'Gaming')}>
            <img src={gamingImg} alt="gaming" />
          </div>
          <p>Gaming</p>
        </CarouselContainer>
      </div>
    </CustomizedSlider>
  );
};

export default Carousel;
