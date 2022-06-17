import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  #wrapper {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 4px 4px 8px 1px rgb(0 0 0 / 20%);
  }

  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 4rem;

    h2 {
      color: #666568;
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
    }
    h3 {
      font-size: 1rem;
      color: #fff;
      padding: 0.8rem 2rem;
      padding-right: 8rem;
      border-radius: 27px 0 0 27px;
      background-color: #4b3387;
      margin-bottom: 2rem;
    }

    div {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  #top-section {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    #top-section-div1 {
      flex: 1;
      h1 {
        font-size: 2rem;
        font-weight: 700;
      }

      img {
        height: 350px;
        width: 600px;
      }
    }

    #top-section-div2 {
      width: 32%;
      padding-left: 2rem;
    }
  }

  #bottom-section-div {
    justify-content: flex-start !important;
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    h1 {
      margin-bottom: 1rem;
      color: #666568;
      font-weight: 700;
    }
    p {
      color: #7c7c7c;
    }
  }

  #verified {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    height: 70px;
    margin-top: auto;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h4 {
      color: #69569d;
      font-weight: 700;
    }
  }
`;

export const SellerContainer = styled.div`
  width: 100%;

  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: 200px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    padding: 0.7rem 1rem;
    width: 80%;
    outline: 0;
    border: 0;
    font-weight: 500;
    background-color: #f28000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 27px;
  }
`;
