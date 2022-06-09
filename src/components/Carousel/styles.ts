import Slider from 'react-slick';
import styled from 'styled-components';

export const CustomizedSlider = styled(Slider)`
  .slick-arrow {
    &::before {
      color: #d9d0f2;
      opacity: 1;
    }
  }

  ul {
    bottom: -50px !important;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
  }
  p {
    font-size: 0.875rem;
    margin-top: 1rem;
    font-weight: 500;
    color: #666568;
  }
`;
