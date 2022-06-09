import React from 'react';

import Carousel from '../../components/Carousel';
import SearchBar from '../../components/SearchBar';
import { Container } from './styles';

const Home: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <Container>
      <section>
        <div id="searchbar-wrapper">
          <h2>Please tell us what you need today</h2>
          <SearchBar />
        </div>
        <div id="carousel-wrapper">
          <h3>Recommended</h3>
          <Carousel />
        </div>
      </section>
    </Container>
  );
};

export default Home;
