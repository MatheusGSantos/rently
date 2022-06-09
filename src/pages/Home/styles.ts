import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;

  section {
    width: 100%;
    padding-top: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: #666568;
      margin-bottom: 1rem;
    }
    #searchbar-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #carousel-wrapper {
      width: 100%;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      margin-top: 6rem;
      h3 {
        color: #666568;
        margin-bottom: 2rem;
      }
    }
  }
`;
