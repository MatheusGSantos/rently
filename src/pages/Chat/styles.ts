import styled from 'styled-components';
import textureBackground from '../../assets/white_linen_texture.jpg';

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

    background-color: #fff;
    box-shadow: 4px 4px 8px 1px rgb(0 0 0 / 20%);
  }

  aside {
    width: 35%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #4b3387;
    color: #666568;

    div {
      cursor: pointer;
      font-weight: 500;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 2rem;
      border-top: 1px solid #f1f1f1;
      border-left: 1px solid #f1f1f1;
      border-bottom: 1px solid #f1f1f1;
      transition: background-color 0.1s ease-in-out;

      &:hover {
        background-color: #fdfcff;
      }
    }
  }

  .active {
    background-color: #fdfcff;
    border-top: 1px solid #4b3387;
    border-left: 1px solid #4b3387;
    border-bottom: 1px solid #4b3387;
  }

  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: url(${textureBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;

    .user-message {
      display: flex;
      background-color: #fdfcff;
      width: 70%;
      padding: 1rem;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      margin-top: 1.5rem;
    }

    .seller-message {
      display: flex;
      align-self: flex-end;
      background-color: #d9dfef;
      width: 70%;
      padding: 1rem;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      margin-top: 1.5rem;
      color: #403f42;
    }

    /* h2 {
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
    } */

    div {
      width: 100%;
    }

    #messages {
      flex: 1;
      padding: 2rem 3rem 1rem;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      color: #666568;
      overflow-y: scroll;

      /* width */
      ::-webkit-scrollbar {
        width: 0.5rem;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: transparent;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 8px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }

    #input-field {
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 0.6135rem 1rem;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      input {
        flex: 1;
        margin-right: 0.5rem;
        padding: 0.8rem;

        outline: 0;
        border: 1px solid #d7d7d7;
        border-radius: 5px;
        font-size: 14px;
      }

      svg {
        cursor: pointer;
        transform: rotate(8deg);
      }
    }
  }
`;
