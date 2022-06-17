import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useNavigate, useParams } from 'react-router-dom';
import { BsChat } from 'react-icons/bs';
import { RiShieldCheckFill } from 'react-icons/ri';
import { Container, SellerContainer } from './styles';
import { IResultInfo } from '../../services/dtos';
import { ApiService } from '../../services/ApiService';

const Product: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<IResultInfo>({} as IResultInfo);
  const api = new ApiService();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(()=> {
    const fetchProductInfo = async (): Promise<void> => {
      try {
        const productInfo = await api.getProductInfo(id);
        console.log(productInfo);
        setProduct(productInfo);
        setLoading(false);
      } catch (error) {
        console.info(error);
      }
    }
    fetchProductInfo();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <div id="wrapper">
          <section id="top-section">
            <div id="top-section-div1">
              <h1>-</h1>
              <Skeleton height="350px" width="600px" />
            </div>
            <div id="top-section-div2">
              <h3>$ -</h3>
              <SellerContainer>
                <h2>-</h2>
                <button
                  type="button"
                  
                >
                  <BsChat size={20} style={{ marginRight: '0.5rem' }} /> Chat
                </button>
              </SellerContainer>
              <div id="verified">
                <RiShieldCheckFill
                  size={32}
                  color="#4b3387"
                  style={{ marginRight: '0.5rem' }}
                />
                <h4>Verified</h4>
              </div>
            </div>
          </section>
          <section id="bottom-section-div">
            <h1>Description</h1>
            <p>
              -
            </p>
          </section>
        </div>
      ) : (
        <div id="wrapper">
          <section id="top-section">
            <div id="top-section-div1">
              <h1>{product.ObjectName}</h1>
              <img src="https://i.ytimg.com/vi/igde9tM_QPQ/maxresdefault.jpg" alt="product" />
            </div>
            <div id="top-section-div2">
              <h3>$ {product.price}</h3>
              <SellerContainer>
                <h2>{product.OwnerName}</h2>
                <button
                  type="button"
                  onClick={() => navigate(`/chat/${product.OwnerName}`)}
                >
                  <BsChat size={20} style={{ marginRight: '0.5rem' }} /> Chat
                </button>
              </SellerContainer>
              <div id="verified">
                <RiShieldCheckFill
                  size={32}
                  color="#4b3387"
                  style={{ marginRight: '0.5rem' }}
                />
                <h4>Verified</h4>
              </div>
            </div>
          </section>
          <section id="bottom-section-div">
            <h1>Description</h1>
            <p>
              {product.description}
            </p>
          </section>
        </div>
      )}
    </Container>
  );
};

export default Product;
