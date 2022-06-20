import React, { MouseEventHandler, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { FaStar, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { IResultInfo } from '../../services/dtos';

export interface ICardProps extends IResultInfo {
  style?: React.CSSProperties;
  loading: boolean;
  showTrashCan?: boolean;
  deleteCallBack?: (params: Record<string, any> | undefined) => void;
}

const Card: React.FC<ICardProps> = ({
  id,
  description,
  image,
  price,
  ObjectName,
  OwnerName,
  category,
  email,
  loading,
  style,
  deleteCallBack,
  showTrashCan,
}) => {
  const navigate = useNavigate();
  const handleClick = (): void => navigate(`/product/${id}`);
  return (
    <Container style={style} onClick={handleClick}>
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
            <h2>{ObjectName}</h2>
            <p>
              {description.length > 30
                ? `${description.substr(0, 30)}...`
                : description}
            </p>
            <div id="card-body-footer">
              <div id="seller-container">
                <p>Seller: {OwnerName}</p>
              </div>
              <p>
                {showTrashCan ? (
                  <FaTrash
                    size={16}
                    color="#ff6b6b"
                    onClick={(e: any) => {
                      e.stopPropagation();
                      deleteCallBack && deleteCallBack({ id });
                    }}
                  />
                ) : (
                  <FaStar size={16} color="#dbda14" />
                )}
                {!showTrashCan && ' 42'}
              </p>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Card;
