import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container } from './styles';

interface ICardProps {
  title: string;
  description: string;
  image: string;
  seller: string;
}

const Card: React.FC<ICardProps> = ({ title, description, image, seller }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Container>
      {loading ? (
        <>
          <Skeleton height="120px" width="120px" />
          <div id="card-body">
            <Skeleton height="20px" width="200px" />
          </div>
        </>
      ) : (
        <img src={image} alt="title" />
      )}
    </Container>
  );
};

export default Card;
