import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding-bottom: 2rem;

  #content {
    padding: 2rem;
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 4px 4px 8px 1px rgb(0 0 0 / 20%);
    min-width: 1264px;
    min-height: 740px;
  }

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
    h3 {
      color: #666568;
      margin-bottom: 2rem;
    }
    #searchbar-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #products-wrapper {
      max-width: 1200px;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    #pagination-wrapper {
      display: flex;
      justify-content: end;
      align-items: center;
      margin-top: 2.5rem;
    }
  }
`;

export const PaginationNumber = styled.button<{ isFocused: boolean }>`
  outline: none;
  border: none;
  background: transparent;
  color: #666568;
  ${({ isFocused }) => isFocused && `color: #4b3387;`}
  font-size: 1rem;
  font-weight: bold;
  & + button {
    margin-left: 0.5rem;
  }
`;
