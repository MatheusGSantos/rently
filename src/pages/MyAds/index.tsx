import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardContainer from '../../components/CardContainer';
import SearchBar from '../../components/SearchBar';
import { ApiService } from '../../services/ApiService';
import { IResultsFromSearchDTO } from '../../services/dtos';
import { Container, PaginationNumber } from './styles';


const MyAds: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [contentList, setContentList] = useState<IResultsFromSearchDTO>(
    [] as IResultsFromSearchDTO,
  );
  const [cardContentList, setCardContentList] = useState<IResultsFromSearchDTO>(
    [] as IResultsFromSearchDTO,
  );
  const [page, setPage] = useState(1);
  const api = new ApiService();

  useEffect(() => {
    const searchValue = searchParams.get('value');
    if (searchValue) {
      searchValue === '' ?
      setCardContentList(contentList) :
      setCardContentList(contentList.filter(item => item.ObjectName.toLowerCase().includes(searchValue.toLowerCase())));
    } else  {
      setCardContentList(contentList);
    }

  }, [searchParams]);

  useEffect(() => {
    const fetchMyAds = async (): Promise<void> => {
      const myAds = await api.getMyAds();
      setCardContentList(myAds);
      setContentList(myAds);
      setLoading(false);
    };

    fetchMyAds();
  }, []);

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
          <SearchBar redirectToSearch={false} updateUrl placeholder='Search my ads'/>
        </div>
      </section>
      <section>
        <div id="content">
          <div id="products-wrapper">
            <CardContainer
              columns={3}
              gap="8px"
              rows={Math.min(Math.ceil(cardContentList.length / 3), 3)}
              loading={loading}
              showTrashCan={true}
              deleteCallBack={(params: Record<string, any> | undefined) => {
                if (params) {
                  api.deleteItem(params.id);
                  setCardContentList(cardContentList.filter((item) => item.id !== params.id));
                }
              }}
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

export default MyAds;
