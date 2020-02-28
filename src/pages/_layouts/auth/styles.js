import styled from 'styled-components';
import { darken } from 'polished';



export const Container = styled.div`
  height: 100%;
  background: linear-gradient(-0deg, #715, #090979);
  display: flex;
  justify-content: center;
  align-items: center;
  
  .partic {
    box-sizing: border-box;
    position: absolute;
    height: 100vh;
    width: 100vw;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    position: relative;

    input {
      background: rgba(0,0,0,0.5);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #FFF;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255,255,255,0.8);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #FFF;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.06, '#3b9eff')};
      }
    }
    
    a {
      color: #FFF;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
