import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { FaStar } from 'react-icons/fa';
import { Container } from './styles';

export interface ICardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  seller: string;
  price: string;
  style?: React.CSSProperties;
}

const Card: React.FC<ICardProps> = ({
  id,
  title,
  description,
  image,
  seller,
  price,
  style,
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <Container style={style}>
      {loading ? (
        <>
          <Skeleton height="128px" width="128px" />
          <div id="card-body">
            <Skeleton height="24px" width="200px" />
            <Skeleton height="20px" width="100%" />
            <Skeleton height="20px" width="100%" />
            <Skeleton height="20px" width="100%" />
            <div id="card-body-footer">
              <div id="seller-container">
                <p>Seller:</p>
                <Skeleton height="20px" width="100px" />
              </div>
              <p>
                <FaStar size={16} color="#dbda14" /> -
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <img src={image} alt="title" />
          <div id="card-body">
            <h2>{title}</h2>
            <p>{description}</p>
            <div id="card-body-footer">
              <div id="seller-container">
                <p>Seller: {seller}</p>
              </div>
              <p>
                <FaStar size={16} color="#dbda14" /> 42
              </p>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Card;
