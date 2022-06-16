import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardContainer from '../../components/CardContainer';
import SearchBar from '../../components/SearchBar';
import { ApiService } from '../../services/ApiService';
import { IResultsFromSearchDTO } from '../../services/dtos';
import { Container, PaginationNumber } from './styles';

// const cardContentListMock = [
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
//   {
//     id: '4',
//     description: 'bla',
//     image: 'vasd',
//     price: 'fafdas',
//     title: 'aaa',
//     seller: 'asdfas',
//   },
//   {
//     id: '5',
//     description: 'bla',
//     image: 'vasd',
//     price: 'fafdas',
//     title: 'aaa',
//     seller: 'asdfas',
//   },
//   {
//     id: '6',
//     description: 'bla',
//     image: 'vasd',
//     price: 'fafdas',
//     title: 'aaa',
//     seller: 'asdfas',
//   },
//   {
//     id: '7',
//     description: 'bla',
//     image: 'vasd',
//     price: 'fafdas',
//     title: 'aaa',
//     seller: 'asdfas',
//   },
//   {
//     id: '8',
//     description: 'bla',
//     image: 'vasd',
//     price: 'fafdas',
//     title: 'aaa',
//     seller: 'asdfas',
//   },
//   {
//     id: '9',
//     description: 'bla',
//     image: 'vasd',
//     price: 'fafdas',
//     title: 'aaa',
//     seller: 'asdfas',
//   },
//   {
//     id: '10',
//     description: 'bla',
//     image: 'vasd',
//     price: 'fafdas',
//     title: 'aaa',
//     seller: 'asdfas',
//   },
// ];

const Search: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [cardContentList, setCardContentList] = useState<IResultsFromSearchDTO>([] as IResultsFromSearchDTO);
  const [page, setPage] = useState(1);
  const api = new ApiService();

  const getCategoryId = (category: string | null): string => {
    switch (category) {
      case 'Cars':
        return '1';
      case 'Computers':
        return '2';
      case 'Furniture':
        return '3';
      case 'Kitchen':
        return '4';
      case 'Smartphones':
        return '5';
      case 'Gaming':
        return '6';
      default:
        return '';
  }

  useEffect(()=> {
    const fetchAndUpdate = async () => {
      const searchValue = searchParams.get('value') ?? getCategoryId(searchParams.get('category'));
      const searchResult = await api.getResultsFromSearch(searchValue);
      setCardContentList(searchResult);
    } 

    fetchAndUpdate();
  }, [searchParams]);

  const getPaginationNumbers = (): number[] => {
    const n: number[] = [];
    let counter = 1;

    for (let i = 0; i < cardContentList.length; i += 3 * 3) {
      n.push(counter++);
    }
    return n;
  };

  return (
    <Container>
      <section>
        <div id="searchbar-wrapper">
          <SearchBar redirectToSearch={false} updateUrl />
        </div>
      </section>
      <section>
        <div id="content">
          <div id="products-wrapper">
            <h3>
              Showing {cardContentList.length} results for &quot;
              {searchParams.get('value') ?? searchParams.get('category')}&quot;
            </h3>
            <CardContainer
              columns={3}
              gap="8px"
              rows={Math.min(Math.ceil(cardContentList.length / 3), 3)}
              loading={loading}
              content={cardContentList.slice((page - 1) * 3 * 3, page * 3 * 3)}
            />
          </div>
          <div id="pagination-wrapper">
            {getPaginationNumbers().map((n) => {
              return (
                <PaginationNumber
                  type="button"
                  key={n}
                  onClick={() => setPage(n)}
                  isFocused={page === n}
                >
                  {n}
                </PaginationNumber>
              );
            })}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Search;
