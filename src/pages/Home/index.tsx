import React, { useRef } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SearchBar from '../../components/SearchBar';
import { Container } from './styles';

const Home: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <Container>
      <section>
        <div className="searchbar-wrapper">
          <h3>Please tell us what you need today</h3>
          <SearchBar />
        </div>
      </section>
    </Container>
  );
};

export default Home;
