import React, {useState, useEffect} from 'react';
import Card from '../../components/Card';
import CardContainer from '../../components/CardContainer';
import {IResultsFromSearchDTO} from '../../services/dtos'
import { ApiService } from '../../services/ApiService';


import Carousel from '../../components/Carousel';
import SearchBar from '../../components/SearchBar';
import { Container } from './styles';

// const cardContentList = [
//   {
//     id: '1',
//     description: 'bla',
//     image: 'vasd',
//     price: 'fafdas',
//     title: 'aaa',
//     seller: 'asdfas',
//   },
//   {
//     id: '2',
//     description: 'bla',
//     image: 'vasd',
//     price: 'fafdas',
//     title: 'aaa',
//     seller: 'asdfas',
//   },
//   {
//     id: '3',
//     description: 'bla',
//     image: 'vasd',
//     price: 'fafdas',
//     title: 'aaa',
//     seller: 'asdfas',
//   },
// ];

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [cardContentList, setCardContentList] = useState<IResultsFromSearchDTO>([] as IResultsFromSearchDTO);
  const api = new ApiService();

  useEffect(() => {
    const fetchAndUpdate = async (): Promise<void> => {
      const searchResult = await api.getResultsForHomePage();
      setCardContentList(searchResult);
      setLoading(false);
    };

    fetchAndUpdate();
  }, []);

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
      <section>
        <div id="popular-products-wrapper">
          <h3>Popular</h3>
          <CardContainer
            columns={2}
            gap="8px"
            rows={2}
            content={cardContentList}
            loading={loading}
          />
        </div>
      </section>
    </Container>
  );
};

export default Home;
