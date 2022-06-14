import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams, useSearchParams } from 'react-router-dom';
import { BsChat } from 'react-icons/bs';
import { RiShieldCheckFill } from 'react-icons/ri';
import { Container, SellerContainer } from './styles';

const Product: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Container>
      {loading ? (
        <div id="wrapper">
          <section id="top-section">
            <div id="top-section-div1">
              <h1>Title</h1>
              <Skeleton height="300px" width="600px" />
            </div>
            <div id="top-section-div2">
              <h3>$ Price</h3>
              <SellerContainer>
                <h2>Seller</h2>
                <button type="button">
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
              assdcas rnsdncascs aejansfjas dasjiasoa sdasas. aos asdjnoxc asd
              cxaons assdcas rnsdncascs aejansfjas dasjiasoa sdasas. aos
              asdjnoxc asd cxaons assdcas rnsdncascs aejansfjas dasjiasoa
              sdasas. aos asdjnoxc asd cxaons assdcas rnsdncascs aejansfjas
              dasjiasoa sdasas. aos asdjnoxc asd cxaons assdcas rnsdncascs
              aejansfjas dasjiasoa sdasas. aos asdjnoxc asd cxaons assdcas
              rnsdncascs aejansfjas dasjiasoa sdasas. aos asdjnoxc asd cxaons
            </p>
          </section>
        </div>
      ) : (
        <div id="wrapper">
          <section>
            <img src="" alt="" />
            <div>
              <h1>Title</h1>
              <p>Seller</p>
              <h3>Price</h3>
            </div>
          </section>
          <section>
            <h1>Description</h1>
            <p>
              assdcas rnsdncascs aejansfjas dasjiasoa sdasas. aos asdjnoxc asd
              cxaons
            </p>
          </section>
        </div>
      )}
    </Container>
  );
};

export default Product;
